import os
os.system("git add .")
os.system("git status")
os.system("git commit -m \"command added\"")
os.system("git push -u origin main")
os.system("npm run build")
os.system("npm run deploy")