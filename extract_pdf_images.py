import fitz
import sys
import os

pdf_path = sys.argv[1]
output_dir = sys.argv[2]
doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    output_path = f"{output_dir}/pdf_page_{i+1}.png"
    pix.save(output_path)
    print(f"Saved {output_path}")
