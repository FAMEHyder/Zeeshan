// One-off script to generate a minimal, valid placeholder resume PDF.
// Run with: node scripts/generate-resume.js
// Not part of the app runtime — safe to delete after generating the PDF.
const fs = require("fs");
const path = require("path");

const lines = [
  ["Arjun Mehta", 20, true],
  ["Frontend Developer", 13, false],
  ["Bengaluru, India | hello.arjunmehta@gmail.com | +91 98765 43210", 10, false],
  ["", 10, false],
  ["SUMMARY", 13, true],
  ["Frontend developer with 3+ years of freelance experience building fast,", 10, false],
  ["accessible and beautiful web applications using React, Next.js, TypeScript", 10, false],
  ["and Tailwind CSS. Strong eye for UI/UX detail and performance.", 10, false],
  ["", 10, false],
  ["SKILLS", 13, true],
  ["HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS,", 10, false],
  ["Bootstrap, Material UI, Shadcn UI, Git, GitHub, Figma, Vercel", 10, false],
  ["", 10, false],
  ["EXPERIENCE", 13, true],
  ["Freelance Frontend Developer  -  Self-Employed  (2023 - Present)", 11, false],
  ["  Design and build modern, high-performing websites and web apps for", 10, false],
  ["  startups and agencies worldwide.", 10, false],
  ["Frontend Developer Intern  -  PixelCraft Studio  (Jun 2022 - Dec 2022)", 11, false],
  ["  Built and shipped UI components for client dashboards.", 10, false],
  ["", 10, false],
  ["EDUCATION", 13, true],
  ["B.Tech in Computer Science & Engineering  -  Reva University (2019 - 2023)", 10, false],
  ["", 10, false],
  ["CERTIFICATIONS", 13, true],
  ["Meta Front-End Developer Professional Certificate  -  Coursera", 10, false],
  ["React - The Complete Guide  -  Udemy", 10, false],
  ["", 10, false],
  ["This is placeholder resume content generated for a portfolio template.", 9, false],
  ["Replace public/resume/Arjun-Mehta-Resume.pdf with your real resume.", 9, false],
];

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

let y = 740;
const contentParts = ["BT", "/F1 12 Tf"];
for (const [text, size, bold] of lines) {
  contentParts.push(`/${bold ? "F2" : "F1"} ${size} Tf`);
  contentParts.push("1 0 0 1 56 " + y + " Tm");
  contentParts.push(`(${escapePdfText(text)}) Tj`);
  y -= size + 6;
}
contentParts.push("ET");
const contentStream = contentParts.join("\n");

const objects = [];
objects.push("<< /Type /Catalog /Pages 2 0 R >>");
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
objects.push(
  "<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /MediaBox [0 0 612 792] /Contents 6 0 R >>"
);
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
objects.push(`<< /Length ${Buffer.byteLength(contentStream, "latin1")} >>\nstream\n${contentStream}\nendstream`);

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

const outDir = path.join(__dirname, "..", "public", "resume");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "Arjun-Mehta-Resume.pdf"), pdf, "latin1");
console.log("Generated public/resume/Arjun-Mehta-Resume.pdf");
