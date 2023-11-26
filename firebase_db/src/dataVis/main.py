from taipy.gui import Gui

from taipy.gui import Html


html_page = Html("""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Alert Settings</title>
</head>
<body>
    <header>
        <h1>Pomeroo</h1>
    </header>
    <main>
        <taipy:button on_action="on_button_action">Calibrate</taipy:button>
    </main>
</body>
</html>


""")

my_theme = {
  "palette": {
    "background": {"default": "#aaaaaa"},
    "primary": {"main": "#ffffff"}
  }
}

Gui(html_page).run(theme=my_theme)