import json
import os
print("""
  __   ____  ____     ___  __   _  _  _  _   __   __ _  ____ 
 / _\ (    \(    \   / __)/  \ ( \/ )( \/ ) / _\ (  ( \(    \\
/    \ ) D ( ) D (  ( (__(  O )/ \/ \/ \/ \/    \/    / ) D (
\_/\_/(____/(____/   \___)\__/ \_)(_/\_)(_/\_/\_/\_)__)(____/
""")

f = open('src/MOCK_DATA.json')

data = json.load(f)
last_id = data[-1]['id']

title = input("Enter a title: ")
desc = input("Enter a description: ")
new_data = {
    "id": last_id+1,
    "title": title,
    "desc" : desc
}
data.append(new_data)
print(data)
with open('src/MOCK_DATA.json', "w") as file:
    json.dump(data,file)

