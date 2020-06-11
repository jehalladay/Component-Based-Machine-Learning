from dep import Synapse

print(Synapse)

val = Synapse()
val.use(print)

val.get_middleware()

for x in []:
    print(x)

print('done')


def test():
    if hasattr(test, 'weight'):
        pass

    return hasattr(test, 'weight')
test.weight = 'hello world'

value = test()
test.weight = "2"
print(value)
value = test()
print(value)

x=19

print(f'''hello {x}''')