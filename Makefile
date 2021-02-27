CC=sb
ENTRY=src/main.sb
TARGET=main.js

default: build

build:
	$(CC) build $(ENTRY) -o $(TARGET)

clean:
	-rm -f *.js $(TARGET)