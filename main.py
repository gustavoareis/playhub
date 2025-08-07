import sys
import time
from time import sleep

def printLyrics():
    print()
    print()
    
    lines = [
        ("You know, you know", 0.15),
        ("where you are with", 0.13),
        ("You know where you are with", 0.13),
        ("Floor collapsing", 0.1),
        ("Floating, bouncing back", 0.15),
        ("And one day", 0.2),
        ("I am gonna grow wings", 0.15),
        ("A chemical reaction", 0.17)
    ]
    
    delays = [0.2, 1.5, 1.1, 0.5, 0.5, 1.0, 1.0, 5.0]

    for i, (line, char_delay) in enumerate(lines):
        for char in line:
            print(char, end='')
            sys.stdout.flush()
            sleep(char_delay)
        print()
        time.sleep(delays[i])

printLyrics()
