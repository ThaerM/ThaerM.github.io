from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "thaer_mosa_resume.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#071827")
TEAL = colors.HexColor("#087E8B")
INK = colors.HexColor("#142230")
MUTED = colors.HexColor("#526575")
LINE = colors.HexColor("#D8E2E8")
PALE = colors.HexColor("#EAF6F7")

styles = getSampleStyleSheet()
name = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=28, textColor=NAVY, alignment=TA_CENTER, spaceAfter=3)
headline = ParagraphStyle("Headline", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=TEAL, alignment=TA_CENTER, spaceAfter=5)
contact = ParagraphStyle("Contact", parent=styles["Normal"], fontSize=8.2, leading=12, textColor=MUTED, alignment=TA_CENTER, spaceAfter=10)
section = ParagraphStyle("Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=NAVY, uppercase=True, spaceBefore=7, spaceAfter=5, borderWidth=0, borderPadding=0)
body = ParagraphStyle("Body", parent=styles["BodyText"], fontSize=8.5, leading=12.3, textColor=INK, spaceAfter=4)
summary = ParagraphStyle("Summary", parent=body, fontSize=9, leading=13, spaceAfter=7)
role = ParagraphStyle("Role", parent=body, fontName="Helvetica-Bold", fontSize=9.4, leading=12, textColor=NAVY, spaceAfter=1)
company = ParagraphStyle("Company", parent=body, fontName="Helvetica-Bold", fontSize=8.2, leading=11, textColor=TEAL, spaceAfter=3)
bullet = ParagraphStyle("Bullet", parent=body, leftIndent=10, firstLineIndent=-7, bulletIndent=2, spaceAfter=2.2)
small = ParagraphStyle("Small", parent=body, fontSize=7.8, leading=10.8, textColor=MUTED)
project = ParagraphStyle("Project", parent=body, fontName="Helvetica-Bold", fontSize=8.5, leading=11.5, textColor=NAVY, spaceAfter=1)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE); canvas.setLineWidth(.5)
    canvas.line(18*mm, 13*mm, 192*mm, 13*mm)
    canvas.setFont("Helvetica", 7); canvas.setFillColor(MUTED)
    canvas.drawString(18*mm, 8.5*mm, "Thaer Mosa | Mobile Engineering Leadership")
    canvas.drawRightString(192*mm, 8.5*mm, f"Page {doc.page}")
    canvas.restoreState()

doc = BaseDocTemplate(str(OUT), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=15*mm, bottomMargin=17*mm, title="Thaer Mosa - Mobile Engineering Leader Resume", author="Thaer Mosa", subject="Mobile Engineering Leadership Resume")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=footer))

def heading(text):
    return [Paragraph(text.upper(), section), Table([[""]], colWidths=[doc.width], rowHeights=[.5], style=TableStyle([("BACKGROUND",(0,0),(-1,-1),TEAL),("BOTTOMPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0)])), Spacer(1,4)]

def job(title, org, dates, bullets):
    items = [Table([[Paragraph(title, role), Paragraph(dates, small)]], colWidths=[doc.width-42*mm,42*mm], style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("ALIGN",(1,0),(1,0),"RIGHT"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)])), Paragraph(org, company)]
    items += [Paragraph(f"• {b}", bullet) for b in bullets]
    items.append(Spacer(1,4))
    return KeepTogether(items)

story = [
    Paragraph("Thaer Mosa Mahmoud Abu-Hureira", name),
    Paragraph("SOFTWARE MOBILE DEVELOPMENT MANAGER | MOBILE ARCHITECTURE & ENGINEERING LEADERSHIP", headline),
    Paragraph("Amman, Jordan &nbsp;|&nbsp; +962 78 547 8309 &nbsp;|&nbsp; <link href='mailto:Thaer.Mosa13@gmail.com' color='#087E8B'>Thaer.Mosa13@gmail.com</link> &nbsp;|&nbsp; <link href='https://www.linkedin.com/in/thaer-mosa-97739093/' color='#087E8B'>LinkedIn</link> &nbsp;|&nbsp; <link href='https://github.com/ThaerM' color='#087E8B'>GitHub</link> &nbsp;|&nbsp; <link href='https://thaerm.github.io/' color='#087E8B'>Portfolio</link>", contact),
]
story += heading("Executive Profile")
story += [Paragraph("Mobile engineering leader with 11+ years of experience delivering 20+ production applications across banking, government, education, enterprise, consumer, and gaming environments. Combines hands-on expertise in Flutter, Xamarin, .NET MAUI, native Android/iOS, Unity, and ASP.NET with team planning, code review, secure mobile delivery, documentation, and production follow-up.", summary)]

highlights = [[Paragraph("11+ YEARS", role), Paragraph("20+ APPS", role), Paragraph("BANKING & GOVERNMENT", role), Paragraph("MOBILE + BACKEND", role)], [Paragraph("Mobile product delivery", small), Paragraph("Production portfolio", small), Paragraph("High-trust environments", small), Paragraph("End-to-end perspective", small)]]
story += [Table(highlights, colWidths=[doc.width/4]*4, style=TableStyle([("BACKGROUND",(0,0),(-1,-1),PALE),("BOX",(0,0),(-1,-1),.5,LINE),("INNERGRID",(0,0),(-1,-1),.5,LINE),("ALIGN",(0,0),(-1,-1),"CENTER"),("VALIGN",(0,0),(-1,-1),"MIDDLE"),("TOPPADDING",(0,0),(-1,0),7),("BOTTOMPADDING",(0,1),(-1,1),7)])), Spacer(1,4)]
story += heading("Professional Experience")
story += [
    job("Software Mobile Development Manager", "Capital Bank | Jordan", "Jun 2025 - Present", ["Lead mobile planning, work breakdown, code review, and technical documentation validation for banking products.", "Strengthen application security through obfuscation and mobile shielding practices.", "Coordinate engineering quality and delivery readiness across the mobile development lifecycle."]),
    job("Mobile Technical Team Lead", "Bank of Jordan | Jordan", "May 2024 - Jun 2025", ["Directed technical planning and task decomposition for regional mobile banking delivery.", "Led code reviews and maintained technical standards and delivery documentation.", "Implemented mobile protection practices including application obfuscation and shielding."]),
    job("Mobile Technical Team Lead", "Apps Wave | Jordan", "Dec 2020 - May 2024", ["Served as the technology focal point across mobile, backend, and web development.", "Owned project planning, work breakdown, technical documentation, and multidisciplinary code review.", "Supported day-to-day delivery through Scrum collaboration and clear engineering decisions."]),
    job("Senior Mobile Developer", "Imagine Technologies | Jordan", "Jul 2019 - Dec 2020", ["Partnered with project management to translate product design and requirements into mobile solutions."]),
    job("Senior Mobile Developer", "Farah Lab | Jordan", "Nov 2018 - Jul 2019", ["Guided team technologies, tools, and techniques while enforcing development standards and procedures."]),
    job("Mobile Developer", "Oakleaves | Jordan", "Oct 2014 - Nov 2018", ["Developed, tested, released, and maintained mobile software while resolving complex technical issues.", "Communicated technical topics with leaders, management, and internal and external customers."]),
    PageBreak(),
]
story += heading("Core Expertise")
skills = [[Paragraph("MOBILE", role), Paragraph("ENGINEERING LEADERSHIP", role), Paragraph("BACKEND & DELIVERY", role)], [Paragraph("Flutter · Dart · Xamarin · .NET MAUI<br/>Native Android · Java/Kotlin<br/>Native iOS · Swift", body), Paragraph("Architecture standards · Planning<br/>Code review · Mentoring · TDD<br/>Technical documentation", body), Paragraph("ASP.NET Core · REST APIs · Auth<br/>SQL Server · PostgreSQL · Firebase · Azure<br/>CI/CD · TestFlight · Crashlytics · Dynatrace", body)]]
story += [Table(skills, colWidths=[doc.width/3]*3, style=TableStyle([("BACKGROUND",(0,0),(-1,0),PALE),("BOX",(0,0),(-1,-1),.5,LINE),("INNERGRID",(0,0),(-1,-1),.5,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7)]))]
story += heading("Selected Certifications")
certifications = [
    [Paragraph("Google AI Professional Certificate", project), Paragraph("Google / Coursera | 7-course professional certificate | 2026", small)],
    [Paragraph("Google AI Essentials", project), Paragraph("Google / Coursera | 5-course specialization | 2026", small)],
    [Paragraph("Complete Flutter Development Bootcamp with Dart", project), Paragraph("Udemy / Dr. Angela Yu | 29 hours | 2024", small)],
]
story += [Table(certifications, colWidths=[75*mm, doc.width-75*mm], style=TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LINEBELOW",(0,0),(-1,-2),.35,LINE),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),4),("TOPPADDING",(0,0),(-1,-1),4),("BOTTOMPADDING",(0,0),(-1,-1),4)]))]
story += heading("Selected Product Portfolio")
projects = [
    ("Capital Bank Mobile & Blink", "Mobile banking products across iOS and Android; current leadership scope includes planning, security, review, documentation, and delivery readiness."),
    ("Bank of Jordan Mobile", "Regional banking applications for Jordan, Iraq, and Palestine; technical leadership across secure mobile delivery and standards."),
    ("UAE Government Services", "MOE UAE, MOF UAE, ADHA UAE, and ACTVET UAE mobile products for education, finance, housing, and vocational services."),
    ("Enterprise & Consumer", "KIA Jordan, PIF KSA, TEC UAE, WAW Al-Balad, Jannah.jo, Amman Academy, Maintenance Tracker, Reps, and Debt Collection."),
    ("Games & Accessibility", "Hook and Run multiplayer game, Bravo Bravo educational game, and Ehsan Ensan Arabic sign-language translation experience."),
]
for title, desc in projects:
    story += [Paragraph(title, project), Paragraph(desc, body), Spacer(1,2)]
story += heading("Training & Education")
story += [Paragraph("Delivered two 45-hour cross-platform mobile development courses for VibrantSoft and KIA employees.", bullet), Paragraph("Bachelor's degree in Computer Information Systems (CIS), Al-Hussein Bin Talal University | 2014", bullet)]
story += heading("Additional")
story += [Paragraph("Languages: Arabic (native), English (excellent) &nbsp;&nbsp;|&nbsp;&nbsp; Strengths: leadership, communication, teamwork, problem solving, organization, and time management", body)]

doc.build(story)
print(OUT)
