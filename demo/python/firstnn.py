import sys, json, numpy as np
from numba import jit

def consume():
    return json.loads(input())

@jit
def main(inputs):
    weights = [
        [0.5, -0.91, 0.26, -0.5],
        [0.2, 0.8, -0.5, 1.0],
        [-0.5, 0.91, -0.26, 0.5],
        [-0.26, -0.27, 0.17, 0.87]
    ]

    biases = [2.0, 3.0, 0.5, 0.2]

    output = np.dot(weights, inputs) + biases

    return output


if __name__ == '__main__':
    output = main(consume())
    output = json.dumps(output.tolist())
    print(output)
