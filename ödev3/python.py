#!/usr/bin/env python3
"""
Create up to 20 TSX files named soru1.tsx .. soru20.tsx in the same directory as this script.
If a file exists, it will be skipped to avoid overwriting.
Usage:
  python python.py [count] [basename]
Example:
  python python.py 20 soru
"""

import os
import sys

def create_tsx_files(count=20, base='soru', directory=None):
	if directory is None:
		directory = os.path.dirname(os.path.abspath(__file__))
	created = []
	skipped = []
	for i in range(1, count+1):
		fname = f"{base}{i}.tsx"
		path = os.path.join(directory, fname)
		if os.path.exists(path):
			skipped.append(fname)
			continue
		# Minimal React component template
		comp_name = f"{base.capitalize()}{i}"
		content = (
			"import React from 'react';\n\n"
			f"const {comp_name} = () => {{\n"
			"    return (\n"
			f"        <div>{base}{i}</div>\n"
			"    );\n"
			"};\n\n"
			f"export default {comp_name};\n"
		)
		with open(path, 'w', encoding='utf-8') as f:
			f.write(content)
		created.append(fname)
	return created, skipped

def main():
	count = 20
	base = 'soru'
	if len(sys.argv) >= 2:
		try:
			count = int(sys.argv[1])
		except ValueError:
			print("First argument must be integer count; using default 20")
	if len(sys.argv) >= 3:
		base = sys.argv[2]
	created, skipped = create_tsx_files(count, base)
	if created:
		print(f"Created {len(created)} files:")
		for f in created:
			print(" -", f)
	else:
		print("No new files were created.")
	if skipped:
		print(f"Skipped {len(skipped)} existing files:")
		for f in skipped:
			print(" -", f)

if __name__ == '__main__':
	main()

