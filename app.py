from googletrans import Translator
import requests
from bs4 import BeautifulSoup

def translate_text(text, target_language='en'):
    translator = Translator()
    translated_text = translator.translate(text, dest=target_language)
    return translated_text.text

def get_website_content(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to retrieve content from {url}. Status code: {response.status_code}")
        return None

# Replace 'your_url' with the URL of the website you want to translate
your_url = 'http://127.0.0.1:5500/index.html'

# Specify the target language code (e.g., 'fr' for French, 'es' for Spanish)
target_language = 'hi'

# Get the content of the website
website_content = get_website_content(your_url)

if website_content:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(website_content, 'html.parser')

    # Extract text content from the website
    website_text = ' '.join([paragraph.text for paragraph in soup.find_all('p')])

    # Translate the text
    translated_text = translate_text(website_text, target_language)

    print(translated_text)