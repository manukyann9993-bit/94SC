import json
import re

data = """### **X-1**

**օր I**
1 Արվեստ
2 Հայ գր
3 Անգլ
4 Ֆիզկուլտ
5 Հանր
6 Բնագ
7 Անգլ

**օր II**
1 Հայոց լ
2 Հայ գր
3 Հայ պ
4 Ռուսաց լ
5 Հասար
6 Առողջ

**օր III**
1 Անգլ
2 Հայ գր
3 Երկր
4 Թվ գրագ
5 Հայոց լ
6 ՆԶՊ

**օր IV**
1 Անգլ
2 Հասար
3 Հայ պ
4 Հայ գր
5 Ֆիզկուլտ
6 Մ/Կ
7 Անգլ

**օր V**
1 Հանր
2 Անգլ
3 Հայ գր
4 Ռուսաց լ
5 Բնագ
6 Հայոց լ

---

### **X-2**

**օր I**
1 Հայաստ պ
2 Անգլ
3 Ռուսաց լ
4 Թվ գրագ
5 Ֆիզկուլտ
6 Անգլ

**օր II**
1 Անգլ
2 Հայ գր
3 Հայաստ պ
4 Անգլ
5 Ֆիզկուլտ
6 Հասար

**օր III**
1 Հանր
2 Բնագ
3 Հայոց լ
4 Հայաստ պ
5 Ռուսաց լ
6 Հայ գր
7 Մ/Կ

**օր IV**
1 Հայաստ պ
2 Հայաստ պ
3 Հայ գր
4 Անգլ
5 Բնագ
6 Երկր
7 Հասար

**օր V**
1 Անգլ
2 Արվեստ
3 ՆԶՊ
4 Հայոց լ
5 Հայաստ պ
6 Հանր

---

### **X-3**

**օր I**
1 Ֆիզկուլտ
2 Հայ գր
3 Հայոց լ
4 Անգլ
5 Անգլ
6 Հանր

**օր II**
1 Հայաստ պ
2 Հասար
3 Հայոց լ
4 Հայ գր
5 Բնագ
6 Անգլ

**օր III**
1 Թվ գրագ
2 ՆԶՊ
3 Հայ գր
4 Ռուսաց լ
5 Արվեստ
6 Առողջ
7 Հայոց լ

**օր IV**
1 Անգլ
2 Երկր
3 Ֆիզկուլտ
4 Անգլ
5 Հայ գր
6 Հասար
7 Մ/Կ

**օր V**
1 Հանր
2 Բնագ
3 Հայաստ պ
4 Հայ գր
5 Ռուսաց լ
6 Անգլ

---

### **X-4**

**օր I**
1 Հանր
2 Հայ գր
3 Ֆիզկուլտ
4 Հայաստ պ
5 Բնագ
6 Անգլ
7 Թվ գրագ

**օր II**
1 Երկր
2 Ռուսաց լ
3 Ձեռն կրթ
4 Անգլ
5 Հայոց լ
6 Ֆիզկուլտ
7 Հասար

**օր III**
1 Հայոց լ
2 Անգլ
3 Հանր
4 ՆԶՊ
5 Հայ գր
6 Հանր
7 Մ/Կ

**օր IV**
1 Երկր
2 Անգլ
3 Հասար
4 Հայաստ պ
5 Անգլ
6 Բնագ
7 Երկր

**օր V**
1 Ձեռն կրթ
2 Հայոց լ
3 Հանր
4 Հանր
5 Անգլ
6 Արվեստ
7 Առողջ

---

### **X-5**

**օր I**
1 Ֆիզիկա / Կ/Բ / Դիզայն
2 Ֆիզիկա / Կ/Բ / Դիզայն
3 Հանր
4 Հայաստ պ
5 Անգլ
6 Առողջ

**օր II**
1 ՆԶՊ
2 Հայ գր
3 Ֆիզիկա / Կենսաբ / Անգլ
4 Հասար
5 Հանր
6 Երկր
7 Ֆիզկուլտ

**օր III**
1 Հայաստ պ
2 Երկր
3 ՏՀՏ / Քիմիա / Ռուսաց լ
4 ՏՀՏ / Քիմիա / Հայոց լ
5 Անգլ
6 Հայոց լ
7 Հանր

**օր IV**
1 Ռուսաց լ
2 Հայ գր
3 Ֆիզկուլտ
4 Հանր
5 Հասար
6 Մ/Կ
7 Արվեստ

**օր V**
1 Հայոց լ
2 Անգլ
3 Հանր
4 Թվ գրագ
5 Ֆիզիկա / Կենսաբ / Ֆիզկուլտ
6 Հայ գր
7 Երկր

---

### **X-6**

**օր I**
1 Դիզայն
2 Անգլ
3 Ռուսաց լ
4 Գծագր
5 Գծագր
6 Գծագր
7 Հայ գր
8 Հայ գր

**օր II**
1 Ռուսաց լ
2 Հայոց լ
3 Հասար
4 Անգլ
5 Հանր
6 Կերպար
7 Գծագր
8 Մ/Կ

**օր III**
1 Հանր
2 Հայ գր
3 ՆԶՊ
4 Հայոց լ
5 Ֆիզկուլտ
6 Հայաստ պ
7 Գծագր

**օր IV**
1 Բնագ
2 Անգլ
3 Երկր
4 Հասար
5 Կերպար
6 Գծագր

**օր V**
1 Գծագր
2 Թվ գրագ
3 Հայ գր
4 Հանր
5 Ֆիզկուլտ
6 Առողջ ապ

and heres the XI

XI-1
I օր

Հասարակագիտություն

Ռուսաց լեզու

Թվային գրագիտություն

Հայ գրականություն

Հայոց լեզու

Հանրահաշիվ

II օր

Երկրաչափություն

Անգլերեն

Անգլերեն

Հայոց պատմություն

Հայ գրականություն

Հայ գրականություն

Համաշխարհային պատմություն

III օր

Հայոց պատմություն

Անգլերեն

Անգլերեն

Ֆիզկուլտուրա

ՆԶՊ

Ռուսաց լեզու

Բնագիտություն

IV օր

Հայոց լեզու

Անգլերեն

Անգլերեն

Հայ գրականություն

Առողջ ապրելակերպ

Արվեստ

Անգլերեն

V օր

Հայ գրականություն

Հասարակագիտություն

Բնագիտություն

Ֆիզկուլտուրա

Հայոց լեզու

Հայոց պատմություն

XI-2
I օր

ՆԶՊ

Հասարակագիտություն

Հանրահաշիվ

Հայ գրականություն

Հայոց պատմություն

Անգլերեն

Ռուսաց լեզու

II օր

Հայոց պատմություն

Անգլերեն

Բնագիտություն

Ֆիզկուլտուրա

Հայոց պատմություն

Առողջ ապրելակերպ

III օր

Հասարակագիտություն

Հայոց պատմություն

Հայոց պատմություն

Երկրաչափություն

Երկրաչափություն

Արվեստ

IV օր

Հայ գրականություն

Բնագիտություն

Ռուսաց լեզու

Հայոց լեզու

Հայ գրականություն

Անգլերեն

Հանրահաշիվ

V օր

Հայոց պատմություն

Համաշխարհային պատմություն

Ֆիզկուլտուրա

Անգլերեն

Հայոց լեզու

Հայ գրականություն

Թվային գրագիտություն

XI-3
I օր

Հայ գրականություն

Անգլերեն

Բնագիտություն

Ռուսաց լեզու

ՆԶՊ

Հայոց լեզու

II օր

Ֆիզկուլտուրա

Հանրահաշիվ

Հայոց լեզու

Անգլերեն

Անգլերեն

Հայ գրականություն

III օր

Անգլերեն

Հասարակագիտություն

Հայոց պատմություն

Երկրաչափություն

Համաշխարհային պատմություն

Անգլերեն

Հայ գրականություն

IV օր

Հայոց լեզու

Ռուսաց լեզու

Արվեստ

Բնագիտություն

Անգլերեն

Հանրահաշիվ

Հայոց պատմություն

V օր

Հասարակագիտություն

Ֆիզկուլտուրա

Թվային գրագիտություն

Առողջ ապրելակերպ

Անգլերեն

Անգլերեն

XI-4
I օր

Հայոց լեզու

Անգլերեն

Հայոց պատմություն

ՆԶՊ

Հանրահաշիվ

Հանրահաշիվ

Արվեստ

II օր

Հասարակագիտություն

Բնագիտություն

Երկրաչափություն

Երկրաչափություն

Անգլերեն

Հայ գրականություն

Անգլերեն

Հայ գրականություն

III օր

Հայ գրականություն

Հայոց լեզու

Ֆիզկուլտուրա

Հանրահաշիվ

Հանրահաշիվ

Անգլերեն

Առողջ ապրելակերպ

Արվեստ

IV օր

Հասարակագիտություն

Հանրահաշիվ

Երկրաչափություն

Հայոց պատմություն

Անգլերեն

Հայ գրականություն

Ֆիզկուլտուրա

V օր

Թվային գրագիտություն

Անգլերեն

Համաշխարհային պատմություն

Բնագիտություն

Ձեռնարկատիրություն

Ռուսաց լեզու

Անգլերեն

XI-5
I օր

Ռուսաց լեզու

Հայ գրականություն

ՏՀՏ

Ֆիզկուլտուրա

Անգլերեն

Առողջ ապրելակերպ

Հանրահաշիվ

II օր

Հայ գրականություն

Հասարակագիտություն

Երկրաչափություն

Հայոց լեզու

Անգլերեն

Հանրահաշիվ

III օր

Հայ գրականություն

ՏՀՏ

ՏՀՏ

Թվային գրագիտություն

Բնագիտություն

ՏՀՏ

Հանրահաշիվ

IV օր

Երկրաչափություն

Հասարակագիտություն

Հայոց պատմություն

Ֆիզկուլտուրա

Անգլերեն

ՆԶՊ

Հայոց լեզու

V օր

Բնագիտություն

Անգլերեն

Հայ գրականություն

Հայոց պատմություն

Հանրահաշիվ

Երկրաչափություն

Համաշխարհային պատմություն

XI-6
I օր

Անգլերեն

Հայոց պատմություն

ՏՀՏ / Կենսաբանություն / Գծագրություն

Ֆիզիկա

Թվային գրագիտություն

Հասարակագիտություն

Առողջ ապրելակերպ

II օր

Ֆիզիկա

Ֆիզիկա

Հայ գրականություն

Հանրահաշիվ

Հայոց լեզու

Հայոց պատմություն

III օր

ՏՀՏ / Քիմիա / Գծագրություն

ՏՀՏ / Քիմիա / Կերպարվեստ

Համաշխարհային պատմություն

Անգլերեն

ՏՀՏ / Կենսաբանություն / Բնագիտություն

Հասարակագիտություն

Հանրահաշիվ

IV օր

Ֆիզկուլտուրա

Հայ գրականություն

Ֆիզիկա

Ֆիզիկա

ՆԶՊ

Անգլերեն

Արվեստ

V օր

Հայոց լեզու

Երկրաչափություն

Ռուսաց լեզու

Ֆիզիկա / Քիմիա / Գծագրություն

Հայ գրականություն

Ֆիզկուլտուրա

XI-7
I օր

Բնագիտություն

Ձեռնարկատիրություն

Հանրահաշիվ

Հանրահաշիվ

Հայ գրականություն

Հայոց լեզու

Հասարակագիտություն

II օր

Անգլերեն

Հայոց լեզու

Բնագիտություն

Հայ գրականություն

Հայոց պատմություն

Երկրաչափություն

Երկրաչափություն

III օր

Անգլերեն

Հանրահաշիվ

Անգլերեն

Հայոց պատմություն

Հայ գրականություն

Ֆիզկուլտուրա

Անգլերեն

IV օր

ՆԶՊ

Ֆիզկուլտուրա

Համաշխարհային պատմություն

Անգլերեն

Հանրահաշիվ

Հասարակագիտություն

Ռուսաց լեզու

V օր

Թվային գրագիտություն

Անգլերեն

Անգլերեն

Անգլերեն

Երկրաչափություն

Առողջ ապրելակերպ"""

classes = {}
current_class = None
current_day = None

lines = data.split('\n')
for line in lines:
    line = line.strip()
    if not line or line == '---' or line == 'and heres the XI':
        continue
    
    match_class = re.match(r'^### \*\*(.*?)\*\*$', line)
    if match_class:
        current_class = match_class.group(1)
        classes[current_class] = {'I': [], 'II': [], 'III': [], 'IV': [], 'V': []}
        continue
    
    match_class_xi = re.match(r'^(XI-\d+)$', line)
    if match_class_xi:
        current_class = match_class_xi.group(1)
        classes[current_class] = {'I': [], 'II': [], 'III': [], 'IV': [], 'V': []}
        continue

    match_day = re.match(r'^\*\*օր (I|II|III|IV|V)\*\*$', line)
    if match_day:
        current_day = match_day.group(1)
        continue
    
    match_day_xi = re.match(r'^(I|II|III|IV|V) օր$', line)
    if match_day_xi:
        current_day = match_day_xi.group(1)
        continue

    # items
    if current_class and current_day:
        item = re.sub(r'^\d+\s+', '', line)
        classes[current_class][current_day].append(item)

# pad to 7 hours
for cls, days in classes.items():
    for day, items in days.items():
        while len(items) < 7:
            items.append('')

html_content = """<!DOCTYPE html>
<html lang="hy">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Դասացուցակ - 94 Ավագ Դպրոց</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../style.css?v=3">
    <style>
        .schedule-container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 20px;
            background: white;
            border: 1px solid var(--border-classic);
        }

        .schedule-title {
            text-align: center;
            color: var(--primary-navy);
            margin-bottom: 30px;
            font-size: 2rem;
            border-bottom: 2px solid var(--accent-gold);
            display: inline-block;
            padding-bottom: 10px;
        }

        .class-schedule {
            margin-bottom: 50px;
        }

        .class-name {
            color: var(--primary-navy);
            font-size: 1.5rem;
            margin-bottom: 15px;
            background: var(--bg-parchment);
            padding: 10px 20px;
            border-left: 4px solid var(--accent-gold);
        }

        .schedule-table {
            width: 100%;
            border-collapse: collapse;
            font-family: 'Noto Sans Armenian', sans-serif;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }

        .schedule-table th, .schedule-table td {
            border: 1px solid var(--border-classic);
            padding: 12px;
            text-align: center;
        }

        .schedule-table th {
            background-color: var(--primary-navy);
            color: white;
            font-weight: 700;
        }

        .schedule-table tr:nth-child(even) {
            background-color: #fcfcfc;
        }

        .schedule-table tr:hover {
            background-color: #f5f5dc;
        }

        .coming-soon {
            text-align: center;
            font-size: 1.5rem;
            color: var(--accent-gold);
            margin: 60px 0;
            padding: 40px;
            background: var(--bg-parchment);
            border: 1px dashed var(--accent-gold);
        }
    </style>
</head>

<body>
    <!-- Simple Classic Nav -->
    <nav class="academy-nav">
        <div class="nav-brand-academy serif">Գ․ Մարգարյանի Անվան 94 Ավագ Դպրոց</div>
        <div class="academy-links">
            <div class="academy-dropdown">
                <a href="../index.html" class="academy-link">Մեր դպրոցը</a>
                <div class="dropdown-menu">
                    <a href="management.html" class="dropdown-item">Տնորինություն</a>
                    <a href="staff.html" class="dropdown-item">Աշխատակազմ</a>
                    <a href="about.html" class="dropdown-item">Դպրոցի մասին</a>
                    <a href="charter.html" class="dropdown-item">Կանոնադրություն</a>
                    <a href="announcements.html" class="dropdown-item">Հայտարարություններ</a>
                </div>
            </div>
            <a href="schedule.html" class="academy-link active">Դասացուցակ</a>
            <a href="../streams.html" class="academy-link">Հոսքեր</a>
            <a href="../news.html" class="academy-link">Նորություններ</a>
            <a href="../history.html" class="academy-link">Պատմություն</a>
        </div>
    </nav>

    <header class="hero-glass-max" style="padding: 40px 5%;">
        <h1 class="serif">Դպրոցի Դասացուցակ</h1>
    </header>

    <main class="glass-section" style="background: transparent; box-shadow: none;">
        <div class="schedule-container">
            <div style="text-align: center;">
                <h2 class="serif schedule-title">2023-2024 Ուսումնական Տարի</h2>
            </div>
"""

for cls in sorted(classes.keys()):
    html_content += f'''
            <div class="class-schedule reveal">
                <h3 class="serif class-name">Դասարան՝ {cls}</h3>
                <div style="overflow-x: auto;">
                    <table class="schedule-table">
                        <thead>
                            <tr>
                                <th>Ժամ</th>
                                <th>Երկուշաբթի (I)</th>
                                <th>Երեքշաբթի (II)</th>
                                <th>Չորեքշաբթի (III)</th>
                                <th>Հինգշաբթի (IV)</th>
                                <th>Ուրբաթ (V)</th>
                            </tr>
                        </thead>
                        <tbody>'''
    
    days_data = classes[cls]
    # Max hours
    max_hours = max([len(days_data[d]) for d in days_data])
    for h in range(max_hours):
        html_content += f'''
                            <tr>
                                <td><strong>{h+1}</strong></td>
                                <td>{days_data["I"][h] if h < len(days_data["I"]) else ""}</td>
                                <td>{days_data["II"][h] if h < len(days_data["II"]) else ""}</td>
                                <td>{days_data["III"][h] if h < len(days_data["III"]) else ""}</td>
                                <td>{days_data["IV"][h] if h < len(days_data["IV"]) else ""}</td>
                                <td>{days_data["V"][h] if h < len(days_data["V"]) else ""}</td>
                            </tr>'''
    
    html_content += '''
                        </tbody>
                    </table>
                </div>
            </div>'''

html_content += """
            <div class="coming-soon reveal">
                <h3 class="serif">XII Դասարանների դասացուցակը շուտով հասանելի կլինի:</h3>
            </div>
        </div>
    </main>

    <script src="../script.js?v=3"></script>
</body>
</html>"""

with open(r'c:\Users\manna\OneDrive\Desktop\Programming\SchoolWeb\school\schedule.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
