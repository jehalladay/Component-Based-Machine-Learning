import json


class Synapse():
    middlewares = []
    flags = {}
    key = ''

    def dispatch(self, output):
        output = json.dumps(output)
        print(output)

        return self


    def get_middleware(self):
        print(self.middlewares)

        return self


    def get_flags(self):
        for flag, fn in self.flags:
            print(flag, fn)

        return self
    
    
    def use(self, callback_function):
        self.middlewares.append(callback_function)

        return self

    
    def register_flag(self, flag, callback_function):
        self.flags[flag] = callback_function

        return self


    def run(self):
        run = True
        while run:
            data = json.loads(input())
            throughput = data['data']
            if data == "close":
                run = False
                break
            if 'key' in data:
                if self.key == '':
                    self.key = data['key']
                elif self.key != data['key']:
                    assert(False)

            for flag, fn in self.flags:
                if flag in data:
                    fn(data[flag])
            for fn in self.middlewares:
                throughput = fn(throughput)
                    
            self.dispatch(throughput)
