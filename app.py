from bottle import route, run, template, static_file, view

# Route to serve static files (like script.js)
@route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root='./static')

# Route for the main landing page
@route('/')
@view('index') # This tells Bottle to use views/index.tpl
def index():
    return dict()

# Run the app
if __name__ == '__main__':
    # For local development. Amplify will use its own server.
    run(host='localhost', port=8080, debug=True)

