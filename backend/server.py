from algs.sorts import selectionSort, bubbleSort, insertionSort
import random
from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/')
def	hello_world():
	return "hello world"

@app.route('/bubblesort')
def handle_bubble():
	response = bubbleSort(getArray(random.randrange(8,12)))
	# response = ''.join(map(str, steps))
	# print(response)
	response_body = {
		"steps" : response
	}
	return response_body

@app.route('/selectionsort')
def handle_select():
	response_body = {
		"steps" : selectionSort(getArray(10))
	}
	return response_body

@app.route('/insertionsort')
def handle_insertion():
	response_body = {
		"steps" : insertionSort(getArray(10))
	}
	return response_body

def getArray(size):
	return [random.randrange(-9,99) for i in range(size)]

if __name__ == "__main__":
	app.run()