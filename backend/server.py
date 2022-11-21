from algs.sorts import selectionSort, bubbleSort, insertionSort
import random
from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/')
def	hello_world():
	return "hello world"

@app.route('/bubblesort')
def handle_bubble():
	return

def getArray(size):
	return [random.randrange(-100,100) for i in range(size)]

if __name__ == "__main__":
	app.run()