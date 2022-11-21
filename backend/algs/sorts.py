def bubbleSort(arr):
	steps = []
	size = len(arr)

	for i in range(size-1):
		for j in range(size-(i+1)):
			#record pointers j and j+1
			steps.append(["pointer", j, j+1])
			# record comparison
			steps.append(["compare", arr[j], arr[j+1]])
			if arr[j] > arr[j+1]:
				steps.append(["swap", j, j+1])
				#record swap
				swap = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = swap
	return steps

def selectionSort(arr):
	steps = []
	size = len(arr)

	for i in range(size):
		current = i
		for j in range (i+1, size):
			steps.append(["pointer", i, current, j])
			#record pointers i, current and j
			#record comparison
			steps.append(["compare", arr[j], arr[current]])
			if(arr[j]<arr[current]):
				current = j
				steps.append(["pointer", i, current, j])

		#record pointers current and j
		steps.append(["swap", i, current])
		swap = arr[i]
		arr[i]=arr[current]
		arr[current] = swap
	return steps

def insertionSort(arr):
	steps = []
	size = len(arr)

	for i in range(1, size):
		current = arr[i] #hold
		steps.append(["hold", current])
		#pointers
		j = i-1
		steps.append(["pointers", i, j])
		#compare
		steps.append(["compare", current, arr[j]])
		while(j >= 0 and current < arr[j]):
			arr[j+1] = arr[j]
			steps.append(["swap", j, j+1])
			j -= 1
			steps.append(["pointers", i, j])
		arr[j+1] = current #place
		steps.append(["place", j+1, current])
	return steps

def main():
	test_arr = [23,1,24,53,-3,17,-98,34]
	print(test_arr)

	# print(bubbleSort(test_arr))
	# print(selectionSort(test_arr))
	# print(insertionSort(test_arr))
	print(test_arr)

if __name__ == "__main__":
	main()