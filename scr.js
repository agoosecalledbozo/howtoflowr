// ==UserScript==
// @name         Flame's Flowr.Fun Script V1.4.4
// @namespace    http://tampermonkey.net/
// @version      v1.4.4
// @description  A funny script designed to make the game just that small bit easier and nicer!
// @author       FlameFlmae
// @match        https://flowr.fun/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowr.fun
// @grant        none
// ==/UserScript==

/**************/
/*  CONFIG   */
/*************/

let versions = {
    db: (await(await fetch("https://raw.githubusercontent.com/FlameFlmae/flowrmodvers/main/v.txt")).text()).split('\n')[0],
    script: 'v1.4.4',
    client: (await(await fetch("./client.js")).text()).split(' ')[2]
}

console.log(versions)

window.flowrMod = {}

flowrMod.rarities = []
for (let i = 0; i < Colors.rarities.length; i++) {
    flowrMod.rarities[i] = {}
}

// Rarities
flowrMod.rarities[0].display = 'Common'
flowrMod.rarities[0].color = '#7eef6d'
flowrMod.rarities[0].border = '#66c258'
flowrMod.rarities[0].hitbox = '#7eef6d'

flowrMod.rarities[1].display = 'Unusual'
flowrMod.rarities[1].color = '#ffe65d'
flowrMod.rarities[1].border = '#cfba4b'
flowrMod.rarities[1].hitbox = '#ffe65d'

flowrMod.rarities[2].display = 'Rare'
flowrMod.rarities[2].color = '#4d52e3'
flowrMod.rarities[2].border = '#3e42b8'
flowrMod.rarities[2].hitbox = '#4d52e3'

flowrMod.rarities[3].display = 'Epic'
flowrMod.rarities[3].color = '#861fde'
flowrMod.rarities[3].border = '#6d19b4'
flowrMod.rarities[3].hitbox = '#861fde'

flowrMod.rarities[4].display = 'Legendary'
flowrMod.rarities[4].color = '#de1f1f'
flowrMod.rarities[4].border = '#b41919'
flowrMod.rarities[4].hitbox = '#de1f1f'

flowrMod.rarities[5].display = 'Mythic'
flowrMod.rarities[5].color = '#1fdbde'
flowrMod.rarities[5].border = '#19b1b4'
flowrMod.rarities[5].hitbox = '#1fdbde'

flowrMod.rarities[6].display = 'Ultra'
flowrMod.rarities[6].color = '#ff2b75'
flowrMod.rarities[6].border = '#cf235f'
flowrMod.rarities[6].hitbox = '#ff2b75'

flowrMod.rarities[7].display = 'Super'
flowrMod.rarities[7].color = '#2bffa3'
flowrMod.rarities[7].border = '#23cf84'
flowrMod.rarities[7].hitbox = '#2bffa3'

flowrMod.rarities[8].display = 'Omega'
flowrMod.rarities[8].color = '#494849'
flowrMod.rarities[8].border = '#3c3b40'
flowrMod.rarities[8].hitbox = '#494849'

flowrMod.rarities[9].display = 'Fabled'
flowrMod.rarities[9].color = '#ff5500'
flowrMod.rarities[9].border = '#cf4500'
flowrMod.rarities[9].hitbox = '#ff5500'
Colors.rarities[9].fancy = {
    "border": Colors.rarities[9].border,
    "hue": 25,
    "light": 45,
    "sat": 100,
    "spread": 15,
    "period": 1,
}

flowrMod.rarities[10].display = 'Divine'
flowrMod.rarities[10].color = '#67549c'
flowrMod.rarities[10].border = '#453869'
flowrMod.rarities[10].hitbox = '#67549c'
Colors.rarities[10].fancy = {
    "border": "#433766",
    "hue": 256,
    "light": 47,
    "sat": 30,
    "spread": 20,
    "period": 1.5
}

flowrMod.rarities[11].display = 'Supreme'
flowrMod.rarities[11].color = '#b25dd9'
flowrMod.rarities[11].border = '#9043b3'
flowrMod.rarities[11].hitbox = '#b25dd9'
Colors.rarities[11].fancy = {
    "border": "#743c8e",
    "hue": 281,
    "light": 61,
    "sat": 62,
    "spread": 12,
    "period": 2,
    "stars": 1
}

flowrMod.rarities[12].display = 'Omnipotent'
flowrMod.rarities[12].color = '#5e004f'
flowrMod.rarities[12].border = '#000000'
flowrMod.rarities[12].hitbox = '#5e004f'
Colors.rarities[12].fancy = {
    "border": "#151515",
    "hue": 285,
    "light": 20,
    "sat": 100,
    "spread": 35,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[13].display = 'Astral'
flowrMod.rarities[13].color = '#046307'
flowrMod.rarities[13].border = '#035005'
flowrMod.rarities[13].hitbox = '#046307'
Colors.rarities[13].fancy = {
    "border": "#035005",
    "hue": 122,
    "light": 25,
    "sat": 100,
    "spread": 60,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[14].display = 'Celestial'
flowrMod.rarities[14].color = '#00bfff'
flowrMod.rarities[14].border = '#007baf'
flowrMod.rarities[14].hitbox = '#00bfff'
Colors.rarities[14].fancy = {
    "border": "#007baf",
    "hue": 195,
    "light": 50,
    "sat": 100,
    "spread": 10,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[15].display = 'Seraphic'
flowrMod.rarities[15].color = '#c77e5b'
flowrMod.rarities[15].border = '#a16649'
flowrMod.rarities[15].hitbox = '#c77e5b'
Colors.rarities[15].fancy = {
    "border": "#82523b",
    "hue": 19,
    "light": 57,
    "sat": 49,
    "spread": 15,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[16].display = 'Transcendent'
flowrMod.rarities[16].color = '#ffffff'
flowrMod.rarities[16].border = '#cfcfcf'
flowrMod.rarities[16].hitbox = '#ffffff'
Colors.rarities[16].fancy = {
    "border": "#a7a7a7",
    "hue": 180,
    "light": 93,
    "sat": 100,
    "spread": 80,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[17].display = 'Quantum'
flowrMod.rarities[17].color = '#61ffdd'
flowrMod.rarities[17].border = '#4ecfb3'
flowrMod.rarities[17].hitbox = '#61ffdd'
Colors.rarities[17].fancy = {
    "border": "#3fa790",
    "hue": 167,
    "light": 69,
    "sat": 100,
    "spread": 20,
    "period": 1.5,
    "stars": 2
}

flowrMod.rarities[18].display = 'Galactic'
flowrMod.rarities[18].color = '#81102b'
flowrMod.rarities[18].border = '#570d23'
flowrMod.rarities[18].hitbox = '#ba5f7a'
Colors.rarities[18].fancy = {
    "border": "#570d23",
    "hue": 342,
    "light": 25,
    "sat": 100,
    "spread": 80,
    "period": 1,
    "stars": 3
}

flowrMod.rarities[19].display = 'Eternal'
flowrMod.rarities[19].color = '#5a8c7d'
flowrMod.rarities[19].border = '#497165'
flowrMod.rarities[19].hitbox = '#5a8c7d'

flowrMod.rarities[20].display = 'Chaos'
flowrMod.rarities[20].color = '#20258a'
flowrMod.rarities[20].border = '#191e70'
flowrMod.rarities[20].hitbox = '#20258a'

flowrMod.rarities[21].display = 'Vicious'
flowrMod.rarities[21].color = '#732190'
flowrMod.rarities[21].border = '#5d1a74'
flowrMod.rarities[21].hitbox = '#732190'

Colors.biomes.garden = {
    "background": "#1ea761",
    "grid": "#1d9157",
    "display": "Garden"
}

Colors.biomes.desert = {
    "background": "#dece7b",
    "grid": "#a1955a",
    "display": "Desert"
}

Colors.biomes.ocean = {
    "background": "#547db3",
    "grid": "#41608a",
    "display": "Ocean"
}

flowrMod.priorityList = [
    'Ant Burrow',
    'Fire Ant Hole',
    'Missile',
    'ScorpionMissile',
    'UrchinMissile',
    'DandelionMissile',
    'FireMissile',
    'LocustMissile',
    'SplitLocustMissile',
    'RockMissile',
    'BigRockMissile',
    'BeeMissile',
    'StarfishMissile',
    'BossUrchinMissile',
    'BigBossUrchinMissile',
    'BossDandelionMissile',
    'Invincible Urchin'
]

flowrMod.images = {}
flowrMod.images[0] = new Image()
flowrMod.images[0].src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iIzFFQTc2MSIgZD0iTTAgMGgyNTZ2MjU2SDB6Ii8+PHBhdGggZmlsbD0iIzFDOUU1QiIgZD0iTTIzMS44IDEyMi44Yy42IDUtMi43IDcuNi03LjQgNS42cy01LjItNi4xLTEuMi05LjJjNC4xLTMgOC0xLjQgOC42IDMuNnpNMTcxIDEwNC45Yy0xLjYgNS4zLTYgNi4zLTkuNyAyLjNMMTQ4LjggOTRjLTMuOC00LTIuNS04LjMgMi45LTkuNmwxNy43LTQuMmM1LjQtMS4zIDguNCAyIDYuOSA3LjNsLTUuMyAxNy40em0tMTE3LjMtNTJjMiA1LjEtLjggOC42LTYuMiA3LjhMMjIuNiA1N2MtNS40LS44LTcuMS01LTMuNi05LjNsMTUuNy0xOS42YzMuNC00LjMgNy45LTMuNiA5LjkgMS41bDkuMSAyMy4zem0xNjUuNC0xOC4yYy0yLjEgNC40LTYgNC44LTguOC44cy0xLjEtNy42IDMuNy04YzQuOS0uNSA3LjIgMi43IDUuMSA3LjJ6bS0zMiAxNjAuNWMtMyA0LjYtNy41IDQuMy0xMC0uNmwtMy41LTdjLTIuNS00LjkgMC04LjcgNS41LTguM2w3LjguNWM1LjUuMyA3LjUgNC4zIDQuNSA4LjlsLTQuMyA2LjV6bS0xMzQuOSA0M2MtMS42IDUuMy02IDYuMy05LjcgMi4zbC0xMS0xMS42Yy0zLjgtNC0yLjUtOC4zIDIuOS05LjZsMTUuNi0zLjdjNS40LTEuMyA4LjQgMiA2LjkgNy4zbC00LjcgMTUuM3pNNjUuMyAxNjdjMi45IDQuMSAxLjEgNy44LTMuOCA4LjNzLTcuNC0yLjktNS4yLTcuNWMyLTQuNiA2LjEtNC45IDktLjh6bTU4LjItMjNjMCA1LjUtMy45IDcuOC04LjcgNWwtNS4xLTNjLTQuOC0yLjgtNC44LTcuMiAwLTEwbDUuMS0zYzQuOC0yLjggOC43LS41IDguNyA1djZ6Ii8+PHBhdGggZmlsbD0iIzFGQUQ2NCIgZD0iTTExMC41IDE4OS45Yy0uOCA1LjQtNSA3LjEtOS4zIDMuNmwtMy0yLjRjLTQuMy0zLjQtMy42LTcuOSAxLjUtOS45bDMuNS0xLjRjNS4xLTIgOC42LjggNy44IDYuM2wtLjUgMy44em0tNzYgNC45Yy0yLjIgMy44LTUuOCAzLjgtOCAwcy0uNC02LjkgNC02LjkgNi4yIDMuMSA0IDYuOXptMy4yLTgyLjFjMi4yIDQuNCAwIDcuOC01IDcuNXMtNi44LTMuOS00LTguMWMyLjctNC4xIDYuNy0zLjkgOSAuNnptNTguNS0xMC4xYy01LjMtMS4zLTYuNi01LjYtMi44LTkuNmw0LjMtNC41YzMuOC00IDguMi0yLjkgOS43IDIuNGwxLjcgNmMxLjUgNS4zLTEuNiA4LjUtNi45IDcuMmwtNi0xLjV6TTIzMCA3OS43Yy0uMyA1LjUtNC4zIDcuNS04LjkgNC42bC0uNy0uNWMtNC42LTMtNC40LTcuNS41LTEwbC44LS40YzQuOS0yLjUgOC43LS4xIDguNCA1LjRsLS4xLjl6TTEyMC45IDQ5LjJjLTUuMyAxLjQtOC41LTEuOC03LjEtNy4xbDIuMy04LjVjMS40LTUuMyA1LjgtNi41IDkuNy0yLjZsNi4yIDYuMmMzLjkgMy45IDIuNyA4LjItMi42IDkuN2wtOC41IDIuM3ptMTAxLjUgMTY4LjNjLjcgNS41LTIuOSA4LjItOCA2bC00LjUtMS45Yy01LjEtMi4xLTUuNi02LjYtMS4zLTkuOWwzLjktM2M0LjQtMy4zIDguNS0xLjYgOS4yIDMuOWwuNyA0Ljl6bS00My02My4zYy01LS41LTYuNy00LjMtMy43LTguM3M3LTMuNiA5LjEgMS0uNCA3LjktNS40IDcuM3oiLz48cGF0aCBmaWxsPSIjMUM5RTVCIiBkPSJNMTM0LjQgMjI1LjZjLjMgNS4yLTMuMiA3LjUtNy44IDUuMnMtNC45LTYuNS0uNi05LjRjNC4zLTIuOCA4LjEtLjkgOC40IDQuMnoiLz48L3N2Zz4='
flowrMod.images[1] = new Image()
flowrMod.images[1].src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjRTBEMUFGIiBkPSJNMCAwaDI1NnYyNTZIMFYweiIvPjxwYXRoIGZpbGw9IiNEN0M5QTgiIGQ9Im0xNDIgMjQwLjIgMTUuNy0xNC43LTE0LjYtMTYtMTYgMTQuNiAxNC45IDE2LjFtNzEuNy0xMTAuNS04LjUgMjAuMiAyMC4yIDguMyA4LjMtMjAuMy0yMC04LjJNODAuNSA0Ny41bDEuNi0yMS42LTIxLjYtMS43LTEuNyAyMS43IDIxLjcgMS42TTE5LjcgODkuNGw0LjggMjEuMiAyMS4xLTQuOS00LjgtMjEuMS0yMS4xIDQuOE0xMjEuOSAyN2wtOS4zIDE5LjcgMTkuOCA5LjMgOS4xLTE5Ljl6Ii8+PHBhdGggZmlsbD0iI0VDRENCOCIgZD0iTTI1NiAyNTZ2LTkxYy0xOC43IDI0LjItMjcuOSA2MS4yLTM5LjIgOTFIMjU2TTI5LjggMjkuMkMzMyAxOC45IDM2LjcgOS4yIDQxIDBIMHY5Mi42YzE0LjMtMTkuMSAyMy41LTM5LjMgMjkuOC02My40TTIxNi44IDBjLTIxLjcgNDguNS04MS42IDk0LjktMTE4LjMgOTguM1MyMy43IDEzMSAwIDE2NXY5MWg0MWMyMy45LTUyLjUgOTAuMS01NC4yIDExNy4zLTk5LjFzNzUuNC0zNC44IDk3LjctNjQuM1YwaC0zOS4yIi8+PHBhdGggZmlsbD0iI0YzRTJCRSIgZD0ibTQzLjMgMTg2LjUtMTkuNCA5LjIgOSAxOS42IDE5LjctOS4yLTkuMy0xOS42bTEzOS44LTg4LjItMjEtNS43LTUuNyAyMSAyMS4xIDUuNyA1LjYtMjFNNTEuNCAxNTYuNmwyMC4yIDguMSA4LjMtMjAuNS0yMC40LTcuOS04LjEgMjAuM202OS45IDEuNyAyMC4xLTguNC04LjQtMjAuMy0yMC4xIDguNnoiLz48cGF0aCBmaWxsPSIjRDdDOUE4IiBkPSJtMTkyLjIgMjA2LjEgMjEuNi0uMy0uMS0yMS42aC0yMS42bC4xIDIxLjkiLz48cGF0aCBmaWxsPSIjRjNFMkJFIiBkPSJNMjI5LjkgNTMuNyAyMTAgNjIuNmw5IDE5LjkgMTkuOC05LTguOS0xOS44Ii8+PC9zdmc+'
flowrMod.images[2] = new Image()
flowrMod.images[2].src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iIzY2ODY5RSIgZD0iTTAgMGgyNTZ2MjU2SDBWMHoiLz48cGF0aCBmaWxsPSIjODhCMEM5IiBkPSJNMCAxODMuMzNjMTkuNTYtMTEuNjcgMzMuMy0yNi40IDQ5LjE0LTU5LjMxQzY3LjU1IDg1Ljc3IDEwMS40IDYyLjA3IDEyOC4zNyA1M2M0NC40NC0xNC45NSA2NS45My0yNi4zMyA3OS4yNi01M0g3NS43MUM0OS45NSAxNy4zOCAxOC40MyAxNS45MiAwIDQyLjk2djE0MC4zN3pNMjA3LjYzIDI1NmMxMy4zMy0yNi42NyA4LjU5LTI5LjIyIDE0LjgyLTQzLjM5IDYuMjQtMTQuMTcgMTMuOTgtMTcuNjEgMzMuNTQtMjkuMjhWNDIuOTZjLTE4LjQzIDI3LjA0LTMwLjUgNTQuMTgtNDguMTkgODkuMDctMTIuNzYgMjUuMTctNTAuMTEgNjIuMTgtNjguMDEgNzUuMzctMjUuNTEgMTguNzktMzguMzQgMzEuMjItNjQuMDkgNDguNiIvPjxwYXRoIGZpbGw9IiM5OEM4RTMiIGQ9Ik0xNzMuOTQgMjMyLjk4Yy0uMjctMS45MyA4LjY4LTE3LjA3IDEwLjE1LTE3Ljg5IDEuNDgtLjgzIDEzLjEzIDEwLjIzIDEzLjYxIDExLjk3LjQ4IDEuNzQtNC4wOSAxNi4zNy02IDE2LjU4LTEuOTEuMTktMTcuNDktOC43NC0xNy43Ni0xMC42NnpNNTIuMTYgNTkuNTZjLjc3IDEuMjYtMS40OCAxMy42Mi0yLjAyIDE0LjktLjU0IDEuMjgtNS4wOCAxMi40Ny02LjM3IDEzLjQ0LTEuMjkuOTYtMTYuMy00LjM5LTE3Ljg0LTQuNzYtMS41NC0uMzctOC4wNi03Ljk3LTcuOTQtOS42NC4xMi0xLjY3IDIuNTUtMTcuMzQgMy40NS0xOC41NS45LTEuMjEgMTEuNzgtMy43NSAxMy4zMS0zLjMzIDEuNTMuNDIgMTYuNjQgNi42OCAxNy40MSA3Ljk0eiIvPjxwYXRoIGZpbGw9IiM3NzlDQjAiIGQ9Ik0xNzYuMjggNzguNTJjLjc1IDEuNTEtMi43NyAxNS44OC0zLjkgMTYuOTItMS4xNCAxLjA0LTE0LjMxIDEwLjQyLTE2LjA1IDEwLjQ5LTEuNzQuMDYtMTcuNTMtNS4wMi0xOC4zNS02LjQ5LS44Mi0xLjQ3IDIuNDMtMTYuNzggMi40My0xOC41IDAtMS43MiA3LjIyLTEyLjIxIDguODItMTMuMDMgMS42LS44MiAxMi40Mi0zLjY1IDE0LjEyLTMuMzYgMS43MS4yOCAxMi4xOCAxMi40NiAxMi45MyAxMy45N3oiLz48cGF0aCBmaWxsPSIjNUE3NThDIiBkPSJNMTAzLjggMTIuOThjMS4xNS0uOCAxMC44NS0xLjg4IDEyLjA5LTEuMjggMS4yNC42IDUuODkgNy45MyA2LjY0IDguOTcuNzUgMS4wNCAzLjggMTUuMzIgMi43NCAxNi4zMi0xLjA2Ljk5LTExLjUzIDMuMDYtMTIuNzcgMi45Mi0xLjI0LS4xNC0xMy44Ny0zLjk0LTE0Ljc4LTQuOS0uOTEtLjk3LjI2LTExLjE1LS4wMS0xMi41My0uMjYtMS4zOCA0Ljk0LTguNjkgNi4wOS05LjV6TTEwMi4wNyAyMDVjLTEuODEgMy4xMy0zMC45Ni03LjE2LTMyLjQ4LTEwLjItMS41Mi0zLjAzIDE5LjA3LTI1Ljc4IDIyLjYzLTI0LjU3IDMuNTYgMS4yMSAxMS42NiAzMS42NCA5Ljg1IDM0Ljc3eiIvPjwvc3ZnPg=='
flowrMod.images.icon = new Image()
flowrMod.images.icon.src = 'data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyBoZWlnaHQ9IjgwMHB4IiB3aWR0aD0iODAwcHgiIHZlcnNpb249IjEuMSIgaWQ9Il94MzJfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIj4KDTxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIi8+Cg08ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KDTxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHN0eWxlIHR5cGU9InRleHQvY3NzIj4gLnN0MHtmaWxsOiNmZmZmZmY7fSA8L3N0eWxlPiA8Zz4gPHBhdGggY2xhc3M9InN0MCIgZD0iTTI5NS41OTksMjQyLjI2NmMxLjUxLDQuNCwyLjI4OCw5LjA1OCwyLjI3OSwxMy43NDJjMCwxLjI5NC0wLjA1OSwyLjU5Ni0wLjE2OCwzLjkwNyBjLTAuOTk0LDQxLjIzNi0xNy42MDcsODAuMDY1LTQ2Ljc3OCwxMDkuMjI4Yy0zMC4yMDYsMzAuMjE1LTcwLjM5Nyw0Ni44NjItMTEzLjE3Nyw0Ni44NzljLTQuNDA4LDAtOC44NDItMC4xODQtMTMuMjMzLTAuNTM0IGM2LjYwNCwyMS4wODksMTguMzYsNDAuNDQxLDM0LjEzOSw1Ni4yMjlDMTg0LjYyNiw0OTcuNjksMjE5LjE5LDUxMiwyNTUuOTkyLDUxMmMzNi43OTMtMC4wMDgsNzEuNTMyLTE0LjQ4NSw5Ny44MjItNDAuNzc2IGMxOC44OTQtMTguODkzLDMxLjczNC00Mi43MTIsMzcuMDk0LTY4LjkwM2MwLjI1LTEuMjAyLDAuNDQzLTIuMTg3LDAuNjM0LTMuMTQ3YzEuNDctOC4yNDksMi4yMjEtMTYuNjQ4LDIuMjIxLTI0Ljk0NiBjMC0zNi44MDItMTQuNDE4LTcxLjQ2Ni00MC41NzYtOTcuNjIyQzMzNy4xNTksMjYwLjU3NSwzMTcuMzU2LDI0OC43NzgsMjk1LjU5OSwyNDIuMjY2eiIvPiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE2LjQwMiwyNjkuNzE3Yy0xLjUxMi00LjM4My0yLjI5Ni05LjAzMy0yLjI5Ni0xMy43MjZjMC4wMDgtMS4yOTMsMC4wNzUtMi41NTQsMC4xNTktMy44MDdsMC4wMjUtMC40MDkgYzEuMDQ0LTQxLjA3NiwxNy42NTgtNzkuODA3LDQ2Ljc3OS0xMDguOTI3YzMwLjIwNi0zMC4xOTgsNzAuNDA2LTQ2Ljg0NSwxMTMuMTc3LTQ2Ljg3OWM0LjQzMywwLjAwOCw4Ljg2NiwwLjE4MywxMy4yNSwwLjU1MSBjLTYuNjEyLTIxLjA4OS0xOC4zMzQtNDAuNDI1LTM0LjA4LTU2LjE4QzMyNy4zOTksMTQuMzI3LDI5Mi44MDEsMCwyNTYuMDA4LDBzLTcxLjM4MiwxNC4zMzQtOTcuNDE0LDQwLjM2NiBjLTE5LjExMSwxOS4xMS0zMi4wNjgsNDMuMDYzLTM3LjQ4Niw2OS4yOTVjLTAuMTkyLDEuMDEtMC4zOTIsMi4wMzctMC41ODQsMy4xMDZsLTAuNTE4LDIuOTU1IGMtMS4xNjksNy4yODEtMS43NTQsMTQuNjk0LTEuNzYxLDIyLjA0MWMwLDM2LjgwMiwxNC4zMTgsNzEuMzkxLDQwLjM1LDk3LjQwNkMxNzQuNzQxLDI1MS4zMjQsMTk0LjYxMSwyNjMuMTgsMjE2LjQwMiwyNjkuNzE3eiIvPiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDcxLjY4NCwxNTguNjExYy0xOS4wOTQtMTkuMDk0LTQzLjA4OS0zMi4wNjgtNjkuMzc5LTM3LjUxMWMtMC45NTItMC4yMDktMS45Mi0wLjQwMS0yLjg5Ni0wLjU1MSBjLTguMzI0LTEuNTExLTE2Ljc2NS0yLjI3OS0yNS4xODgtMi4zMDVjLTM2Ljc5My0wLjAwOC03MS4zOTEsMTQuMzI3LTk3LjQxNSw0MC4zNDJjLTE2LjEzOCwxNi4xMzgtMjcuOTkzLDM2LjAxNy0zNC41MjIsNTcuODIzIGM0LjM2Ny0xLjUwMiw5LjAwMS0yLjI5NSwxMy42ODQtMi4zMDRjMS4zMTksMCwyLjU3MiwwLjA3NiwzLjgyNCwwLjE1MWM0MS40MDIsMS4wMTgsODAuMDksMTcuNTY2LDEwOS4xMzYsNDYuNjExIGMzMC4zNjUsMzAuMzY1LDQ3LjA4Nyw3MC42MjMsNDcuMDg3LDExMy4zNzhjMCw0LjQyNC0wLjIsOC44NTgtMC41NDIsMTMuMjMyYzIxLjA4LTYuNjA0LDQwLjQyNS0xOC4zMjUsNTYuMTYyLTM0LjA2NCBDNDk3LjY2NSwzMjcuMzc0LDUxMiwyOTIuNzg0LDUxMiwyNTUuOTkxUzQ5Ny42OSwxODQuNiw0NzEuNjg0LDE1OC42MTF6Ii8+IDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMzUuMTk0LDM1My40MTRjMTYuMTIyLTE2LjEzLDI3Ljk2OC0zNiwzNC41MjItNTcuODMyYy00LjM5MSwxLjUxOS05LjA1OCwyLjMwNC0xMy43NSwyLjI5NiBjLTEuMTM2LDAtMi4yODctMC4wNjctMy4zOTgtMC4xNjdjLTQxLjI3Ny0wLjc3Ni04MC4zMjQtMTcuNDA3LTEwOS43MTItNDYuODAzYy0zMC4yMzItMzAuMjMxLTQ2Ljg3OS03MC40MTQtNDYuODcxLTExMy4xNDQgYzAtNC4zOTEsMC4xNzUtOC44NDIsMC41NDMtMTMuMjU4Yy0yMS4wNTYsNi41OTYtNDAuNCwxOC4zMDktNTYuMTU0LDM0LjA4QzE0LjM0MywxODQuNjE4LDAsMjE5LjIxNSwwLDI1Ni4wMDggYzAsMzYuODAyLDE0LjI2OCw3MS4zMTYsNDAuMTQxLDk3LjIwNWMxOS4xNzcsMTkuMTY5LDQzLjIzOCwzMi4yMSw2OS41NjIsMzcuNjc4bDMuMjk4LDAuNjY4IGM3Ljk5OCwxLjQ1MywxNi4zNDcsMi4xOTYsMjQuNzU0LDIuMTk2QzE3NC41NzQsMzkzLjc1NiwyMDkuMTgsMzc5LjQyLDIzNS4xOTQsMzUzLjQxNHoiLz4gPC9nPiA8L2c+Cg08L3N2Zz4='
flowrMod.images.petalGallery = new Image()
flowrMod.images.petalGallery.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+Cgo8c3ZnCiAgIGZpbGw9IiMwMDAwMDAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9IkNhcGFfMSIKICAgd2lkdGg9IjgwMHB4IgogICBoZWlnaHQ9IjgwMHB4IgogICB2aWV3Qm94PSIwIDAgODMuMzI4IDgzLjMyOCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ib3JnYW5pYy1zZWFyY2gtc3ltYm9sLW9mLW1hZ25pZmljYXRpb24tdG9vbC13aXRoLWxlYXZlcy1zdmdyZXBvLWNvbS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzCiAgIGlkPSJkZWZzMSIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxIgogICBwYWdlY29sb3I9IiM1MDUwNTAiCiAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICBib3JkZXJvcGFjaXR5PSIxIgogICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgaW5rc2NhcGU6em9vbT0iMS4wOTg3NSIKICAgaW5rc2NhcGU6Y3g9IjM5OS41NDQ5NCIKICAgaW5rc2NhcGU6Y3k9IjQwMCIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDU3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMjU1MiIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJDYXBhXzEiIC8+CjxnCiAgIGlkPSJnMSIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSI+Cgk8cGF0aAogICBkPSJNNzEuMjE3LDY5LjkwN2wtMTIuNjA0LDcuMjg0TDQ4Ljg2LDYwLjMxOGwxMi42MDUtNy4yODRMNzEuMjE3LDY5LjkwN3ogTTcyLjYwNiw3Mi4yNTJsLTEyLjc2OSw3LjM5MyAgIGMyLjAxNywzLjU4NCw2LjQ5Niw0LjcwNCwxMC4wOCwyLjY4OEM3My4yNzksODAuMzE1LDc0LjYyMyw3NS44MzYsNzIuNjA2LDcyLjI1MnogTTY0Ljc2OCwxNC42ODUgICBDNTYuNzA0LDAuNTczLDM4LjU2LTQuMTMxLDI0LjQ0OCwzLjkzM2MtMS4xMiwwLjY3Mi0yLjI0LDEuMzQ0LTMuMzYsMi4yNGMwLjIyNCwwLDAuMjI0LDAsMC40NDgsMC4yMjQgICBjMS4zNDQsMC42NzIsMi45MTIsMS4zNDQsNC43MDQsMi4yNGMwLjIyNC0wLjIyNCwwLjQ0Ny0wLjIyNCwwLjY3Mi0wLjQ0OGMxMS42NDctNi43MiwyNi44OC0yLjY4OCwzMy42MDIsOC45NiAgIGM2LjcyLDExLjY0NywyLjY4OCwyNi44NzktOC45NjIsMzMuNjAxYy0xMS42NDYsNi43MjItMjYuODc5LDIuNjg4LTMzLjYtOC45NThjLTIuNDY0LTQuMjU4LTMuNTg0LTguOTYxLTMuMzYtMTMuNDM5ICAgYy0xLjU2OC0zLjgwOS0yLjAxNi04LjA2Mi0xLjM0NC0xMi41NDRjLTQuNzA0LDguNzM1LTQuNzA0LDE5LjQ4NywwLjQ0OCwyOC40NDZjOC4wNjMsMTQuMTExLDI2LjIwOCwxOC44MTUsNDAuMzIsMTAuNzUyICAgQzY4LjEyNiw0Ni43MTcsNzMuMDU1LDI4Ljc5Nyw2NC43NjgsMTQuNjg1eiBNMzQuMDc5LDQyLjIzNmMwLjg5NiwwLjQ0Ny04LjczNi0xMC4zMDQtOC43MzYtMjAuODMyICAgYzIuMDE2LDguOTU5LDEyLjA5NiwxNy45MiwxMy44ODgsMjIuODQ3YzYuNzIxLTI1LjMxMi0xMi4zMTktMzIuMDMtMjEuMDU2LTM2LjI4OUMxMC43ODMsMjguNzk3LDIzLjk5OSwzNy41MzIsMzQuMDc5LDQyLjIzNnogICAgTTQ0LjM4Miw0Mi40NjFjNi40OTYsMC42NzIsMTUuOTA0LDAsMTguMzY5LTEyLjk5M2MtNS44MjMtMC4yMjUtMTcuNDczLTIuNDY1LTIxLjUwNSwxMi41NDQgICBjMi40NjQtMi4wMTcsMTAuMzA0LTMuNTg0LDEzLjg4OC03Ljg0QzUyLDM5Ljc3MSw0My45MzUsNDIuNDYxLDQ0LjM4Miw0Mi40NjF6IgogICBpZD0icGF0aDEiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjEiIC8+CjwvZz4KPC9zdmc+Cg=='

flowrMod.rarityNames = ['Common', 'Unusual', 'Rare', 'Epic', 'Legendary', 'Mythic', 'Ultra', 'Super', 'Omega', 'Fabled', 'Divine', 'Supreme', 'Omnipotent', 'Astral', 'Celestial', 'Seraphic', 'Transcendent', 'Quantum', 'Galactic', 'Eternal', 'Chaos', 'Vicious']

try {
    JSON.parse(localStorage.getItem('scripts'))
}
catch (error) {
    localStorage.scripts = "{}"
    console.warn(`
--------------------------------------------
       INVALID SCRIPT DATA DETECTED
RESTETTING SCRIPT OPTIONS TO DEFAULT OPTIONS
--------------------------------------------`)
}

window.scripts = JSON.parse(localStorage.getItem('scripts'))

if (typeof scripts.flowrMod !== "object") {
    scripts.flowrMod = {}
}

const allowedValues = {
    betterEntityModels: {
        type: "boolean",
        default: false
    },
    allGalleryRarities: {
        type: "boolean",
        default: false
    },
    betterBiomeMobs: {
        type: "boolean",
        default: false
    },
    transparentPetals: {
        type: "boolean",
        default: false
    },
    seeLoot: {
        type: "boolean",
        default: false
    },
    clientCount: {
        type: "boolean",
        default: false
    },
    autoEnableDebug: {
        type: "boolean",
        default: false
    },
    selfName: {
        type: "boolean",
        default: false
    },
    alwaysShowHp: {
        type: "boolean",
        default: false
    },
    attempts: {
        type: "boolean",
        default: false
    },
    hitbox: {
        type: "boolean",
        default: false
    },
    ranges: {
        type: "boolean",
        default: false
    },
    showRarity: {
        type: "boolean",
        default: false
    },
    dwayne: {
        type: "boolean",
        default: false
    },
    fatass: {
        type: "boolean",
        default: false
    },
    helBeetle: {
        type: "boolean",
        default: false
    },
    YGGPLZ: {
        type: "boolean",
        default: false
    },
    superGlow: {
        type: "boolean",
        default: false
    },
    carb: {
        type: "boolean",
        default: false
    },
    bubblefish: {
        type: "boolean",
        default: false
    },
    minRarityDrop: {
        type: "number",
        default: 0
    },
    alwaysShowHp: {
        type: "boolean",
        default: false
    },
    detailedBackgrounds: {
        type: "boolean",
        default: false
    },
    bossBar: {
        type: "boolean",
        default: false
    },
    allMobGalleries: {
        type: "boolean",
        default: false
    },
    alphabet: {
        type: "boolean",
        default: false
    },
    noCustom: {
        type: "boolean",
        default: false
    },
    gameHover: {
        type: "boolean",
        default: false
    },
    experiment: {
        type: "boolean",
        default: false
    },
    instaCraft: {
        type: "boolean",
        default: false
    },
    eggTimer: {
        type: "boolean",
        default: false
    },
    petalHp: {
        type: "boolean",
        default: false
    },
    movInd: {
        type: "boolean",
        default: false
    },
    rrolf: {
        type: "boolean",
        default: false
    },
    enemyBar: {
        type: "number",
        default: Colors.rarities.length - 1
    },
    numHP: {
        type: "boolean",
        default: false
    },
    noDMGflash: {
        type: "boolean",
        default: false
    },
    priorityRendering: {
        type: "boolean",
        default: false
    },
    permanentStreak: {
        type: "boolean",
        default: false
    },
    pvpMiniMap: {
        type: "boolean",
        default: false
    },
    noUpdInd: {
        type: "boolean",
        default: false
    },
    savedBuilds: {
        type: "array",
        default: []
    },
    compassInd: {
        type: "boolean",
        default: false
    },
    noPeasGrapes: {
        type: "boolean",
        default: false
    },
    simpleWeb: {
        type: "boolean",
        default: false
    },
    pcTrans: {
        type: "boolean",
        default: false
    }
}

allowedValues.array = Object.keys(allowedValues)
for (let i = 0; i < allowedValues.array.length; i++) {
    const key = allowedValues.array[i]
    const allowed = allowedValues[key]

    switch (allowed.type) {
        case "array":
            if (!Array.isArray(scripts.flowrMod[key])) {
                console.warn(`\n--------------------------------------------\n       INVALID SCRIPT DATA DETECTED\nRESTETTING OPTION ${key} TO ${allowed.default}\n(FOUND ${scripts.flowrMod[key]} AS ${typeof scripts.flowrMod[key]} INSTEAD OF ${allowed.type})\n--------------------------------------------`)
                scripts.flowrMod[key] = allowed.default
            }
            break;
        case "number":
            if (isNaN(Number(scripts.flowrMod[key]))) {
                console.warn(`\n--------------------------------------------\n       INVALID SCRIPT DATA DETECTED\nRESTETTING OPTION ${key} TO ${allowed.default}\n(FOUND ${scripts.flowrMod[key]} AS ${typeof scripts.flowrMod[key]} INSTEAD OF ${allowed.type})\n--------------------------------------------`)
                scripts.flowrMod[key] = allowed.default
            }
            break;
        default:
            if (typeof scripts.flowrMod[key] !== allowed.type) {
                console.warn(`\n--------------------------------------------\n       INVALID SCRIPT DATA DETECTED\nRESTETTING OPTION ${key} TO ${allowed.default}\n(FOUND ${scripts.flowrMod[key]} AS ${typeof scripts.flowrMod[key]} INSTEAD OF ${allowed.type})\n--------------------------------------------`)
                scripts.flowrMod[key] = allowed.default
            }
            break;
    }

    flowrMod[key] = scripts.flowrMod[key]
}

localStorage.scripts = JSON.stringify(scripts)

flowrMod.compass = -1

flowrMod.FlowrSettingsMenu = class FlowrSettingsMenu {
    constructor() {
        this.options = [
            {
                type: 'toggle',
                name: 'Better Entity Models',
                desc: 'Sweet new models for mobs such as the Brown Ladybug or the Poison Ladybug!',
                state: scripts.flowrMod.betterEntityModels,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.betterEntityModels = state
                    scripts.flowrMod.betterEntityModels = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'All Gallery Rarities',
                desc: 'Enables the player to see all the stats for all the rarities of all the mobs.',
                state: scripts.flowrMod.allGalleryRarities,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.allGalleryRarities = state
                    scripts.flowrMod.allGalleryRarities = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'All Mob Galleries',
                desc: 'Shows all the galleries for unlocked mobs, including custom biome ones.',
                state: scripts.flowrMod.allMobGalleries,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.allMobGalleries = state
                    scripts.flowrMod.allMobGalleries = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Alphabetical Sorting',
                desc: 'Sorts the petals in the crafting and inventory menus based on name. (A -> Z)',
                state: scripts.flowrMod.alphabet,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.alphabet = state
                    scripts.flowrMod.alphabet = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'No Custom Petals',
                desc: 'Stops Custom Petals and Enemies from rendering in the inventory and crafting menus.',
                state: scripts.flowrMod.noCustom,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.noCustom = state
                    scripts.flowrMod.noCustom = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Instant Crafting',
                desc: 'Stops the crafting animation once the server sends the craft results.',
                state: scripts.flowrMod.instaCraft,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.instaCraft = state
                    scripts.flowrMod.instaCraft = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Egg Timer',
                desc: 'Creates a cool menu to show when eggs will hatch.',
                state: scripts.flowrMod.eggTimer,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.eggTimer = state
                    scripts.flowrMod.eggTimer = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Petal HP',
                desc: 'Shows the hp of certain high-hp petals in-game.',
                state: scripts.flowrMod.petalHp,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.petalHp = state
                    scripts.flowrMod.petalHp = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'numeric',
                name: 'Minimum Drop Rarity',
                desc: 'Makes drops below a certain rarity not render, to possibly boost fps. WARNING: this does not remove the 100 petal cap!',
                state: scripts.flowrMod.minRarityDrop,
                changeTime: 0,
                toggleFn: (state) => {
                    state = prompt('What\'s the minimum rarity petal to drop? Answer must be numeric. (Ex: 0 = common, 8 = omega)')
                    flowrMod.minRarityDrop = state
                    scripts.flowrMod.minRarityDrop = state
                    localStorage.scripts = JSON.stringify(scripts)
                    return state
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Game Hovering',
                desc: 'Allows statboxes to render in-game.',
                state: scripts.flowrMod.gameHover,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.gameHover = state
                    scripts.flowrMod.gameHover = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Experimental Features',
                desc: 'Allows unfinished or unpolished features to function. May be buggy!',
                state: scripts.flowrMod.experiment,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.experiment = state
                    scripts.flowrMod.experiment = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Better Biome Mobs',
                desc: 'Changes what mobs can spawn on the menu in specific biomes, just so that there\'s that small bit of quality!',
                state: scripts.flowrMod.betterBiomeMobs,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.betterBiomeMobs = state
                    scripts.flowrMod.betterBiomeMobs = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            /*{
                type: 'toggle',
                name: 'Show Petal Hp',
                desc: 'Allows petals such as Magnet and Pearl to render a healthbar in-game.',
                state: scripts.flowrMod.showPetalHp,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.showPetalHp = state
                    scripts.flowrMod.showPetalHp = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'unavailableToggle',
                name: 'Flower Accessories',
                desc: 'Makes petals like third eye render on the flower! (They will also still be in orbit for damage purposes.)',
                state: scripts.flowrMod.flowerPetals,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.flowerPetals = state
                    scripts.flowrMod.flowerPetals = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },*/
            {
                type: 'toggle',
                name: 'Transparent Petals',
                desc: 'Whenever you hover over someone in the squad menu, their petals go completely transparent!',
                state: scripts.flowrMod.transparentPetals,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.transparentPetals = state
                    scripts.flowrMod.transparentPetals = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Always See Loot',
                desc: 'When in-game, a brand new menu will appear in the top right to show you what loot you got, without the need to die!',
                state: scripts.flowrMod.seeLoot,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.seeLoot = state
                    scripts.flowrMod.seeLoot = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Client Count',
                desc: 'See the amount of people in your squad (only useful when there is over 4 people.)',
                state: scripts.flowrMod.clientCount,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.clientCount = state
                    scripts.flowrMod.clientCount = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Auto Debug',
                desc: 'Automatically enable debug mode, so that you can easily see your fps and how many enemies / petals there are!',
                state: scripts.flowrMod.autoEnableDebug,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.autoEnableDebug = state
                    scripts.flowrMod.autoEnableDebug = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Self Name',
                desc: 'See your own name in-game!',
                state: scripts.flowrMod.selfName,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.selfName = state
                    scripts.flowrMod.selfName = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Always Show Hp',
                desc: 'Always show the hp of mobs, even if they never got damaged or are below legendary rarity!',
                state: scripts.flowrMod.alwaysShowHp,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.alwaysShowHp = state
                    scripts.flowrMod.alwaysShowHp = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'See Attempts',
                desc: 'See the attempts you have on crafting petals! (It will just act as if you were crafting them.)',
                state: scripts.flowrMod.attempts,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.attempts = state
                    scripts.flowrMod.attempts = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Hitboxes',
                desc: 'See the hitboxes of mobs, just for that little bit of QOL!',
                state: scripts.flowrMod.hitbox,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.hitbox = state
                    scripts.flowrMod.hitbox = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Ranges',
                desc: 'See the ranges of third eye and magnet! (Third Eye = red, Magnet = blue)',
                state: scripts.flowrMod.ranges,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.ranges = state
                    scripts.flowrMod.ranges = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Show Rarities',
                desc: 'Shows the rarity of the mob on the healthbar, perfect for preparing for death!',
                state: scripts.flowrMod.showRarity,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.showRarity = state
                    scripts.flowrMod.showRarity = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            /*{
                type: 'unavailableToggle',
                name: 'Special Waves',
                desc: 'See the percentage of a special wave occuring!',
                state: scripts.flowrMod.specialWaveChances,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.specialWaveChances = state
                    scripts.flowrMod.specialWaveChances = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'unavailableToggle',
                name: 'Boss Waves',
                desc: 'See the percentage of a boss wave occuring!',
                state: scripts.flowrMod.bossWaveChances,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.bossWaveChances = state
                    scripts.flowrMod.bossWaveChances = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },*/
            {
                type: 'toggle',
                name: 'Dwayne',
                desc: 'Turns super rocks into DWAYNE THE ROCK JOHNSON!!!!',
                state: scripts.flowrMod.dwayne,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.dwayne = state
                    scripts.flowrMod.dwayne = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Your Mother',
                desc: 'Changes the name of Queen Ants to "Fatass"!',
                state: scripts.flowrMod.fatass,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.fatass = state
                    scripts.flowrMod.fatass = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Hel Beetles',
                desc: 'Adds a 1% chance for a beetle to appear as a hel beetle!',
                state: scripts.flowrMod.helBeetle,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.helBeetle = state
                    scripts.flowrMod.helBeetle = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Yggdrasil',
                desc: 'Turns buds into Yggdrasil, so that you can REALLY beg for that precious dried leaf!',
                state: scripts.flowrMod.YGGPLZ,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.YGGPLZ = state
                    scripts.flowrMod.YGGPLZ = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Super Petal Trails',
                desc: 'Makes super petals and above have trails, similar to florr, so that you can get flexed on even harder! WARNING: WILL COST FPS!',
                state: scripts.flowrMod.superGlow,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.superGlow = state
                    scripts.flowrMod.superGlow = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Carb',
                desc: 'Removes/gives extra genes to crabs! 1% chance for them to become *drumroll*... CARBS!',
                state: scripts.flowrMod.carb,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.carb = state
                    scripts.flowrMod.carb = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Bubblefish',
                desc: 'Whoops! Looks like 1% of all jellyfish lost their tentacles! Now they blend in with bubbles...',
                state: scripts.flowrMod.bubblefish,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.bubblefish = state
                    scripts.flowrMod.bubblefish = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Always Show Xp',
                desc: 'Always see your xp and xp needed, just another QOL feature!',
                state: scripts.flowrMod.alwaysShowXp,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.alwaysShowXp = state
                    scripts.flowrMod.alwaysShowXp = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Detailed Backgrounds',
                desc: 'Changes the grid backgrounds to match florr\'s current backgrounds. WARNING: WILL COST FPS!',
                state: scripts.flowrMod.detailedBackgrounds,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.detailedBackgrounds = state
                    scripts.flowrMod.detailedBackgrounds = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'numeric',
                name: 'Enemy Bars',
                desc: 'Adds small bars on the side of the screen to show the HP of higher-rarity mobs.',
                state: scripts.flowrMod.enemyBar,
                changeTime: 0,
                toggleFn: (state) => {
                    state = prompt('What\'s the minimum rarity mob to display? Answer must be numeric. (Ex: 0 = common, 8 = omega)')
                    flowrMod.enemyBar = state
                    scripts.flowrMod.enemyBar = state
                    localStorage.scripts = JSON.stringify(scripts)
                    return state
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Movement Indicator',
                desc: 'Creates an arrow that points towards the mouse pointer if mouseMovement is enabled.',
                state: scripts.flowrMod.movInd,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.movInd = state
                    scripts.flowrMod.movInd = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'rrolf Petal Icons',
                desc: 'Makes petalContainers look similar to rrolf\'s old petal icons.',
                state: scripts.flowrMod.rrolf,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.rrolf = state
                    scripts.flowrMod.rrolf = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Numeric HP',
                desc: 'Shows hp in numbers alongside the normal bar.',
                state: scripts.flowrMod.numHP,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.numHP = state
                    scripts.flowrMod.numHP = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Boss Bars',
                desc: 'Replaces the Wave Bar boss display with a dedicated Boss Bar display.', // im still leaving this in 'Wave Bar ボス ディスプレイを専用の Boss Bar ディスプレイに置き換えます。',
                state: scripts.flowrMod.bossBar,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.bossBar = state
                    scripts.flowrMod.bossBar = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'No Damage Flash',
                desc: 'Completely removes Damage Flash.',
                state: scripts.flowrMod.noDMGflash,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.noDMGflash = state
                    scripts.flowrMod.noDMGflash = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Priority Rendering',
                desc: 'Allows certain entities to render over others. Edit in config.',
                state: scripts.flowrMod.priorityRendering,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.priorityRendering = state
                    scripts.flowrMod.priorityRendering = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Permanent Streak Menu',
                desc: 'Stops the Streak Menu from sliding into the right',
                state: scripts.flowrMod.permanentStreak,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.permanentStreak = state
                    scripts.flowrMod.permanentStreak = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'PvP Minimap',
                desc: 'Displays a small minimap when in PvP. G = Enemy, R = Flower, B = Self, Y = Dev',
                state: scripts.flowrMod.pvpMiniMap,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.pvpMiniMap = state
                    scripts.flowrMod.pvpMiniMap = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Disable Update Indicator',
                desc: 'Disables the update indicator. NOTE: This means you will only know about new updates when you check the server.',
                state: scripts.flowrMod.noUpdInd,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.noUpdInd = state
                    scripts.flowrMod.noUpdInd = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Compass Detector',
                desc: 'Displays a compass icon below seeLoot, and changes color when compass is used.',
                state: scripts.flowrMod.compassInd,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.compassInd = state
                    scripts.flowrMod.compassInd = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'No Peas/Grapes',
                desc: 'Stops rendering any Peas/Grapes Projectiles that are not yours.',
                state: scripts.flowrMod.noPeasGrapes,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.noPeasGrapes = state
                    scripts.flowrMod.noPeasGrapes = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'Simple Web',
                desc: 'Changes the render of web to be a simple circle (Requires refresh). Thank Dudd0 for the idea!',
                state: scripts.flowrMod.simpleWeb,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.simpleWeb = state
                    scripts.flowrMod.simpleWeb = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
            {
                type: 'toggle',
                name: 'PC Extra Transparency Bit',
                desc: 'Adds a transparent outline to petalContainers',
                state: scripts.flowrMod.pcTrans,
                changeTime: 0,
                toggleFn: (state) => {
                    flowrMod.pcTrans = state
                    scripts.flowrMod.pcTrans = state
                    localStorage.scripts = JSON.stringify(scripts)
                },
                screenPosition: { x: 0, y: 0, w: 0, h: 0 }
            },
        ];

        this.options.sort((a, b) => {
            let g = -1
            if (a.name.toUpperCase() > b.name.toUpperCase()) g = 1
            return g
        })

        this.x = 200;
        this.y = 20;
        this.w = 256 + 45;
        this.h = 10 + 50 * 8;

        this.offset = -this.h - 40;
        this.targetOffset = -this.h - 40;
        this.active = false;

        this.scrollbar = {
            scroll: 0,
            top: 12,
            bottom: 50 + 12,
            hovering: false,
            scrolling: false,
            render: {
                scroll: 0,
            }
        }
        this.prevMouse = { mouseX: 0, mouseY: 0 }
        this.descPercent = 0
        this.isHoverOption = { hovering: false, info: {} }
    }
    toggle() {
        this.active = !this.active;
        if (this.active) {
            // open
            this.targetOffset = 0;
        } else {
            // close
            this.targetOffset = -this.h - 40;
        }
    }
    drawIcon(alpha = 1) {
        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        ctx.fillStyle = '#a44242';
        ctx.strokeStyle = '#8d3232';
        if (window.state === 'menu') {
            if (mouse.canvasX + 6 > 110 && mouse.canvasY + 6 > 20 && mouse.canvasX - 6 < 110 + 60 && mouse.canvasY - 6 < 20 + 60) {
                ctx.fillStyle = '#b75959';
                setCursor('pointer');
                this.hoveringOverButton = true;
            } else {
                // if(this.hoveringOverX === false){
                //     document.body.style.cursor = 'auto';
                // }
                this.hoveringOverButton = false;
            }
        } else if (window.state === 'game') {
            if (mouse.canvasX + 6 > 75 && mouse.canvasY + 6 > 10 && mouse.canvasX - 6 < 75 + 45 && mouse.canvasY - 6 < 10 + 45) {
                ctx.fillStyle = '#b75959';
                setCursor('pointer');
                this.hoveringOverButton = true;
            } else {
                // if(this.hoveringOverX === false){
                //     document.body.style.cursor = 'auto';
                // }
                this.hoveringOverButton = false;
            }
        }
        ctx.lineWidth = window.state === 'game' ? 5 : 6;
        ctx.beginPath();
        window.state === 'game' ? ctx.roundRect(75, 10, 45, 45, 8) : ctx.roundRect(110, 20, 60, 60, 8);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        window.state === 'game' ? ctx.drawImage(flowrMod.images.icon, 75 + 5.625, 10 + 5.625, 45 - 11.25, 45 - 11.25) : ctx.drawImage(flowrMod.images.icon, 110 + 7.5, 20 + 7.5, 60 - 15, 60 - 15)

        ctx.globalAlpha = 1;
    }
    draw() {
        this.scrollbar.render.scroll = interpolate(this.scrollbar.render.scroll, this.scrollbar.scroll, 0.01 * dt)
        this.scrollbar.scroll = Math.max(0, Math.min(1, this.scrollbar.scroll))

        ctx.textBaseline = 'middle';
        ctx.fontKerning = "none";
        ctx.letterSpacing = "-.1px";
        this.offset = interpolate(this.offset, this.targetOffset, 0.3);

        this.currentHeight = 5;

        ctx.translate(this.x, this.y + this.offset);

        if (this.x < mouse.canvasX && this.x + this.w > mouse.canvasX && this.y < mouse.canvasY && this.y + this.h > mouse.canvasY) {
            if (this.isHoverOption.hovering === true) {
                this.descPercent = interpolate(this.descPercent, 1, 0.1)
            } else {
                this.descPercent = interpolate(this.descPercent, 0, 0.1)
                if (this.descPercent < 0.01) this.descPercent = 0
            }
        } else {
            this.descPercent = interpolate(this.descPercent, 0, 0.1)
            if (this.descPercent < 0.01) this.descPercent = 0
        }
        if (this.descPercent !== 0) {
            this.drawDesc(this.isHoverOption.info)
        }

        ctx.fillStyle = '#a44242';
        ctx.strokeStyle = '#8d3232';
        ctx.lineWidth = 10;

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.clip();
        ctx.closePath();

        ctx.strokeStyle = this.scrollbar.hovering ? '#ffffff' : '#8d3232';

        ctx.beginPath();
        ctx.moveTo(this.w - 12.5, this.scrollbar.top + this.scrollbar.render.scroll * (this.h - 75))
        ctx.lineTo(this.w - 12.5, this.scrollbar.bottom + this.scrollbar.render.scroll * (this.h - 75))
        ctx.stroke();
        ctx.closePath();

        ctx.translate(0, -(this.scrollbar.render.scroll * ((this.options.length - 8) * 50)))
        for (let i = 0; i < this.options.length; i++) {
            this.renderOption(this.options[i]);
        }
        ctx.translate(0, this.scrollbar.render.scroll * ((this.options.length - 8) * 50))
        ctx.restore();

        ctx.translate(-this.x, -this.y - this.offset);
    }
    drawDesc(t) {
        ctx.fillStyle = '#a44242';
        ctx.strokeStyle = '#8d3232';
        ctx.lineWidth = 10;

        if (this.descPercent !== 0) {
            ctx.beginPath();
            ctx.roundRect((this.w + 12.5) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)), this.w, this.h / 3, 3);
            ctx.fill();
            ctx.stroke();
            ctx.font = `900 22px 'Ubuntu'`;
            ctx.textAlign = "left";
            ctx.textBaseline = "center";

            if (t.type !== 'unavailableToggle') {
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.strokeText(t.name, (this.w + 25) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 17.5);
                ctx.fillText(t.name, (this.w + 25) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 17.5);

                ctx.font = `900 15px 'Ubuntu'`;
                const wrappedText = wrapText(t.desc, (this.w + 25) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 42.5, this.w / 1.5, 15);
                ctx.strokeText("Description: " + wrappedText[0][0], wrappedText[0][1], wrappedText[0][2]);
                ctx.fillText("Description: " + wrappedText[0][0], wrappedText[0][1], wrappedText[0][2]);
                for (let i = 1; i < wrappedText.length; i++) {
                    ctx.strokeText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
                    ctx.fillText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
                }
            } else {
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 4;
                ctx.font = `900 32.5px 'Ubuntu'`
                ctx.strokeText('???', (this.w + this.w / 2) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 32.5);
                ctx.fillText('???', (this.w + this.w / 2) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 32.5);

                ctx.font = `900 15px 'Ubuntu'`;
                const wrappedText = wrapText("Coming Soon...", (this.w + this.w / 2.5) * this.descPercent, Math.max(this.y - 20, Math.min(this.y - 20 + this.h - (this.h / 3), (mouse.canvasY - 15) - this.h / 6)) + 75, this.w / 1.5, 15);
                for (let i = 0; i < wrappedText.length; i++) {
                    ctx.strokeText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
                    ctx.fillText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
                }
            }
        }
    }
    renderOption(option) {
        this.renderToggle(option);
    }
    renderToggle(t, greyed) {

        // toggle height is 60, half of the height is 30

        ctx.strokeStyle = '#333333';

        if (t.type === 'unavailableToggle') {
            ctx.fillStyle = "#333333"
        } else {
            const uncheckedColor = '#666666';
            const checkedColor = '#dddddd'
            if (time - t.changeTime < 100) {
                const ratio = (time - t.changeTime) / 100;
                if (t.state) {
                    ctx.fillStyle = blendColor(uncheckedColor, checkedColor, ratio)
                } else {
                    ctx.fillStyle = blendColor(checkedColor, uncheckedColor, ratio)
                }
            } else {
                ctx.fillStyle = t.state ? checkedColor : uncheckedColor;
            }
        }

        t.screenPosition = {
            x: 15 + this.x,
            y: this.currentHeight + 50 / 2 - 28 / 2 + this.y,
            w: 28,
            h: 28
        }

        if (mouse.canvasX > t.screenPosition.x && t.screenPosition.x + this.w > mouse.canvasX && mouse.canvasY < t.screenPosition.y + 100 - (this.scrollbar.render.scroll * ((this.options.length - 8) * 50)) && mouse.canvasY > t.screenPosition.y - (this.scrollbar.render.scroll * ((this.options.length - 8) * 50))) {
            this.isHoverOption.hovering = true;
            this.isHoverOption.info = t
        }

        if (t.type !== 'numeric') {
            ctx.lineWidth = 4.5;
            ctx.beginPath();
            ctx.rect(t.screenPosition.x - this.x, t.screenPosition.y - this.y, t.screenPosition.w, t.screenPosition.h);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        } else {
            ctx.font = `900 34px 'Ubuntu'`;
            ctx.textAlign = "center";
            ctx.textBaseline = "center";
            ctx.fillStyle = Colors.rarities[t.state] ? Colors.rarities[t.state].color : 'white';
            ctx.strokeStyle = Colors.rarities[t.state] ? Colors.rarities[t.state].border : 'black';
            ctx.lineWidth = 4;

            ctx.strokeText(t.state, 30, this.currentHeight + 50 / 2);
            ctx.fillText(t.state, 30, this.currentHeight + 50 / 2);
        }

        ctx.font = `900 17px 'Ubuntu'`;
        ctx.textAlign = "left";
        ctx.textBaseline = "center";

        if (t.type === 'unavailableToggle') {
            ctx.fillStyle = '#999999';
        } else {
            ctx.fillStyle = 'white';
        }
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeText(t.name, 15 + 28 + 13, this.currentHeight + 50 / 2);
        ctx.fillText(t.name, 15 + 28 + 13, this.currentHeight + 50 / 2);
        this.currentHeight += 50;
    }
    mouseDown(e) {
        if (!this.active) return;
        for (let i = 0; i < this.options.length; i++) {
            const option = this.options[i];
            this.processToggle(option, e);
        }
        if (this.scrollbar.hovering === true) {
            this.scrollbar.scrolling = true
        }
    }
    mouseUp(e) {
        this.scrollbar.scrolling = false
    }
    mouseMove({ mouseX, mouseY }) {
        if (mouseInBox(
            {
                x: mouseX,
                y: mouseY
            },
            {
                x: this.x + this.w - (10 / 2) - 10,
                y: this.y + this.scrollbar.top - (10 / 2) + this.scrollbar.scroll * (this.h - 75),
                w: 10,
                h: this.scrollbar.bottom + (10 / 2),
            }
        )
        ) {
            this.scrollbar.hovering = true
        } else {
            this.scrollbar.hovering = false
        }

        if (this.scrollbar.scrolling === true) {
            let scrollT = this.y + this.scrollbar.top
            let scrollB = this.y + this.h - this.scrollbar.bottom
            this.scrollbar.scroll = Math.min(1, Math.max(0, (mouseY - scrollT) / (scrollB - scrollT)))
            this.scrollbar.hovering = true
        }
    }
    updateScroll({ x, y }, { mouseX, mouseY }) {
        if (mouseX > this.x && this.w + this.x > mouseX && this.y < mouseY && mouseY < this.y + this.h && (this.scrollbar.render.scroll * (this.h - 75)) < (this.options.length - 7) * 50 && -1 < (this.scrollbar.render.scroll * (this.h - 75))) {
            this.scrollbar.scroll += y / 100 * 0.1;
        }
    }
    processToggle(t, e) {
        const { x, y } = e;
        const tx = t.screenPosition.x;
        const ty = t.screenPosition.y;
        const w = t.screenPosition.w;
        const h = t.screenPosition.h;
        if (x > tx && (y + (this.scrollbar.render.scroll * ((this.options.length - 8) * 50))) > ty && x < tx + w && y < ty + (h - (this.scrollbar.render.scroll * ((this.options.length - 8) * 50)))) {
            if (t.type !== 'numeric') {
                t.state = !t.state;
                t.changeTime = time;
                t.toggleFn(t.state);
            } else {
                t.changeTime = time;
                t.state = t.toggleFn(t.state);
            }
        }
    }
}

flowrMod.flowrSettingsMenu = new flowrMod.FlowrSettingsMenu()

/**************/
/* FUNCTIONS */
/*************/

if (biomeManager.getCurrentBiome() === '1v1') {
    window.calculateStats(true)
} else {
    window.calculateStats(false)
}

petalRotationNaturalRotate.Wing = 0.01
delete petalContainerRotateMap.Peas
delete petalContainerRotateMap.Grapes

formatAmountHighPrecision = function formatAmountHighPrecision(amount) {
    if (amount < 1000) {
        return amount;
    }
    else if (amount < 1e4) {
        return Math.floor(amount / 1e1) / 100 + "k";
    }
    else if (amount < 1e5) {
        return Math.floor(amount / 1e2) / 10 + "k";
    }
    else if (amount < 1e6) {
        return Math.floor(amount / 1e3) + "k";
    }
    else if (amount < 1e7) {
        return Math.floor(amount / 1e4) / 100 + "m";
    }
    else if (amount < 1e8) {
        return Math.floor(amount / 1e5) / 10 + "m";
    }
    else if (amount < 1e9) {
        return Math.floor(amount / 1e6) + "m";
    }
    else if (amount < 1e10) {
        return Math.floor(amount / 1e7) / 100 + "b";
    }
    else if (amount < 1e11) {
        return Math.floor(amount / 1e8) / 10 + "b";
    }
    else if (amount < 1e12) {
        return Math.floor(amount / 1e9) + "b";
    }
    else if (amount < 1e13) {
        return Math.floor(amount / 1e10) / 100 + "t";
    }
    else if (amount < 1e14) {
        return Math.floor(amount / 1e11) / 10 + "t";
    }
    else if (amount < 1e15) {
        return Math.floor(amount / 1e12) + "t";
    }
    else if (amount < 1e16) {
        return Math.floor(amount / 1e13) / 100 + "Qd";
    }
    else if (amount < 1e17) {
        return Math.floor(amount / 1e14) / 10 + "Qd";
    }
    else if (amount < 1e18) {
        return Math.floor(amount / 1e15) + "Qd";
    }
    else if (amount < 1e19) {
        return Math.floor(amount / 1e16) / 100 + "Qt";
    }
    else if (amount < 1e20) {
        return Math.floor(amount / 1e17) / 10 + "Qt";
    }
    else if (amount < 1e21) {
        return Math.floor(amount / 1e18) + "Qt";
    }
}

flowrMod.assignColors = function assignColors() {
    for (let i = 0; i < Colors.rarities.length; i++) {
        Colors.rarities[i].name = flowrMod.rarities[i].display
        Colors.rarities[i].color = flowrMod.rarities[i].color
        Colors.rarities[i].border = flowrMod.rarities[i].border
        Colors.rarities[i].hitbox = flowrMod.rarities[i].hitbox
    };
}

function rockRender({ type, bodyColor, bodyBorderColor, easterEgg }) {
    enemyDataMap[type] = (e) => {
        const verticies = [];

        // i is the angle in radians
        let inc = (Math.PI * 2) / Math.ceil( /*Math.sqrt(e.radius)*/ Math.log(e.radius) * 2 + 2 + Math.random() * 2);
        let offset = (e.radius + Math.random() * 3 - 1) / 5;
        if (e.rarity >= 6) { // ultra or super
            offset += 20;
        } // else if(e.rarity === 0){
        //     offset = 0;
        // }
        const angleOffset = Math.random() * Math.PI * 2;
        for (let i = angleOffset; i < Math.PI * 2 + angleOffset; i += inc) {
            // generate a point randomly offset
            verticies.push({
                x: Math.cos(i),
                y: Math.sin(i),
                randX: Math.random() * offset / e.radius,
                randY: Math.random() * offset / e.radius,
            })
        }

        e.maxVertexOffset = offset;

        // sometimes we're offset from the circle. We want to offset the position to make sure we're centered
        e.averageX = 0;
        e.averageY = 0;
        for (let i = 0; i < verticies.length; i++) {
            e.averageX += verticies[i].randX;
            e.averageY += verticies[i].randY;
        }
        e.averageX /= verticies.length;
        e.averageY /= verticies.length;

        for (let i = 0; i < verticies.length; i++) {
            verticies[i].randX -= e.averageX;
            verticies[i].randY -= e.averageY;
        }

        e.getVertexX = (i) => {
            return e.data[i].x * e.render.radius + e.data[i].randX * e.radius;
        }
        e.getVertexY = (i) => {
            return e.data[i].y * e.render.radius + e.data[i].randY * e.radius;
        }

        return verticies;
    }
    enemyRenderMap[type] = (e) => {
        if (e.rarity === 7 && easterEgg === true) {
            if (e.image === undefined || e.image.onload === undefined) {
                e.image = new Image();
                e.image.src = 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg';
                e.image.onload = () => {
                    e.imageLoaded = true;
                }
            }

            if (e.imageLoaded === true) {
                ctx.drawImage(e.image, -e.radius * 1.425, -e.radius * 1.425, e.radius * 3, e.radius * 3);
                return;
            }
        }

        ctx.lineWidth = e.render.radius / 10;

        // e.ticksSinceLastDamaged = 1;

        ctx.fillStyle = blendColor(e.team === "flower" ? "#fbea6f" : bodyColor, "#FF0000", Math.max(0, blendAmount(e)));
        ctx.strokeStyle = blendColor(e.team === "flower" ? "#cfbd53" : bodyBorderColor, "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            ctx.fillStyle = "#ffffff"; //"#FFFFFF";
            ctx.strokeStyle = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        }

        ctx.beginPath();

        ctx.moveTo(e.getVertexX(0), e.getVertexY(0));
        for (let i = 0; i < e.data.length; i++) {
            ctx.lineTo(e.getVertexX(i), e.getVertexY(i));
        }
        ctx.lineTo(e.getVertexX(0), e.getVertexY(0));
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

    }
}

function beetleRender({ type, bodyColor, bodyBorderColor, easterEgg }) {
    if (easterEgg === true) {
        enemyDataMap[type] = (e) => {
            return Math.floor(Math.random() * 1000)
        }
    }

    enemyRenderMap[type] = (e) => {
        e.render.time += Math.sqrt((e.render.lastX - e.render.x) ** 2 + (e.render.lastY - e.render.y) ** 2);
        e.render.lastX = e.render.x;
        e.render.lastY = e.render.y;

        ctx.lineWidth = e.render.radius / 3;
        let body = blendColor(e.team === "flower" ? "#fbea6f" : e.data === 0 ? "#ad1617" : bodyColor, "#FF0000", Math.max(0, blendAmount(e)));
        let bodyBorder = blendColor(e.team === "flower" ? "#cfbd53" : e.data === 0 ? "#8b1312" : bodyBorderColor, "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            body = "#ffffff"; //"#FFFFFF";
            bodyBorder = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        }

        ctx.rotate(e.render.angle);
        //Front things
        ctx.fillStyle = "#333333";

        ctx.translate(e.render.radius * 0.99, -e.render.radius * 0.37); // NICE WTF BRO FINALLY
        let rotateAngle = Math.cos(e.render.time / 12) / 7.5 + 0.1; // hi FINALLY GOT BEETLE RENDERING DONE OMG BRO I SOLD MY SOUL FOR THIS
        ctx.rotate(rotateAngle) // BRO HOW BIG IS THIS FUNCTIOIN WTF idfk bro
        ctx.beginPath();
        ctx.lineTo(e.render.radius * (0.66 - 0.99), e.render.radius * (-0.54 + 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.35 - 0.99), e.render.radius * (-0.81 + 0.37), e.render.radius * (1.8 - 0.99), e.render.radius * (-0.47 + 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.92 - 0.99), e.render.radius * (-0.38 + 0.37), e.render.radius * (1.81 - 0.99), e.render.radius * (-0.28 + 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.42 - 0.99), e.render.radius * (-0.37 + 0.37), e.render.radius * (0.74 - 0.99), e.render.radius * (-0.13 + 0.37));
        ctx.fill();
        ctx.closePath();
        ctx.rotate(-rotateAngle);
        ctx.translate(-e.render.radius * 0.99, e.render.radius * 0.37);

        ctx.translate(e.render.radius * 0.99, e.render.radius * 0.37);
        ctx.rotate(-rotateAngle)
        ctx.beginPath();
        ctx.lineTo(e.render.radius * (0.66 - 0.99), e.render.radius * (0.54 - 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.35 - 0.99), e.render.radius * (0.81 - 0.37), e.render.radius * (1.8 - 0.99), e.render.radius * (0.47 - 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.92 - 0.99), e.render.radius * (0.38 - 0.37), e.render.radius * (1.81 - 0.99), e.render.radius * (0.28 - 0.37));
        ctx.quadraticCurveTo(e.render.radius * (1.42 - 0.99), e.render.radius * (0.37 - 0.37), e.render.radius * (0.74 - 0.99), e.render.radius * (0.13 - 0.37));
        ctx.fill();
        ctx.closePath();
        ctx.rotate(rotateAngle);
        ctx.translate(-e.render.radius * 0.99, -e.render.radius * 0.37);

        //Body
        ctx.lineJoin = "round";
        ctx.lineCap = "round"
        ctx.lineWidth = e.render.radius * 0.19310344827586207;
        ctx.strokeStyle = bodyBorder;
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.lineTo(e.render.radius * -1.01, e.render.radius * 0);
        ctx.bezierCurveTo(e.render.radius * -1.1, e.render.radius * -1.01, e.render.radius * 1.1, e.render.radius * -1.01, e.render.radius * 1, e.render.radius * 0);
        ctx.bezierCurveTo(e.render.radius * 1.1, e.render.radius * 1.01, e.render.radius * -1.1, e.render.radius * 1.01, e.render.radius * -1.01, e.render.radius * 0);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Middle Line
        ctx.beginPath();
        ctx.lineTo(e.render.radius * -0.51, e.render.radius * 0);
        ctx.quadraticCurveTo(e.render.radius * 0.01, e.render.radius * -0.06, e.render.radius * 0.5, e.render.radius * 0);
        ctx.stroke();
        ctx.closePath();

        //Dots
        ctx.fillStyle = bodyBorder;

        ctx.beginPath();
        ctx.arc(e.render.radius * -0.43, e.render.radius * -0.3, e.render.radius * 0.12413793103448276, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(e.render.radius * -0.01, e.render.radius * -0.38, e.render.radius * 0.12413793103448276, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(e.render.radius * 0.43, e.render.radius * -0.3, e.render.radius * 0.12413793103448276, 0, Math.PI * 2, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = bodyBorder;
        ctx.arc(e.render.radius * -0.43, e.render.radius * 0.3, e.render.radius * 0.12413793103448276, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(e.render.radius * -0.01, e.render.radius * 0.38, e.render.radius * 0.12413793103448276, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(e.render.radius * 0.43, e.render.radius * 0.3, e.render.radius * 0.12413793103448276, 0, Math.PI * 2, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.rotate(-e.render.angle);
    }
}

function ladybugRender({ type, headColor, bodyColor, bodyBorderColor, spotColor }) {
    enemyDataMap[type] = (e) => {
        let data = [];
        for (let i = 0; i < (Math.ceil(Math.max(0, e.rarity - 3) ** 1.05) * 3) + 9; i += 3) {
            data[i] = Math.random() * 0.9
            if (Math.round(Math.random()) === 1) { data[i + 1] = Math.random() * 0.9 } else { data[i + 1] = 0 - Math.random() * 0.9 }
            data[i + 2] = (Math.random() * e.rarity) / 5;
        }
        return data;
    };

    enemyRenderMap[type] = (e) => {
        if (attemptDrawCache(e, e.render.angle + Math.PI)) return;
        let body = blendColor(e.team === "flower" ? "#fbea6f" : bodyColor, "#FF0000", Math.max(0, blendAmount(e)));
        let head = blendColor(headColor, "#FF0000", Math.max(0, blendAmount(e)));
        let bodyBorder = blendColor(e.team === "flower" ? "#cbbd59" : bodyBorderColor, "#FF0000", Math.max(0, blendAmount(e)));
        let spot = blendColor(spotColor, "#FF0000", Math.max(0, blendAmount(e)))
        if (checkForFirstFrame(e)) {
            body = "#FFFFFF";
            head = "#FFFFFF";
            bodyBorder = "#FFFFFF"
            spot = "#FFFFFF"
        }
        ctx.rotate(e.render.angle + Math.PI);
        let realctx = checkToCache(e);
        ctx.strokeStyle = blendColor(head, "#000000", 0.19);
        ctx.fillStyle = head;
        ctx.lineWidth = e.render.radius / 5; //7 * ((e.render.radius / 30) ** 0.9);

        // head (little black thing sticking out)
        ctx.beginPath();
        ctx.arc(-e.render.radius / 2, 0, e.render.radius / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // main body
        ctx.strokeStyle = bodyBorder;
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(0, 0, e.render.radius, (5.9375 / 5) * Math.PI, (4.0625 / 5) * Math.PI);
        ctx.quadraticCurveTo(-0.4 * e.render.radius, 0, Math.cos((5.9375 / 5) * Math.PI) * e.render.radius, Math.sin((5.9375 / 5) * Math.PI) * e.render.radius);
        ctx.closePath();

        ctx.fill();
        ctx.save();
        ctx.clip();

        // ladybug spots
        ctx.fillStyle = spot;
        for (let i = 0; i < (Math.ceil(e.rarity ** 1.5) * 3) + 9; i += 3) {
            ctx.beginPath();
            ctx.arc((-0.5 + e.data[i]) * e.render.radius / 30 * 35, (-0.5 + e.data[i + 1] * e.render.radius / 30 * 35), e.render.radius / 30 * (5 + e.data[i + 2] * 5), 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
        ctx.restore();

        ctx.beginPath();
        ctx.arc(0, 0, e.render.radius, (5.9375 / 5) * Math.PI, (4.0625 / 5) * Math.PI);
        ctx.quadraticCurveTo(-0.4 * e.render.radius, 0, Math.cos((5.9375 / 5) * Math.PI) * e.render.radius, Math.sin((5.9375 / 5) * Math.PI) * e.render.radius);
        ctx.stroke();
        ctx.closePath();
        finishCache(e, realctx);
        ctx.rotate(-e.render.angle - Math.PI);
    }
}

function jellyfishRender({ type, easterEgg }) {
    if (easterEgg === true) {
        enemyDataMap[type] = (e) => {
            return Math.floor(Math.random() * 100)
        }
    }

    enemyRenderMap[type] = (e) => {
        let savedAlpha = ctx.globalAlpha;
        if (e.lastShocked == 0) {
            e.renderShock = [];
            for (let i = 0; i < e.shock.length; i++) {
                let value = e.shock[i];
                if (i == 0) {
                    e.renderShock.push(value);
                } else {
                    let average1 = {};
                    average1.x = value.x * 1 / 3 + e.shock[i - 1].x * 2 / 3;
                    average1.y = value.y * 1 / 3 + e.shock[i - 1].y * 2 / 3;
                    let average2 = {};
                    average2.x = value.x * 2 / 3 + e.shock[i - 1].x * 1 / 3;
                    average2.y = value.y * 2 / 3 + e.shock[i - 1].y * 1 / 3;
                    let diff = Math.sqrt((value.y - e.shock[i - 1].y) ** 2 + (value.x - e.shock[i - 1].x) ** 2)
                    average1.x += (Math.random() * diff / 5 - diff / 10)
                    average1.y += (Math.random() * diff / 5 - diff / 10)
                    e.renderShock.push(average1);
                    e.renderShock.push(average2);
                    e.renderShock.push(value);
                }
            }
        }

        if (e.shockwaveTime) {
            if (time < e.shockwaveTime + 1000) {
                let savedAlpha = ctx.globalAlpha;
                ctx.globalAlpha = 1 - ((time - e.shockwaveTime) / 1000);
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(0, 0, 2200, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = savedAlpha;
            }
        }
        /*
                room.enemies[msg[1]].splitShockwaveAngle = msg[2];
        room.enemies[msg[1]].splitShockwaveWarningTime = time;
        */
        if (e.splitShockwaveWarningTime) {
            if (time < e.splitShockwaveWarningTime + 4000 && (!e.splitShockwaveTime || time > e.splitShockwaveTime + 4000)) {
                let savedAlpha = ctx.globalAlpha;
                ctx.globalAlpha = ((time - e.splitShockwaveWarningTime) / 4000);
                ctx.strokeStyle = "red";

                ctx.lineWidth = 3000;
                ctx.lineCap = "butt";

                for (let i = 4; i--; i > 0) {
                    ctx.beginPath();
                    ctx.arc(0, 0, 1500, e.splitShockwaveAngle - 0.3 + i * Math.PI / 2, e.splitShockwaveAngle + 0.3 + i * Math.PI / 2);
                    ctx.stroke();
                    ctx.closePath();
                }

                ctx.globalAlpha = savedAlpha;
                ctx.lineCap = "round"
            }
        }
        if (e.splitShockwaveTime) {
            if (time < e.splitShockwaveTime + 1000) {
                let savedAlpha = ctx.globalAlpha;
                ctx.globalAlpha = 0.5 - ((time - e.splitShockwaveTime) / 2000);
                ctx.strokeStyle = "white";

                ctx.lineWidth = 3000;
                ctx.lineCap = "butt";

                for (let i = 4; i--; i > 0) {
                    ctx.beginPath();
                    ctx.arc(0, 0, 1500, e.splitShockwaveAngle - 0.3 + i * Math.PI / 2, e.splitShockwaveAngle + 0.3 + i * Math.PI / 2);
                    ctx.stroke();
                    ctx.closePath();
                }

                ctx.globalAlpha = savedAlpha;
                ctx.lineCap = "round"
            }
        }

        e.lastShocked += dt;
        e.render.time += dt;
        ctx.rotate(e.render.angle);
        ctx.lineWidth = e.render.radius / 6;

        ctx.fillStyle = blendColor(e.team === "flower" ? "#fbea6f" : '#ffffff', "#FF0000", Math.max(0, blendAmount(e)));
        ctx.strokeStyle = blendColor(e.team === "flower" ? "#fbea6f" : '#ffffff', "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            ctx.fillStyle = "#ffffff"; //"#FFFFFF";
            ctx.strokeStyle = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        }
        ctx.globalAlpha *= 0.5;

        ctx.rotate(e.render.angle);
        if (e.data !== 0) {
            for (let i = 8; i > 0; i--) {
                let offset = Math.cos(e.render.time / 500 + i * Math.PI / 4);
                ctx.rotate(Math.PI * 1 / 4 * i)
                ctx.beginPath();
                ctx.moveTo(e.render.radius * 0.8, 0);
                ctx.quadraticCurveTo(e.render.radius * 0.9, 0, e.render.radius * 1.5, e.render.radius * 0.2 * offset)
                ctx.stroke();
                ctx.closePath();
                ctx.rotate(-Math.PI * 1 / 4 * i)
            }
        }
        ctx.rotate(-e.render.angle)

        ctx.globalAlpha *= 1.3;
        ctx.lineWidth = e.render.radius / 12;
        ctx.beginPath();
        ctx.arc(0, 0, e.render.radius * 23 / 24, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha *= 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, e.render.radius * 22 / 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();


        ctx.rotate(-e.render.angle);

        if (e.lastShocked < 900) {
            ctx.globalAlpha = (1 - e.lastShocked / 900);
            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let i = 0; i < e.renderShock.length; i++) {
                ctx.lineTo(e.renderShock[i].x - e.render.x, e.renderShock[i].y - e.render.y);
            }
            ctx.stroke();
            ctx.closePath();
        }

        ctx.globalAlpha = savedAlpha;
    }
}

function crabRender({ type, easterEgg }) {
    if (easterEgg === true) {
        enemyDataMap[type] = (e) => {
            return Math.floor(Math.random() * 100)
        }
    }

    enemyRenderMap[type] = (e) => {
        e.render.time += Math.sqrt((e.render.lastX - e.render.x) ** 2 + (e.render.lastY - e.render.y) ** 2);
        e.render.lastX = e.render.x;
        e.render.lastY = e.render.y;


        let outline = blendColor(e.team === "flower" ? "#cfbd53" : '#b15a3f', "#FF0000", Math.max(0, blendAmount(e)));
        let fill = blendColor(e.team === "flower" ? "#fbea6f" : '#dc704b', "#FF0000", Math.max(0, blendAmount(e)))
        let legColor = blendColor('#4e2521', '#FF0000', Math.max(0, blendAmount(e)))
        if (checkForFirstFrame(e)) {
            outline = "#ffffff";
            fill = "#ffffff";
            legColor = '#ffffff';
        }

        ctx.rotate(e.render.angle)

        //Claws
        ctx.fillStyle = legColor;
        ctx.strokeStyle = legColor;
        ctx.lineWidth = e.radius * 0.09565217391304348;


        let xTranslate = 0.69;
        let yTranslate = -0.39;
        ctx.translate(e.render.radius * xTranslate, e.render.radius * yTranslate);
        let rotateAngle = Math.cos(e.render.time / 9) / 6;
        ctx.rotate(rotateAngle)

        ctx.beginPath();
        ctx.lineTo(e.render.radius * (0.45 - xTranslate), e.render.radius * (-0.88 - yTranslate));
        ctx.quadraticCurveTo(e.render.radius * (1.03 - xTranslate), e.render.radius * (-1.15 - yTranslate), e.render.radius * (1.25 - xTranslate), e.render.radius * (-0.62 - yTranslate))
        ctx.lineTo(e.render.radius * (1.01 - xTranslate), e.render.radius * (-0.77 - yTranslate))
        ctx.lineTo(e.render.radius * (1.11 - xTranslate), e.render.radius * (-0.52 - yTranslate))
        ctx.quadraticCurveTo(e.render.radius * (0.85 - xTranslate), e.render.radius * (-0.72 - yTranslate), e.render.radius * (0.7 - xTranslate), e.render.radius * (-0.73 - yTranslate))
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.rotate(-rotateAngle)
        ctx.translate(-e.render.radius * xTranslate, -e.render.radius * yTranslate);

        xTranslate = 0.69;
        yTranslate = 0.39;
        ctx.translate(e.render.radius * xTranslate, e.render.radius * yTranslate);
        rotateAngle = -Math.cos(e.render.time / 9) / 6;
        ctx.rotate(rotateAngle)

        ctx.beginPath();
        ctx.lineTo(e.render.radius * (0.45 - xTranslate), e.render.radius * (0.88 - yTranslate));
        ctx.quadraticCurveTo(e.render.radius * (1.03 - xTranslate), e.render.radius * (1.15 - yTranslate), e.render.radius * (1.25 - xTranslate), e.render.radius * (0.62 - yTranslate))
        ctx.lineTo(e.render.radius * (1.01 - xTranslate), e.render.radius * (0.77 - yTranslate))
        ctx.lineTo(e.render.radius * (1.11 - xTranslate), e.render.radius * (0.52 - yTranslate))
        ctx.quadraticCurveTo(e.render.radius * (0.85 - xTranslate), e.render.radius * (0.72 - yTranslate), e.render.radius * (0.7 - xTranslate), e.render.radius * (0.73 - yTranslate))
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.rotate(-rotateAngle)
        ctx.translate(-e.render.radius * xTranslate, -e.render.radius * yTranslate);

        //Legs
        ctx.lineWidth = e.render.radius / 4;

        ctx.rotate(Math.PI / 2);

        for (let i = 4; i--; i > 0) {
            let rotateAmount = 0
            if (e.data !== 0) {
                rotateAmount = i * 0.34906 - 0.34906 - 0.17453292 + Math.cos(e.render.time / 12 + i) * 0.1; //i * Math.PI/6 - Math.PI/6 + Math.PI/12 + Math.cos(e.time/75 + i/2)*0.4;
            }
            ctx.rotate(rotateAmount);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(e.render.radius * 1.5, 0);
            ctx.lineTo(e.render.radius * 1.7, e.render.radius * (rotateAmount) / 3);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(-e.render.radius * 1.5, 0);
            ctx.lineTo(-e.render.radius * 1.7, -e.render.radius * (rotateAmount) / 3);
            ctx.stroke();
            ctx.closePath();

            ctx.rotate(-rotateAmount);


        }

        ctx.rotate(-Math.PI / 2);

        //Main body
        ctx.lineJoin = 'round';
        ctx.lineCap = "round"

        ctx.strokeStyle = outline;
        ctx.fillStyle = fill;
        ctx.lineWidth = e.radius * 0.1826086956521739;


        //Body structure
        ctx.beginPath();
        ctx.ellipse(0, 0, e.radius * 0.8695652173913043, e.radius * 1.1130434782608696, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        //Patterns on body
        ctx.beginPath();
        ctx.lineTo(e.render.radius * -0.49, e.render.radius * -0.39);
        ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * -0.16, e.render.radius * 0.49, e.render.radius * -0.39)
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(e.render.radius * -0.49, e.render.radius * 0.39);
        ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * 0.16, e.render.radius * 0.49, e.render.radius * 0.39)
        ctx.stroke();
        ctx.closePath();

        ctx.rotate(-e.render.angle)
    }
}

function rockPetalRender({ type, easterEgg }) {
    petalRenderMap[type] = (p) => {
        if (p.rarity === 7 && easterEgg === true) {
            if (p.image === undefined || p.image.onload === undefined) {
                p.image = new Image();
                p.image.src = 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg';
                p.image.onload = () => {
                    p.imageLoaded = true;
                }
            }

            if (p.imageLoaded === true) {
                ctx.drawImage(p.image, -p.radius, - p.radius, p.radius * 2, p.radius * 2);
                return;
            }
        }
        ctx.beginPath();
        ctx.fillStyle = blendColor("#777777", '#FF0000', blendAmount(p));
        ctx.strokeStyle = blendColor("#606060", '#FF0000', blendAmount(p));
        ctx.lineWidth = 3;
        if (checkForFirstFrame(p)) {
            ctx.fillStyle = "#FFFFFF";
            ctx.strokeStyle = "#FFFFFF"
        }
        for (let i = 0; i < 5; i++) {
            ctx.lineTo(Math.cos(i * 1.256) * p.radius, Math.sin(i * 1.256) * p.radius);
        }
        ctx.fill();
        ctx.lineTo(Math.cos(5 * 1.256) * p.radius, Math.sin(5 * 1.256) * p.radius);
        ctx.stroke();
        ctx.closePath();
        // ctx.beginPath();
        // ctx.fillStyle = blendColor("#777777", '#FF0000', blendAmount(p));
        // if(checkForFirstFrame(p)){
        //     ctx.fillStyle = "#FFFFFF";
        // }
        // for(let i = 0; i < 5; i++){
        // 	ctx.lineTo(Math.cos(i * 1.256) * p.radius* 0.65, Math.sin(i * 1.256) * p.radius * 0.65);
        // }
        // ctx.fill();
        // ctx.closePath();
    }
}

function spiderRender({ type, bodyColor, bodyBorderColor, legColor }) {
    enemyRenderMap[type] = (e) => {
        e.render.time += e.isMenuEnemy === true ? 2 * (1 + Math.sin(performance.now() / 1000) / 2) : Math.sqrt((e.render.lastX - e.render.x) ** 2 + (e.render.lastY - e.render.y) ** 2) * (1 - Math.sqrt(e.render.radius / 142.5) + 0.5) * 5;

        e.render.lastX = e.render.x;
        e.render.lastY = e.render.y;

        let body = blendColor(e.team === "flower" ? "#fbea6f" : bodyColor, "#FF0000", Math.max(0, blendAmount(e)));
        let bodyBorder = blendColor(e.team === "flower" ? "#cfbd53" : bodyBorderColor, "#FF0000", Math.max(0, blendAmount(e)));
        let leg = blendColor(legColor, "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            body = "#FFFFFF";
            bodyBorder = "#FFFFFF";
            leg = "#FFFFFF";
        }
        ctx.rotate(e.render.angle + Math.PI);

        const isOpaq = ctx.globalAlpha !== 1;

        if (isOpaq === true) {
            // draw head and clip so that legs dont appear insider body
            ctx.save();
            let p = new Path2D();
            p.rect(-10000, -10000, 20000, 20000);
            p.arc(0, 0, e.render.radius, 0, Math.PI * 2);
            ctx.clip(p, "evenodd");
        }

        // legs
        ctx.strokeStyle = leg;
        ctx.lineWidth = e.render.radius * 0.4;

        ctx.beginPath();
        ctx.rotate(Math.cos(e.render.time / 52) * 0.25)
        ctx.moveTo(e.render.radius * 2.22, e.render.radius * -1.21)
        ctx.bezierCurveTo(e.render.radius * 1.64, e.render.radius * -0.30, e.render.radius * -1.30, e.render.radius * 0, e.render.radius * -2.11, e.render.radius * 1.59)
        ctx.rotate(-Math.cos(e.render.time / 52) * 0.25)

        ctx.rotate(-Math.cos((e.render.time + 100) / 52) * 0.25)
        ctx.moveTo(e.render.radius * -2.11, e.render.radius * -1.65)
        ctx.bezierCurveTo(e.render.radius * -1.39, e.render.radius * -0.28, e.render.radius * 1, e.render.radius * 0.2, e.render.radius * 1.58, e.render.radius * 1.95)
        ctx.rotate(Math.cos((e.render.time + 100) / 52) * 0.25)

        ctx.rotate(Math.cos(e.render.time / 52) * 0.25)
        ctx.moveTo(e.render.radius * -1.33, e.render.radius * -2.31)
        ctx.bezierCurveTo(e.render.radius * -0.86, e.render.radius * -0.42, e.render.radius * 0.38, e.render.radius * 0, e.render.radius * 0.68, e.render.radius * 2.43)
        ctx.rotate(-Math.cos(e.render.time / 52) * 0.25)

        ctx.rotate(-Math.cos((e.render.time + 100) / 52) * 0.25)
        ctx.moveTo(e.render.radius * 0.68, e.render.radius * -2.50)
        ctx.bezierCurveTo(e.render.radius * 0.29, e.render.radius * -0.12, e.render.radius * -0.23, e.render.radius * -0.14, e.render.radius * -0.33, e.render.radius * 2.55)
        ctx.rotate(Math.cos((e.render.time + 100) / 52) * 0.25)

        ctx.stroke();
        ctx.closePath();

        if (isOpaq === true) {
            ctx.restore();
            ctx.lineWidth = e.render.radius * 0.4;
        }

        // main body
        ctx.strokeStyle = bodyBorder;
        ctx.fillStyle = body;
        ctx.beginPath();
        ctx.arc(0, 0, e.render.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.rotate(-e.render.angle - Math.PI);
    }
}

function antRender({ type, bodyColor, bodyBorderColor, pincerColor, wingColor, hasWings, isBaby, isTermite }) {
    enemyRenderMap[type] = (e) => {
        e.render.time += Math.sqrt((e.render.lastX - e.render.x) ** 2 + (e.render.lastY - e.render.y) ** 2) * (1 - Math.sqrt(e.render.radius / 142.5) + 0.5) * 5;
        e.render.lastX = e.render.x;
        e.render.lastY = e.render.y;

        const isOpaq = ctx.globalAlpha !== 1;

        let body = blendColor(e.team === "flower" ? "#fbea6f" : bodyColor, "#FF0000", Math.max(0, blendAmount(e)));
        let bodyBorder = blendColor(e.team === "flower" ? "#cfbd53" : bodyBorderColor, "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            body = "#ffffff"; //"#FFFFFF";
            bodyBorder = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        }

        // legs
        ctx.strokeStyle = pincerColor;
        ctx.lineWidth = e.render.radius * 0.41;

        ctx.rotate(e.render.angle);

        if (isBaby === true) { ctx.translate(e.render.radius * -0.15, e.render.radius * 0) }

        let angle = Math.cos(time / 180 + e.render.time / 60) * 0.05;

        ctx.beginPath();

        if (isTermite === true) {
            ctx.moveTo(e.render.radius * 0.62, e.render.radius * -0.45)
            ctx.rotate(angle - Math.PI / 75)
            ctx.lineTo(e.render.radius * 0.91, e.render.radius * -0.3)
            ctx.lineTo(e.render.radius * 1.22, e.render.radius * -0.63)
            ctx.lineTo(e.render.radius * 1.56, e.render.radius * -0.23)
            ctx.rotate(-(angle - Math.PI / 75))

            ctx.moveTo(e.render.radius * 0.56, e.render.radius * 0.45)
            ctx.rotate(-(angle - Math.PI / 75))
            ctx.lineTo(e.render.radius * 0.91, e.render.radius * 0.3)
            ctx.lineTo(e.render.radius * 1.22, e.render.radius * 0.63)
            ctx.lineTo(e.render.radius * 1.56, e.render.radius * 0.23)
            ctx.rotate(angle - Math.PI / 75)
        } else {
            ctx.moveTo(e.render.radius * 0.62, e.render.radius * -0.45)
            ctx.rotate(angle)
            ctx.quadraticCurveTo(e.render.radius * 0.93, e.render.radius * -0.59, e.render.radius * 1.53, e.render.radius * -0.31)
            ctx.rotate(-angle)

            ctx.moveTo(e.render.radius * 0.62, e.render.radius * 0.45)
            ctx.rotate(-angle)
            ctx.quadraticCurveTo(e.render.radius * 0.93, e.render.radius * 0.59, e.render.radius * 1.53, e.render.radius * 0.31)
            ctx.rotate(angle)
        }

        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = body;
        ctx.strokeStyle = bodyBorder;

        if (isBaby === false) {
            ctx.beginPath();
            ctx.arc(e.render.radius * -0.91, e.render.radius * 0, e.render.radius * 0.65, 0, Math.PI * 2)
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }

        if (hasWings === true) {

            let wingAngle = Math.cos(time / 420 + e.render.time / 70) / 7 - 0.05;
            ctx.fillStyle = wingColor;
            ctx.globalAlpha *= 0.3

            ctx.beginPath();

            ctx.rotate(wingAngle);
            ctx.ellipse(e.render.radius * -0.98, e.render.radius * -0.54, e.render.radius * 0.79, e.render.radius * 0.42, 15 * ((Math.PI * 2) / 360), 0, Math.PI * 2)
            ctx.rotate(-wingAngle)

            ctx.rotate(-wingAngle)
            ctx.ellipse(e.render.radius * -0.98, e.render.radius * 0.54, e.render.radius * 0.79, e.render.radius * 0.42, -15 * ((Math.PI * 2) / 360), 0, Math.PI * 2)
            ctx.rotate(wingAngle)

            ctx.fill();
            ctx.closePath();

            ctx.globalAlpha *= 1 / 0.3

        }

        ctx.fillStyle = body;
        ctx.strokeStyle = bodyBorder;

        ctx.beginPath();
        ctx.arc(e.render.radius * 0.15, e.render.radius * 0, e.render.radius * 0.89, 0, Math.PI * 2)
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if (isBaby === true) { ctx.translate(e.render.radius * 0.15, e.render.radius * 0) }

        ctx.rotate(-e.render.angle);
    }
}

function leechRender({ type, bodyColor, strokeColor, pincerColor }) {
    enemyRenderMap[type] = (e) => {
        if (e.isInEnemyBox || e.isMenuEnemy) {
            if (e.isMenuEnemy === true) {
                ctx.rotate(e.angle);
            }
            ctx.lineWidth = e.radius * 0.07;
            ctx.strokeStyle = '#292929'
            ctx.rotate(-Math.PI * 3 / 4)
            ctx.beginPath();
            ctx.lineTo(e.render.radius * 0.93, e.render.radius * -0.12);
            ctx.quadraticCurveTo(e.render.radius * 1.1, e.render.radius * -0.12, e.render.radius * 1.25, e.render.radius * 0.16)
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.lineTo(e.render.radius * 0.91, e.render.radius * 0.18);
            ctx.quadraticCurveTo(e.render.radius * 0.94, e.render.radius * 0.24, e.render.radius * 1.13, e.render.radius * 0.3)
            ctx.stroke();
            ctx.closePath();

            ctx.lineJoin = "round";
            ctx.lineCap = "round"
            ctx.lineWidth = e.radius * 0.455;
            ctx.beginPath();
            ctx.lineTo(e.render.radius * -0.92, e.render.radius * 0);
            ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * -0.55, e.render.radius * 0.92, e.render.radius * 0)
            ctx.stroke();
            ctx.closePath();

            ctx.lineWidth = e.radius * 0.305;
            ctx.strokeStyle = '#333333';

            ctx.beginPath();
            ctx.lineTo(e.render.radius * -0.92, e.render.radius * 0);
            ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * -0.55, e.render.radius * 0.92, e.render.radius * 0)
            ctx.stroke();
            ctx.closePath();
            ctx.rotate(Math.PI * 3 / 4)
            if (e.isMenuEnemy === true) {
                ctx.rotate(-e.angle);
            }
            return;
        }
        if (!e.childIds) {
            return;
        }
        const isOpaq = ctx.globalAlpha !== 1;

        if (isOpaq === true) {
            // draw head and clip so that legs dont appear insider body
            ctx.save();
            let p = new Path2D();
            p.rect(-10000, -10000, 20000, 20000);
            p.arc(0, 0, e.render.radius, 0, Math.PI * 2);
            ctx.clip(p, "evenodd");
        }

        // legs
        ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));;
        ctx.lineWidth = e.render.radius / 2.36;
        if (checkForFirstFrame(e)) {
            ctx.fillStyle = "#ffffff"; //"#FFFFFF";
            ctx.strokeStyle = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        }

        ctx.rotate(e.render.angle);

        let angle = Math.cos(time / 180 + e.render.time / 60) * 0.05;

        ctx.beginPath();

        ctx.moveTo(e.render.radius * 0.62, e.render.radius * -0.45)
        ctx.rotate(angle)
        ctx.quadraticCurveTo(e.render.radius * 0.93, e.render.radius * -0.59, e.render.radius * 1.53, e.render.radius * -0.31)
        ctx.rotate(-angle)

        ctx.moveTo(e.render.radius * 0.62, e.render.radius * 0.45)
        ctx.rotate(-angle)
        ctx.quadraticCurveTo(e.render.radius * 0.93, e.render.radius * 0.59, e.render.radius * 1.53, e.render.radius * 0.31)
        ctx.rotate(angle)

        ctx.stroke();
        ctx.closePath();

        ctx.rotate(-Math.PI * 2 / 3 - Math.PI / 6);

        ctx.rotate(-e.render.angle);

        if (isOpaq === true) {
            ctx.restore();
        }
        ctx.lineWidth = e.render.radius * 2;

        ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            ctx.strokeStyle = "#ffffff"
        }

        ctx.beginPath();
        ctx.lineTo(0, 0);
        for (let i of e.childIds) {
            if (room.enemies[i]) {
                ctx.lineTo(room.enemies[i].render.x - e.render.x, room.enemies[i].render.y - e.render.y);
            }
        }
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = e.render.radius * 1.5;
        ctx.strokeStyle = blendColor('#333333', "#FF0000", Math.max(0, blendAmount(e)));
        if (checkForFirstFrame(e)) {
            ctx.strokeStyle = "#ffffff";
        }

        ctx.beginPath();
        ctx.lineTo(0, 0);
        for (let i of e.childIds) {
            if (room.enemies[i]) {
                ctx.lineTo(room.enemies[i].render.x - e.render.x, room.enemies[i].render.y - e.render.y);
            }
        }
        ctx.stroke();
        ctx.closePath();


    }
}

function sandstormRender({ type, innerColor, middleColor, outerColor }) {
    enemyRenderMap[type] = (e) => {
        let inner = blendColor(e.team === 'flower' ? "#cfbb50" : innerColor, "#FF0000", Math.max(0, blendAmount(e)));
        let middle = blendColor(e.team === 'flower' ? "#e6d059" : middleColor, "#FF0000", Math.max(0, blendAmount(e)));
        let outer = blendColor(e.team === 'flower' ? "#ffe763" : outerColor, "#FF0000", Math.max(0, blendAmount(e)));

        if (checkForFirstFrame(e)) {
            inner = "#ffffff"; //"#FFFFFF";
            outer = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
            middle = "#ffffff";
        }

        if (e.renderRotation === undefined) {
            e.renderRotation = 2 * Math.PI * Math.random();
        }
        e.renderRotation += 0.005 * dt;
        ctx.rotate(e.renderRotation);

        ctx.fillStyle = outer;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = e.render.radius * 0.2
        ctx.beginPath();
        for (let i = 7; i--; i > 0) {
            ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3), e.render.radius * Math.sin(i * Math.PI / 3));
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.rotate(-e.renderRotation * 2);
        ctx.fillStyle = middle;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        for (let i = 7; i--; i > 0) {
            ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3) * 2 / 3.25, e.render.radius * Math.sin(i * Math.PI / 3) * 2 / 3);
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.rotate(e.renderRotation * 2.5);
        ctx.fillStyle = inner;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        for (let i = 7; i--; i > 0) {
            ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3) * 1 / 3.25, e.render.radius * Math.sin(i * Math.PI / 3) * 1 / 3.5);
        }
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.rotate(-e.renderRotation * 1.5);
    }
}

enemyRenderMap.Sandstorm = (e) => {
    ctx.lineWidth = e.render.radius / 3;

    let inner = blendColor(e.team === 'flower' ? "#cfbb50" : '#d6ba36', "#FF0000", Math.max(0, blendAmount(e)));
    let middle = blendColor(e.team === 'flower' ? "#e6d059" : '#dfc85c', "#FF0000", Math.max(0, blendAmount(e)));
    let outer = blendColor(e.team === 'flower' ? "#ffe763" : '#ebda8e', "#FF0000", Math.max(0, blendAmount(e)));

    if (checkForFirstFrame(e)) {
        inner = "#ffffff"; //"#FFFFFF";
        outer = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
        middle = "#ffffff";
    }

    if (e.renderRotation === undefined) {
        e.renderRotation = 2 * Math.PI * Math.random();
    }
    e.renderRotation += 0.005 * dt;
    ctx.rotate(e.renderRotation);

    ctx.fillStyle = outer;
    ctx.beginPath();
    for (let i = 6; i--; i > 0) {
        ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3), e.render.radius * Math.sin(i * Math.PI / 3));
    }
    ctx.fill();
    ctx.closePath();
    ctx.rotate(-e.renderRotation);
    ctx.rotate(-e.renderRotation);
    ctx.fillStyle = middle;
    ctx.beginPath();
    for (let i = 6; i--; i > 0) {
        ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3) * 2 / 3, e.render.radius * Math.sin(i * Math.PI / 3) * 2 / 3);
    }
    ctx.fill();
    ctx.closePath();
    ctx.rotate(e.renderRotation);

    let finalRot = e.renderRotation * 1.5;
    ctx.rotate(finalRot);
    ctx.fillStyle = inner;
    ctx.beginPath();
    for (let i = 6; i--; i > 0) {
        ctx.lineTo(e.render.radius * Math.cos(i * Math.PI / 3) * 1 / 3, e.render.radius * Math.sin(i * Math.PI / 3) * 1 / 3);
    }
    ctx.fill();
    ctx.closePath();

    ctx.rotate(-finalRot);
}

enemyRenderMap.Leech = (e) => {
    if (e.isInEnemyBox || e.isMenuEnemy) {
        if (e.isMenuEnemy === true) {
            ctx.rotate(e.angle);
        }
        ctx.lineWidth = e.radius * 0.07;
        ctx.strokeStyle = '#292929'
        ctx.rotate(-Math.PI * 3 / 4)
        ctx.beginPath();
        ctx.lineTo(e.render.radius * 0.93, e.render.radius * -0.12);
        ctx.quadraticCurveTo(e.render.radius * 1.1, e.render.radius * -0.12, e.render.radius * 1.25, e.render.radius * 0.16)
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.lineTo(e.render.radius * 0.91, e.render.radius * 0.18);
        ctx.quadraticCurveTo(e.render.radius * 0.94, e.render.radius * 0.24, e.render.radius * 1.13, e.render.radius * 0.3)
        ctx.stroke();
        ctx.closePath();

        ctx.lineJoin = "round";
        ctx.lineCap = "round"
        ctx.lineWidth = e.radius * 0.455;
        ctx.beginPath();
        ctx.lineTo(e.render.radius * -0.92, e.render.radius * 0);
        ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * -0.55, e.render.radius * 0.92, e.render.radius * 0)
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = e.radius * 0.305;
        ctx.strokeStyle = '#333333';

        ctx.beginPath();
        ctx.lineTo(e.render.radius * -0.92, e.render.radius * 0);
        ctx.quadraticCurveTo(e.render.radius * 0, e.render.radius * -0.55, e.render.radius * 0.92, e.render.radius * 0)
        ctx.stroke();
        ctx.closePath();
        ctx.rotate(Math.PI * 3 / 4)
        if (e.isMenuEnemy === true) {
            ctx.rotate(-e.angle);
        }
        return;
    }
    if (!e.childIds) {
        if (!e.isChild) e.isChild = false
        if (!e.parentId && e.isChild !== true) {
            for (let id of Object.keys(room.enemies)) {
                let enemy = room.enemies[id]
                if (enemy.type !== 'Leech') continue
                if (enemy.childIds) {
                    enemy.childIds.includes(e.id) ? e.isChild = true : ''
                }
            }
        }

        if (e.team === 'flower' || !e.isChild) {
            ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));;
            ctx.lineWidth = e.render.radius / 2.36;

            ctx.rotate(e.render.angle);

            // let angle = Math.cos(window.performance.now()/120)*0.12;
            const inwardsOffset = Math.cos(time / 96) * e.render.radius * 0.024;
            // ctx.rotate(angle);
            ctx.rotate(Math.PI / 6);
            ctx.beginPath();
            ctx.moveTo(e.render.radius * 0.48, e.render.radius * 0.45);
            ctx.quadraticCurveTo(e.render.radius * 1.03 - inwardsOffset / 2, e.render.radius * .03, e.render.radius * 1.38 - inwardsOffset, -e.render.radius * .48);
            ctx.stroke();
            ctx.closePath();
            // ctx.rotate(-angle);

            ctx.rotate(Math.PI * 2 / 3);
            ctx.beginPath();
            ctx.moveTo(-e.render.radius * 0.48, e.render.radius * 0.45);
            ctx.quadraticCurveTo(-e.render.radius * 1.03 - inwardsOffset / 2, e.render.radius * .03, -e.render.radius * 1.38 + inwardsOffset, -e.render.radius * .48);
            ctx.stroke();
            ctx.closePath();

            ctx.rotate(-Math.PI * 2 / 3 - Math.PI / 6);
            ctx.rotate(-e.render.angle);

            ctx.beginPath()
            ctx.lineWidth = e.render.radius * 2;
            ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));
            ctx.lineTo(0, 0)
            ctx.stroke()

            ctx.lineWidth = e.render.radius * 1.5;
            ctx.strokeStyle = blendColor('#333333', "#FF0000", Math.max(0, blendAmount(e)));
            ctx.lineTo(0, 0)
            ctx.stroke()
            ctx.closePath()
        }
        return
    }
    const isOpaq = ctx.globalAlpha !== 1;

    if (isOpaq === true) {
        // draw head and clip so that legs dont appear insider body
        ctx.save();
        let p = new Path2D();
        p.rect(-10000, -10000, 20000, 20000);
        p.arc(0, 0, e.render.radius, 0, Math.PI * 2);
        ctx.clip(p, "evenodd");
    }

    // legs
    ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));;
    ctx.lineWidth = e.render.radius / 2.36;
    if (checkForFirstFrame(e)) {
        ctx.fillStyle = "#ffffff"; //"#FFFFFF";
        ctx.strokeStyle = "#ffffff" //'#cecece';//blendColor("#FFFFFF", "#000000", 0.19);
    }

    ctx.rotate(e.render.angle);

    // let angle = Math.cos(window.performance.now()/120)*0.12;
    const inwardsOffset = Math.cos(time / 96) * e.render.radius * 0.024;
    // ctx.rotate(angle);
    ctx.rotate(Math.PI / 6);
    ctx.beginPath();
    ctx.moveTo(e.render.radius * 0.48, e.render.radius * 0.45);
    ctx.quadraticCurveTo(e.render.radius * 1.03 - inwardsOffset / 2, e.render.radius * .03, e.render.radius * 1.38 - inwardsOffset, -e.render.radius * .48);
    ctx.stroke();
    ctx.closePath();
    // ctx.rotate(-angle);

    ctx.rotate(Math.PI * 2 / 3);
    ctx.beginPath();
    ctx.moveTo(-e.render.radius * 0.48, e.render.radius * 0.45);
    ctx.quadraticCurveTo(-e.render.radius * 1.03 - inwardsOffset / 2, e.render.radius * .03, -e.render.radius * 1.38 + inwardsOffset, -e.render.radius * .48);
    ctx.stroke();
    ctx.closePath();

    ctx.rotate(-Math.PI * 2 / 3 - Math.PI / 6);

    ctx.rotate(-e.render.angle);

    if (isOpaq === true) {
        ctx.restore();
    }
    ctx.lineWidth = e.render.radius * 2;

    ctx.strokeStyle = blendColor('#292929', "#FF0000", Math.max(0, blendAmount(e)));
    if (checkForFirstFrame(e)) {
        ctx.strokeStyle = "#ffffff"
    }

    ctx.beginPath();
    ctx.lineTo(0, 0);
    for (let i of e.childIds) {
        if (room.enemies[i]) {
            ctx.lineTo(room.enemies[i].render.x - e.render.x, room.enemies[i].render.y - e.render.y);
        }
    }
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = e.render.radius * 1.5;
    ctx.strokeStyle = blendColor('#333333', "#FF0000", Math.max(0, blendAmount(e)));
    if (checkForFirstFrame(e)) {
        ctx.strokeStyle = "#ffffff";
    }

    ctx.beginPath();
    ctx.lineTo(0, 0);
    for (let i of e.childIds) {
        if (room.enemies[i]) {
            ctx.lineTo(room.enemies[i].render.x - e.render.x, room.enemies[i].render.y - e.render.y);
        }
    }
    ctx.stroke();
    ctx.closePath();


}

petalRenderMap['Dark Compass'] = (p) => {

    ctx.lineWidth = 2.4;


    ctx.beginPath();
    ctx.fillStyle = blendColor('#cb6724', '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor('#404040', '#FF0000', blendAmount(p));
    let redCompass = blendColor('#18b3c3', '#FF0000', blendAmount(p))
    let whiteCompass = blendColor('#130f0e', '#FF0000', blendAmount(p))
    let centerDot = ctx.strokeStyle;

    //glow
    //shadow
    if (p.glow >= 0) {
        ctx.save();

        let glowColor = Colors.rarities[p.glow].color
        let extraRadius = 0;
        if (p.glow >= 8) {
            //omega+
            extraRadius += 0.5
        }
        if (p.glow >= 11) {
            //supreme+
            extraRadius += 0.5
        }
        if (p.glow == 11) {
            //make slightly brighter
            glowColor = "#db68f7"
        }
        ctx.fillStyle = glowColor
        ctx.globalAlpha = 0.7;

        ctx.arc(0, 0, p.radius * (2 + extraRadius + 0.3 * Math.cos(Date.now() / 500)), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.restore();

        redCompass = blendColor(glowColor, '#FF0000', blendAmount(p));
        centerDot = blendColor(Colors.rarities[p.glow].border, '#FF0000', blendAmount(p));

    }

    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF";
        redCompass = "#FFFFFF";
        whiteCompass = "#FFFFFF";
    }

    ctx.beginPath();
    ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = redCompass;
    ctx.beginPath();
    ctx.lineTo(0, -p.radius * 0.4);
    ctx.lineTo(p.radius, 0);
    ctx.lineTo(0, p.radius * 0.4);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = whiteCompass;
    ctx.beginPath();
    ctx.lineTo(0, -p.radius * 0.4);
    ctx.lineTo(-p.radius, 0);
    ctx.lineTo(0, p.radius * 0.4);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = centerDot;
    ctx.beginPath();
    ctx.arc(0, 0, p.radius / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

petalRenderMap.Ruby = (p) => {
    ctx.beginPath();
    ctx.fillStyle = blendColor("#e03f3f", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#a12222", '#FF0000', blendAmount(p));
    ctx.lineWidth = 3;
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 3; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 3) * p.radius, Math.sin(i * Math.PI * 2 / 3) * p.radius);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = blendColor(blendColor("#e03f3f", '#ffffff', 0.3), '#FF0000', blendAmount(p));
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
    }
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 3; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 3) * p.radius * 0.4, Math.sin(i * Math.PI * 2 / 3) * p.radius * 0.4);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.closePath();
}

petalRenderMap.Sapphire = (p) => {
    ctx.beginPath();
    ctx.fillStyle = blendColor("#12a9e7", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#0896d9", '#FF0000', blendAmount(p));
    ctx.lineWidth = 3;
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 6; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 6) * p.radius, Math.sin(i * Math.PI * 2 / 6) * p.radius);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = blendColor(blendColor("#12a9e7", '#ffffff', 0.3), '#FF0000', blendAmount(p));
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
    }
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 6; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 6) * p.radius * 0.6, Math.sin(i * Math.PI * 2 / 6) * p.radius * 0.6);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.closePath();
}

petalRenderMap.Token = (p) => {
    ctx.beginPath();
    ctx.fillStyle = blendColor("#ffcb21", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#c79b0c", '#FF0000', blendAmount(p));
    ctx.lineWidth = 3;
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }
    ctx.arc(0, 0, p.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = blendColor("#c79b0c", '#FF0000', blendAmount(p));
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 5; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 5) * p.radius / 2, Math.sin(i * Math.PI * 2 / 5) * p.radius / 2);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.closePath();

    ctx.beginPath()
    ctx.fillStyle = blendColor(Colors.rarities[p.rarity].color, "#c79b0c", 0.5 + (Math.sin(performance.now() / 1000) / 2))
    ctx.rotate(Math.PI / 4)
    for (let i = 0; i <= 5; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 5) * p.radius / 2, Math.sin(i * Math.PI * 2 / 5) * p.radius / 2);
    }
    ctx.rotate(-Math.PI / 4)
    ctx.fill();
    ctx.closePath();
}

petalRenderMap['Third Eye'] = (p) => {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.fillStyle = blendColor("#000000", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#000000", '#FF0000', blendAmount(p));
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }

    ctx.beginPath();
    ctx.lineTo(0, -p.radius * 0.9);
    ctx.quadraticCurveTo(p.radius * 0.9, 0, 0, p.radius * 0.9);
    ctx.quadraticCurveTo(-p.radius * 0.9, 0, 0, -p.radius * 0.9);
    ctx.fill();
    ctx.stroke()
    ctx.fillStyle = blendColor("#ffffff", '#FF0000', blendAmount(p));

    ctx.beginPath();
    ctx.arc(0, 0, p.radius * 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.lineTo(0, -radius*0.75);
    // ctx.quadraticCurveTo(radius*0.75, 0, 0, radius*0.75);
    // ctx.quadraticCurveTo(-radius*0.75, 0, 0, -radius*0.75);
    // ctx.stroke();
}

petalRenderMap.Soil = (p) => {
    ctx.lineWidth = 3 / p.radius;
    ctx.beginPath();
    ctx.fillStyle = blendColor("#695118", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#554213", '#FF0000', blendAmount(p));
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }

    ctx.beginPath();
    ctx.scale(p.radius, p.radius)
    ctx.moveTo(0.13552, -1.10878)
    ctx.lineTo(0.83390, -0.69709)
    ctx.lineTo(0.93935, 0.37472)
    ctx.lineTo(-0.03939, 0.96486)
    ctx.lineTo(-0.74308, 0.77310)
    ctx.lineTo(-1.02167, -0.01482)
    ctx.lineTo(-0.73154, -0.71841)
    ctx.lineTo(0.13552, -1.10878)
    ctx.fill();
    ctx.stroke();
    ctx.scale(1 / p.radius, 1 / p.radius)
    ctx.closePath();
}

petalRenderMap.Sand = (p) => {
    ctx.fillStyle = "#e0c85c"
    ctx.strokeStyle = "#b5a24b"
    ctx.lineWidth = p.radius * 1 / 2;

    ctx.beginPath();
    for (let i = 0; i <= 6; i++) {
        ctx.lineTo(Math.cos(i * Math.PI * 2 / 6) * p.radius, Math.sin(i * Math.PI * 2 / 6) * p.radius);
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

petalRenderMap.Trident = (p) => {
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.fillStyle = blendColor('#25dbe8', '#FF0000', blendAmount(p));
    if (p.rarity == 5 || p.rarity == 14 || p.rarity == 17) {
        ctx.fillStyle = blendColor('#24529c', '#FF0000', blendAmount(p));
    }
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
    }

    //Shaft
    ctx.beginPath();
    ctx.moveTo(p.radius * -0.15, p.radius * 1.4);
    ctx.lineTo(p.radius * 0.15, p.radius * 1.4);
    ctx.lineTo(p.radius * 0.15, p.radius * -0.6);
    ctx.lineTo(p.radius * -0.15, p.radius * -0.6);
    ctx.fill()
    ctx.closePath();

    //Top Arrow
    ctx.beginPath();
    ctx.moveTo(p.radius * 0.35, p.radius * -0.6);
    ctx.lineTo(p.radius * -0.35, p.radius * -0.6);
    ctx.lineTo(p.radius * 0, p.radius * -1.2);
    ctx.fill()
    ctx.closePath();

    //Right bottom
    ctx.beginPath();
    ctx.lineTo(p.radius * 0.15, p.radius * 0.75);
    ctx.quadraticCurveTo(p.radius * 0.35, p.radius * 0.72, p.radius * 0.62, p.radius * 0.81);
    ctx.lineTo(p.radius * 0.42, p.radius * 0.5);
    ctx.lineTo(p.radius * 0.15, p.radius * 0.5);
    ctx.fill()
    ctx.closePath();

    //Right right
    ctx.beginPath();
    ctx.lineTo(p.radius * 0.62, p.radius * 0.81)
    ctx.quadraticCurveTo(p.radius * 0.66, p.radius * -0.12, p.radius * 1.22, p.radius * -0.84);
    ctx.lineTo(p.radius * 0.71, p.radius * -0.5)
    ctx.quadraticCurveTo(p.radius * 0.5, p.radius * -0.26, p.radius * 0.42, p.radius * 0.5)
    ctx.fill();
    ctx.closePath();

    //Right top
    ctx.beginPath();
    ctx.lineTo(p.radius * 0.71, p.radius * -0.5)
    ctx.lineTo(p.radius * 0.56, p.radius * -0.54)
    ctx.quadraticCurveTo(p.radius * 0.84, p.radius * -0.81, p.radius * 1.22, p.radius * -0.84)
    ctx.fill();
    ctx.closePath();

    //Left bottom
    ctx.beginPath();
    ctx.lineTo(p.radius * -0.15, p.radius * 0.75);
    ctx.quadraticCurveTo(p.radius * -0.35, p.radius * 0.72, p.radius * -0.62, p.radius * 0.81);
    ctx.lineTo(p.radius * -0.42, p.radius * 0.5);
    ctx.lineTo(p.radius * -0.15, p.radius * 0.5);
    ctx.fill()
    ctx.closePath();

    //Left right
    ctx.beginPath();
    ctx.lineTo(p.radius * -0.62, p.radius * 0.81)
    ctx.quadraticCurveTo(p.radius * -0.66, p.radius * -0.12, p.radius * -1.22, p.radius * -0.84);
    ctx.lineTo(p.radius * -0.71, p.radius * -0.5)
    ctx.quadraticCurveTo(p.radius * -0.5, p.radius * -0.26, p.radius * -0.42, p.radius * 0.5)
    ctx.fill();
    ctx.closePath();

    //Left top
    ctx.beginPath();
    ctx.lineTo(p.radius * -0.71, p.radius * -0.5)
    ctx.lineTo(p.radius * -0.56, p.radius * -0.54)
    ctx.quadraticCurveTo(p.radius * -0.84, p.radius * -0.81, p.radius * -1.22, p.radius * -0.84)
    ctx.fill();
    ctx.closePath();
}

petalRenderMap.Rock = (p) => {
    ctx.beginPath();
    ctx.fillStyle = blendColor("#777777", '#FF0000', blendAmount(p));
    ctx.strokeStyle = blendColor("#606060", '#FF0000', blendAmount(p));
    ctx.lineWidth = 3;
    if (checkForFirstFrame(p)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }
    for (let i = 0; i <= 5; i++) {
        if (i == 0 || i == 5) {
            ctx.lineTo(Math.cos(i * Math.PI * 2 / 5) * p.radius * .85, Math.sin(i * Math.PI * 2 / 5) * p.radius * .85);
        } else {
            ctx.lineTo(Math.cos(i * Math.PI * 2 / 5) * p.radius, Math.sin(i * Math.PI * 2 / 5) * p.radius);
        }
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

enemyRenderMap.Soil = (e) => {
    ctx.lineWidth = e.render.radius * 0.01;;
    ctx.beginPath();
    ctx.fillStyle = blendColor("#695118", '#FF0000', blendAmount(e));
    ctx.strokeStyle = blendColor("#554213", '#FF0000', blendAmount(e));
    if (checkForFirstFrame(e)) {
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#FFFFFF"
    }

    ctx.beginPath();
    ctx.scale(e.render.radius, e.render.radius)
    ctx.moveTo(0.13552, -1.10878)
    ctx.lineTo(0.83390, -0.69709)
    ctx.lineTo(0.93935, 0.37472)
    ctx.lineTo(-0.03939, 0.96486)
    ctx.lineTo(-0.74308, 0.77310)
    ctx.lineTo(-1.02167, -0.01482)
    ctx.lineTo(-0.73154, -0.71841)
    ctx.lineTo(0.13552, -1.10878)
    ctx.fill();
    ctx.stroke();
    ctx.scale(1 / e.render.radius, 1 / e.render.radius)
    ctx.closePath();
}

if (flowrMod.simpleWeb === true) {
    petalRenderMap.WebProjectileWeb = (p) => {
        ctx.beginPath();
        ctx.fillStyle = "#ffffff"
        ctx.globalAlpha *= 0.5

        ctx.beginPath()
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()

        ctx.globalAlpha *= 1 / 0.5
    }
}


const renderColors = {
    white: "#ffffff",
    whiteBorder: "#cfcfcf",
    rubyRed: "#e03f3f",
    rubyRedBorder: "#a12222",
    rubyRedInner: blendColor("#e03f3f", '#ffffff', 0.3),
    sapphireBlue: "#12a9e7",
    sapphireBlueBorder: "#0896d9",
    sapphireBlueInner: blendColor("#12a9e7", '#ffffff', 0.3),
    darkRed: "#7f0f08",
    darkRedBorder: "#650d08",
    sand: "#e0c85c",
    sandBorder: "#b5a24b",
    dark: "#333333",
    darkBorder: "#292929",
    pink: "#ff94c9",
    pinkBorder: "#cf78a3",
    black: "#000000",
    soilBrown: "#695118",
    soilBrownBorder: "#554213",
    ladybugRed: "#EB4034",
    ladybugRedBorder: blendColor("#EB4034", '#000000', 0.19),
    ladybugSpot: "#111111",
    darkLadybugRed: "#962921",
    darkLadybugRedBorder: blendColor("#962921", '#000000', 0.19),
    darkLadybugSpot: "#be342a",
    ladybugYellow: "#ebeb34",
    ladybugYellowBorder: blendColor("#ebeb34", '#000000', 0.19),
    ladybugBlue: "#2ae8e5",
    ladybugBlueBorder: blendColor("#2ae8e5", '#000000', 0.19),
    rockGray: "#777777",
    rockGrayBorder: "#606060",
    cactusGreen: "#32a953",
    cactusGreenBorder: blendColor("#32a953", '#000000', 0.19),
    shinyPlasticYellow: "#dcab55",
    shinyPlasticYellowBorder: "#b48440",
    shinyPlasticRed: "#c5432e",
    shinyPlasticRedBorder: "#b03927",
    shinyPlasticOrange: "#d58203",
    shinyPlasticOrangeBorder: "#b86b02",
    shinyPlasticBYellow: "#ffbd00",
    shinyPlasticBYellowBorder: "#c3881a",
    shinyPlasticDRed: "#ba2c2c",
    shinyPlasticDRedBorder: "#a02323",
}

const paths = {
    Mandible: new Path2D('m.581-1.5115c-.0191.0002-.0305.0045-.0316.0125-.0091.0635.4138.4486.3334.801C.8676-.6315.8468-.5654.8219-.4999.7319-.5955.6142-.6935.4948-.7519.2201-.8861.724-.4466.6781-.2055.5847-.0489.4687.1011.3388.2402.2547.1426.1327.0344.0087-.0263-.2168-.1364.1402.1827.1739.4044.1651.4126.1562.4208.1473.4289.0346.2775-.1669.0829-.3725-.0175-.7157-.1852-.086.364-.1435.6652-.4042.8556-.6752.9994-.9085 1.0722-1.5627 1.2766-1.0956 1.639-.5751 1.4601.3629 1.1377 1.2656-.2719 1.2277-.7707 1.1865-1.3132.7144-1.513.581-1.5115Z')
}

const renderOverrides = {
    petal: {
        normal: {
            default: {
                dist: 1,
                mainOffset: 0,
                offset: 0,
                xOffset: 0,
                yOffset: 0,
                xMainOffset: 0,
                yMainOffset: 0,
                mainSize: 1,
                size: 1,
                forceOverride: false,
                renderImage: null,
                renderCountOffset: 0,
            },
            Grapes: {
                0: {
                    dist: 3 / 5
                },
                8: {
                    mainSize: 6 / 8,
                    dist: 7 / 8
                },
                9: {
                    dist: 1
                },
            },
            Peas: {
                0: {
                    dist: 3 / 5
                },
                8: {
                    mainSize: 6 / 8,
                    dist: 7 / 8
                },
                9: {
                    dist: 1
                },
            },
            Faster: {
                7: {
                    dist: 2 / 3
                }
            },
            Oranges: {
                0: {
                    dist: 4 / 6,
                    customText: "Orange"
                },
                7: {
                    mainOffset: 0,
                    dist: 4.5 / 6,
                },
                12: {
                    mainSize: 1 / 2,
                    mainOffset: -Math.PI / 2
                }
            },
            Cactus: {
                6: {
                    forceOverride: true,
                    renderImage: './gfx/deteled.png',
                },
                7: {
                    forceOverride: true,
                    renderImage: null,
                    mainSize: 1
                },
                8: {
                    forceOverride: false,
                },
                12: {
                    dist: 5 / 8,
                }
            },
            Dahlia: {
                0: {
                    dist: 2 / 3
                }
            },
            Light: {
                1: {
                    dist: 2 / 3
                },
                5: {
                    dist: 3 / 4
                },
                8: {
                    mainSize: 7 / 8
                }
            },
            Pollen: {
                0: {
                    dist: 2 / 3
                },
                7: {
                    mainSize: 1 / 2,
                    dist: 1
                },
                8: {
                    mainSize: 2 / 5,
                    dist: 3 / 2
                },
                12: {
                    mainSize: 6 / 15,
                    dist: 2
                }
            },
            Stinger: {
                5: {
                    dist: 2 / 3
                },
                6: {
                    dist: 3 / 4,
                    offset: Math.PI
                },
                8: {
                    dist: 1,
                    mainSize: 7 / 8
                },
                9: {
                    offset: 0,
                    mainSize: 3 / 4
                },
                11: {
                    dist: 1
                },
                12: {
                    mainSize: 1 / 2
                }
            },
            Dandelion: {
                0: {
                    mainOffset: Math.PI / 3.3
                },
                5: {
                    mainOffset: 0,
                    dist: 2 / 3,
                    offset: Math.PI * 1 / 3
                },
                6: {
                    dist: 5 / 7,
                    offset: Math.PI * 1 / 2
                },
                7: {
                    mainSize: 3.5 / 4,
                    dist: 5.5 / 7,
                    offset: Math.PI / 2 * 1.25
                },
                8: {
                    offset: Math.PI * -2 / 3
                },
                10: {
                    dist: 1
                }
            },
            Missile: {
                0: {
                    mainOffset: Math.PI / 3,
                    mainSize: 7 / 10
                },
                7: {
                    mainSize: 1 / 2
                },
                12: {
                    mainSize: 2 / 5
                }
            },
            "Fire Missile": {
                0: {
                    mainOffset: Math.PI / 3,
                    mainSize: 7 / 10,
                    customText: "Missile"
                },
                7: {
                    mainSize: 1 / 2
                },
                12: {
                    mainSize: 2 / 5
                }
            },
            Square: {
                0: {
                    mainOffset: -Math.PI / 7.5
                }
            },
            Rice: {
                0: {
                    mainOffset: Math.PI / 4.5,
                },
                5: {
                    mainSize: 3 / 4
                },
                7: {
                    mainSize: 5 / 8
                }
            },
            Card: {
                0: {
                    mainOffset: -Math.PI / 3
                }
            },
            Web: {
                0: {
                    mainOffset: -Math.PI / 10 + Math.PI / 32,
                    mainSize: 8 / 7
                }
            },
            Sand: {
                0: {
                    dist: 2.825 / 4,
                    offset: -Math.PI / 8,
                }
            },
            Shell: {
                0: {
                    mainSize: 5 / 4
                },
                12: {
                    offset: Math.PI + Math.PI / 2,
                    dist: 1.3,
                    mainSize: 225 / 400,
                    xOffset: 3.25
                }
            },
            Claw: {
                0: {
                    mainSize: 5 / 4
                },
                12: {
                    mainSize: 25 / 40
                }
            },
            "Yin Yang": {
                0: {
                    mainSize: 6 / 4
                },
                12: {
                    mainSize: 1 / 2
                }
            },
            Bubble: {
                0: {
                    mainOffset: 3 * Math.PI / 4
                }
            },
            Leaf: {
                7: {
                    mainSize: 35 / 40
                },
                9: {
                    mainSize: 3 / 5,
                },
                12: {
                    mainSize: 125 / 200
                }
            },
            Corn: {
                0: {
                    mainSize: 5 / 4
                },
                9: {
                    mainSize: 1
                },
                12: {
                    mainSize: 35 / 70
                }
            },
            Wing: {
                7: {
                    mainSize: 3 / 4
                },
                12: {
                    mainSize: 25 / 40
                }
            },
            Honey: {
                0: {
                    mainSize: 7 / 5
                },
                8: {
                    mainSize: 1
                },
                10: {
                    mainSize: 55 / 70
                },
                11: {
                    mainSize: 45 / 70
                }
            },
            Pearl: {
                0: {
                    mainSize: 2 / 3
                }
            },
            "Third Eye": {
                0: {
                    mainSize: 5 / 4
                },
            },
            Egg: {
                0: {
                    mainSize: 5 / 4
                },
            },
            Fangs: {
                0: {
                    mainSize: 5 / 4
                },
            },
            Heavy: {
                0: {
                    mainSize: 655 / 800
                },
                12: {
                    mainSize: 1 / 2
                }
            },
            Compass: {
                0: {
                    mainOffset: -Math.PI / 4
                },
                10: {
                    mainOffset: 0
                },
                11: {
                    mainSize: 7 / 8
                }
            },
            "Dark Compass": {
                0: {
                    mainOffset: -Math.PI / 4,
                    customText: "Compass"
                },
                10: {
                    mainOffset: 0
                },
                11: {
                    mainSize: 7 / 8
                }
            },
            Rock: {
                7: {
                    renderImage: "https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg",
                },
                8: {
                    forceOverride: true,
                    renderImage: null,
                    mainSize: 1
                },
                9: {
                    forceOverride: false,
                },
                12: {
                    mainSize: 3 / 4
                }
            },
            Soil: {
                12: {
                    mainSize: 8 / 7,
                    dist: 25 / 40,
                    mainOffset: Math.PI / 3
                }
            },
            Trident: {
                6: {
                    forceOverride: true
                },
                7: {
                    forceOverride: false
                },
                14: {
                    forceOverride: true
                },
                15: {
                    forceOverride: true
                },
                16: {
                    forceOverride: false
                },
                17: {
                    forceOverride: true
                },
                18: {
                    forceOverride: true
                }
            },
            "Plastic Egg": {
                0: {
                    customText: "Egg",
                    mainSize: 5 / 4
                }
            },
            "Jellyfish Egg": {
                0: {
                    customText: "Egg",
                    mainSize: 5 / 4
                }
            },
            Jelly: {
                0: {
                    mainSize: 45 / 40
                },
                12: {
                    mainSize: 3 / 4
                }
            },
            "Waterlogged Compass": {
                0: {
                    mainOffset: -Math.PI / 4,
                    customText: "Compass"
                },
                10: {
                    mainOffset: 0
                },
                11: {
                    mainSize: 7 / 8
                }
            },
            Husk: {
                12: {
                    mainSize: 7 / 8
                }
            },
            Iris: {
                0: {
                    mainSize: 105 / 100
                },
                9: {
                    mainSize: 305 / 400
                }
            },
            Powder: {
                0: {
                    mainSize: 7 / 8
                }
            },
            Salt: {
                12: {
                    mainSize: 3 / 4
                }
            },
            Sponge: {
                0: {
                    mainSize: 35 / 30
                }
            },
            Ikea: {
                0: {
                    renderImage: 'https://archello.com/thumbs/images/2014/02/03/IKEA-Tampines.1506072620.5502.jpg?fit=crop&w=414&h=518',
                    mainSize: 1.25
                }
            },
            Thomas: {
                0: {
                    renderImage: "https://i.pinimg.com/originals/96/21/65/96216524958973ceffb8b7a2f29c9110.png"
                }
            },
            Mandible: {
                0: {
                    mainSize: 6 / 5
                }
            }
        },
        pvp: {
            default: {
                dist: 1,
                mainOffset: 0,
                offset: 0,
                xOffset: 0,
                yOffset: 0,
                xMainOffset: 0,
                yMainOffset: 0,
                mainSize: 1,
                size: 1,
                forceOverride: false,
                renderImage: null,
                renderCountOffset: 0,
            },
            Grapes: {
                0: {
                    dist: 3 / 5
                }
            },
            Peas: {
                0: {
                    dist: 3 / 5
                }
            },
            Faster: {
                7: {
                    dist: 2 / 3
                }
            },
            Oranges: {
                0: {
                    dist: 5 / 6,
                    customText: "Orange"
                },
                7: {
                    mainOffset: 0,
                    mainSize: 9 / 10
                },
                12: {
                    mainSize: 1 / 2,
                    mainOffset: -Math.PI / 2
                }
            },
            Cactus: {
                6: {
                    forceOverride: true,
                    renderImage: './gfx/deteled.png',
                },
                7: {
                    forceOverride: true,
                    renderImage: null,
                    mainSize: 1
                },
                8: {
                    forceOverride: false,
                },
                12: {
                    dist: 5 / 8,
                }
            },
            Dahlia: {
                0: {
                    dist: 2 / 3
                }
            },
            Light: {
                1: {
                    dist: 2 / 3
                },
                5: {
                    dist: 3 / 4
                },
                8: {
                    mainSize: 7 / 8
                }
            },
            Pollen: {
                0: {
                    dist: 2 / 3
                }
            },
            Dandelion: {
                0: {
                    mainOffset: Math.PI / 3.3
                }
            },
            Missile: {
                0: {
                    mainOffset: Math.PI / 3,
                    mainSize: 1 / 4
                }
            },
            "Fire Missile": {
                0: {
                    mainOffset: Math.PI / 3,
                    mainSize: 1 / 4,
                    customText: "Missile"
                }
            },
            Square: {
                0: {
                    mainOffset: -Math.PI / 7.5
                }
            },
            Rice: {
                0: {
                    mainOffset: Math.PI / 4.5
                },
                5: {
                    mainSize: 3 / 4
                },
                7: {
                    mainSize: 5 / 8
                }
            },
            Card: {
                0: {
                    mainOffset: -Math.PI / 3
                }
            },
            Web: {
                0: {
                    mainOffset: -Math.PI / 10 + Math.PI / 32,
                    mainSize: 8 / 7
                }
            },
            Sand: {
                0: {
                    dist: 2.825 / 4,
                    offset: -Math.PI / 8,
                }
            },
            Shell: {
                0: {
                    mainSize: 5 / 4
                }
            },
            Claw: {
                0: {
                    mainSize: 5 / 4
                },
                12: {
                    mainSize: 25 / 40
                }
            },
            "Yin Yang": {
                0: {
                    mainSize: 6 / 4
                },
                12: {
                    mainSize: 1 / 2
                }
            },
            Bubble: {
                0: {
                    mainOffset: 3 * Math.PI / 4
                }
            },
            Corn: {
                0: {
                    mainSize: 5 / 4
                },
                9: {
                    mainSize: 1
                },
                12: {
                    mainSize: 35 / 70
                }
            },
            Wing: {
                7: {
                    mainSize: 3 / 4
                },
                12: {
                    mainSize: 25 / 40
                }
            },
            Honey: {
                0: {
                    mainSize: 7 / 5
                },
            },
            Pearl: {
                0: {
                    mainSize: 2 / 3
                }
            },
            "Third Eye": {
                0: {
                    mainSize: 5 / 4
                },
            },
            Egg: {
                0: {
                    mainSize: 5 / 4
                },
            },
            Fangs: {
                0: {
                    mainSize: 5 / 4
                },
            },
            Heavy: {
                0: {
                    mainSize: 655 / 800
                }
            },
            Compass: {
                0: {
                    mainOffset: -Math.PI / 4
                }
            },
            "Dark Compass": {
                0: {
                    mainOffset: -Math.PI / 4,
                    customText: "Compass"
                }
            },
            Rock: {
                7: {
                    renderImage: "https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg",
                },
                8: {
                    forceOverride: true,
                    renderImage: null,
                    mainSize: 1
                },
                9: {
                    forceOverride: false,
                },
                12: {
                    mainSize: 3 / 4
                }
            },
            Soil: {
                12: {
                    mainSize: 8 / 7,
                    dist: 25 / 40,
                    mainOffset: Math.PI / 3
                }
            },
            Trident: {
                5: {
                    forceOverride: true
                },
                7: {
                    forceOverride: false
                },
                14: {
                    forceOverride: true
                },
                15: {
                    forceOverride: true
                },
                16: {
                    forceOverride: false
                },
                17: {
                    forceOverride: true
                },
                18: {
                    forceOverride: true
                }
            },
            "Plastic Egg": {
                0: {
                    customText: "Egg",
                    mainSize: 5 / 4
                }
            },
            "Jellyfish Egg": {
                0: {
                    customText: "Egg",
                    mainSize: 5 / 4
                }
            },
            Jelly: {
                0: {
                    mainSize: 45 / 40
                },
                12: {
                    mainSize: 3 / 4
                }
            },
            "Waterlogged Compass": {
                0: {
                    mainOffset: -Math.PI / 4,
                    customText: "Compass"
                }
            },
            Iris: {
                0: {
                    mainSize: 105 / 100
                }
            },
            Powder: {
                0: {
                    mainSize: 7 / 8
                }
            },
            Sponge: {
                0: {
                    mainSize: 35 / 30
                }
            },
            Ikea: {
                0: {
                    renderImage: 'https://archello.com/thumbs/images/2014/02/03/IKEA-Tampines.1506072620.5502.jpg?fit=crop&w=414&h=518',
                    mainSize: 1.25
                }
            },
            Thomas: {
                0: {
                    renderImage: "https://i.pinimg.com/originals/96/21/65/96216524958973ceffb8b7a2f29c9110.png"
                }
            },
            Leaf: {
                7: {
                    mainSize: 3 / 4
                },
                12: {
                    mainSize: 275 / 400
                }
            },
            Heavy: {
                0: {
                    mainSize: 655 / 800
                },
                12: {
                    mainSize: 3 / 5,
                }
            },
        }
    },
    enemies: {
        default: {
            offset: -Math.PI * 3 / 8,
            xOffset: 0,
            yOffset: 0,
            size: 3 / 4
        },
        Dandelion: {
            size: 3 / 10
        },
        "Queen Ant": {
            size: 2 / 5,
            xOffset: -7.5,
            yOffset: -7.5
        },
        "Queen Fire Ant": {
            size: 2 / 5,
            xOffset: -7.5,
            yOffset: -7.5
        },
        Centipede: {
            offset: -Math.PI / 4
        },
        "Evil Centipede": {
            offset: -Math.PI / 4
        },
        "Desert Centipede": {
            offset: -Math.PI / 4
        },
        "Evil Desert Centipede": {
            offset: -Math.PI / 4
        },
        Soil: {
            offset: 0,
        },
        Leech: {
            offset: 0,
            size: 1
        },
        Hornet: {
            size: 41 / 80,
            xOffset: 5,
            yOffset: 5
        },
        Bee: {
            size: 7 / 10,
            xOffset: 5,
            yOffset: 5
        },
        Spider: {
            size: 13 / 20
        },
        Ladybug: {
            size: 9 / 16
        },
        "Dark Ladybug": {
            size: 9 / 16
        },
        "Shiny Ladybug": {
            size: 9 / 16
        },
        "Ocean Ladybug": {
            size: 9 / 16
        },
        Rock: {
            size: 1 / 2
        },
        Cactus: {
            size: 1 / 2
        },
        Beetle: {
            size: 41 / 80,
            xOffset: 5,
            yOffset: 5
        },
        Scorpion: {
            size: 5 / 8
        },
        "Fire Ant Burrow": {
            size: 9 / 6
        },
        "Desert Moth": {
            size: 1 / 2,
            xOffset: -2.5,
            yOffset: -2.5
        },
        Sandstorm: {
            size: 1 / 2
        },
        Plastic: {
            size: 5 / 8
        },
        "Shiny Plastic": {
            size: 5 / 8
        },
        Jellyfish: {
            size: 4 / 9
        },
        Bubble: {
            size: 3 / 8
        },
        Crab: {
            size: 4 / 9
        },
        Starfish: {
            size: 4 / 9
        },
        "Sea Urchin": {
            size: 5 / 8
        },
        UrchinMissile: {
            size: 7 / 5
        },
        DandelionMissile: {
            size: 9 / 8,
            xOffset: -5,
            yOffset: -5
        },
        Missile: {
            size: 7 / 6
        },
        "Agar.io Cell": {
            size: 1 / 3,
            offset: 0
        },
        "1v1text": {
            offset: Math.PI / 2
        },
        "Square": {
            size: 1 / 2
        },
        "Pentagon": {
            size: 1 / 2
        }
    }
}

console.log(renderOverrides)

const renders = {
    petals: {
        Basic: (radius) => {
            ctx.lineWidth = radius / 3
            ctx.fillStyle = renderColors.white
            ctx.strokeStyle = renderColors.whiteBorder

            ctx.beginPath()
            ctx.arc(0, 0, radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        },
        Light: (radius) => {
            ctx.lineWidth = 3.25
            ctx.fillStyle = renderColors.white
            ctx.strokeStyle = renderColors.whiteBorder

            ctx.beginPath()
            ctx.arc(0, 0, radius, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        },
        Stinger: (radius) => {
            ctx.fillStyle = renderColors.dark
            ctx.strokeStyle = renderColors.darkBorder
            ctx.lineWidth = 10 / 3;

            ctx.beginPath();
            for (let i = 0; i <= 3; i++) {
                ctx.lineTo(Math.cos(i * Math.PI * 2 / 3) * radius, Math.sin(i * Math.PI * 2 / 3) * radius);
            }
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        Rose: (radius, rarity) => {
            ctx.lineWidth = 0.25
            ctx.fillStyle = renderColors.pink
            ctx.strokeStyle = renderColors.pinkBorder

            ctx.scale(radius, radius)
            //if (rarity < 12) {
            ctx.beginPath()
            ctx.arc(0, 0, 1, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
            // } else {
            //     ctx.beginPath()
            //     ctx.moveTo(0, -1)
            //     for (let i = 0; i < 3; i++) {
            //         ctx.arcTo(1.5, 0, 0, 1.25, 0.5)
            //         ctx.rotate(Math.PI * 2 / 3)
            //     }
            //     ctx.lineTo(0, -1)
            //     ctx.fill()
            //     ctx.stroke()
            //     ctx.closePath()
            // }
            ctx.scale(1 / radius, 1 / radius)
        },
        // Mandible: (radius) => {
        //     ctx.fillStyle = renderColors.darkRed
        //     ctx.strokeStyle = renderColors.darkRedBorder
        //     ctx.lineWidth = .25

        //     ctx.scale(radius, radius)
        //     ctx.beginPath()
        //     ctx.fill(paths.Mandible)
        //     ctx.stroke(paths.Mandible)
        //     ctx.closePath()
        //     ctx.scale(1 / radius, 1 / radius)
        // }
    },
    enemies: {
        Dandelion: (radius) => {
            ctx.scale(radius, radius)

            for (let i = 0, n = 10; i < n; i++) {
                ctx.rotate(i * Math.PI * 2 / n)
                ctx.translate(1.75, 0)
                enemyRenderMap.DandelionMissile({
                    render: {
                        radius: 1 / 2.5,
                        angle: 0,
                        time: 5000000,
                        lastX: -100,
                        lastY: -100,
                        x: 100,
                        y: 100
                    },
                    radius: 1,
                    lastTicksSinceLastDamaged: 1000,
                    ticksSinceLastDamaged: 1000,
                    rarity: 0
                })
                ctx.translate(-1.75, 0)
                ctx.rotate(-i * Math.PI * 2 / n)
            }

            enemyRenderMap.Dandelion({
                render: {
                    radius: 1,
                    angle: 0,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0
            })

            ctx.scale(1 / radius, 1 / radius)
        },
        Centipede: (radius) => {
            ctx.scale(radius, radius)

            ctx.translate(0, 0.25)
            enemyRenderMap.Centipede({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0,
                isHead: true
            })

            ctx.translate(0, 4 / 3)
            enemyRenderMap.Centipede({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0
            })
            ctx.translate(0, -4 / 3)
            ctx.translate(0, -0.25)

            ctx.scale(1 / radius, 1 / radius)
        },
        "Evil Centipede": (radius) => {
            ctx.scale(radius, radius)

            ctx.translate(0, 0.25)
            enemyRenderMap['Evil Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0,
                isHead: true
            })

            ctx.translate(0, 4 / 3)
            enemyRenderMap['Evil Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0
            })
            ctx.translate(0, -4 / 3)
            ctx.translate(0, -0.25)

            ctx.scale(1 / radius, 1 / radius)
        },
        "Desert Centipede": (radius) => {
            ctx.scale(radius, radius)

            ctx.translate(0, 0.25)
            enemyRenderMap['Desert Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0,
                isHead: true
            })

            ctx.translate(0, 4 / 3)
            enemyRenderMap['Desert Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0
            })
            ctx.translate(0, -4 / 3)
            ctx.translate(0, -0.25)

            ctx.scale(1 / radius, 1 / radius)
        },
        "Evil Desert Centipede": (radius) => {
            ctx.scale(radius, radius)

            ctx.translate(0, 0.25)
            enemyRenderMap['Evil Desert Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0,
                isHead: true
            })

            ctx.translate(0, 4 / 3)
            enemyRenderMap['Evil Desert Centipede']({
                render: {
                    radius: 2 / 3,
                    angle: -Math.PI / 2,
                    time: 5000000,
                    lastX: -100,
                    lastY: -100,
                    x: 100,
                    y: 100
                },
                radius: 1,
                lastTicksSinceLastDamaged: 1000,
                ticksSinceLastDamaged: 1000,
                rarity: 0
            })
            ctx.translate(0, -4 / 3)
            ctx.translate(0, -0.25)

            ctx.scale(1 / radius, 1 / radius)
        }
    }
}

if (flowrMod.YGGPLZ === true) {
    renderOverrides.petal.normal.Bud = renderOverrides.petal.pvp.Bud = {
        0: {
            customText: "Yggdrasil",
            xMainOffset: -1.25,
            mainSize: 6.5 / 6
        }
    }

    renders.petals.Bud = (radius) => {
        let innerColor = "#aa853f"
        let outerColor = "#876e36"

        ctx.scale(radius, radius)

        // outer color
        ctx.lineCap = 'round'
        ctx.strokeStyle = outerColor;
        ctx.fillStyle = outerColor;
        ctx.beginPath(); // stem
        ctx.moveTo(1.13, 0.54)
        ctx.quadraticCurveTo(1.20, 0.6, 1.16, 0.69)
        ctx.quadraticCurveTo(1.13, 0.8, 1.03, 0.81)
        ctx.quadraticCurveTo(-0.52, 0.14, -0.63, -1.13)
        ctx.lineTo(-0.56, -1.13)
        ctx.quadraticCurveTo(-0.1, 0.38, 1.13, 0.54)
        ctx.lineWidth = 0.4
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath(); // curvy leaf
        ctx.moveTo(0.72, 0.54)
        ctx.quadraticCurveTo(0.3, 0.97, -0.49, 0.13)
        ctx.quadraticCurveTo(-0.92, -0.44, -0.57, -0.98)
        ctx.quadraticCurveTo(-0.2, -1.01, 0.24, -0.8)
        ctx.quadraticCurveTo(1.31, -0.2, 0.72, 0.54)
        ctx.fill();
        ctx.closePath()

        ctx.beginPath(); // spines!1!!
        ctx.lineWidth = 0.4
        ctx.moveTo(0.97, -0.14);
        ctx.quadraticCurveTo(0.91, 0.24, 0.72, 0.54)
        ctx.moveTo(0.82, -0.47)
        ctx.quadraticCurveTo(0.78, -0.13, 0.61, 0.38)
        ctx.moveTo(0.66, -0.7)
        ctx.quadraticCurveTo(0.64, -0.38, 0.43, 0.26)
        ctx.moveTo(0.46, -0.79)
        ctx.quadraticCurveTo(0.42, -0.36, 0.22, 0.1)
        ctx.moveTo(0.26, -0.92)
        ctx.quadraticCurveTo(0.21, -0.59, 0.04, -0.06)
        ctx.moveTo(0.02, -0.97)
        ctx.quadraticCurveTo(0, -0.72, -0.14, -0.28)
        ctx.moveTo(-0.18, -1.04)
        ctx.quadraticCurveTo(-0.17, -0.83, -0.29, -0.47)
        ctx.moveTo(-0.38, -1.07)
        ctx.quadraticCurveTo(-0.35, -0.34, -0.74, -0.88)
        ctx.moveTo(-0.76, -0.59)
        ctx.quadraticCurveTo(-0.61, -0.49, -0.4, -0.46)
        ctx.moveTo(-0.78, -0.34)
        ctx.quadraticCurveTo(-0.61, -0.26, -0.3, -0.24)
        ctx.moveTo(-0.69, -0.06)
        ctx.quadraticCurveTo(-0.47, -0.04, -0.15, -0.09)
        ctx.moveTo(-0.65, 0.14)
        ctx.quadraticCurveTo(-0.47, 0.15, 0.05, 0.05)
        ctx.moveTo(-0.53, 0.33)
        ctx.quadraticCurveTo(-0.18, 0.32, 0.12, 0.2)
        ctx.quadraticCurveTo(-0.19, 0.31, 0.12, 0.20)
        ctx.moveTo(-0.35, 0.5)
        ctx.quadraticCurveTo(0.02, 0.47, 0.27, 0.35)
        ctx.moveTo(-0.08, 0.63)
        ctx.quadraticCurveTo(0.15, 0.6, 0.49, 0.47)
        ctx.moveTo(0.26, 0.72)
        ctx.quadraticCurveTo(0.5, 0.72, 0.72, 0.54)
        ctx.stroke();

        // inner color
        ctx.strokeStyle = innerColor;
        ctx.fillStyle = innerColor;
        ctx.beginPath(); // stem
        ctx.moveTo(1.13, 0.54)
        ctx.quadraticCurveTo(1.20, 0.6, 1.16, 0.69)
        ctx.quadraticCurveTo(1.13, 0.8, 1.03, 0.81)
        ctx.quadraticCurveTo(-0.52, 0.14, -0.63, -1.13)
        ctx.lineTo(-0.56, -1.13)
        ctx.quadraticCurveTo(-0.1, 0.38, 1.13, 0.54)
        ctx.lineWidth = 0.1
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.lineCap = 'square'
        ctx.beginPath(); // curvy leaf
        ctx.lineWidth = 0.1
        ctx.moveTo(0.72, 0.54)
        ctx.quadraticCurveTo(0.3, 0.97, -0.49, 0.13)
        ctx.quadraticCurveTo(-0.92, -0.44, -0.57, -0.98)
        ctx.quadraticCurveTo(-0.2, -1.01, 0.24, -0.8)
        ctx.quadraticCurveTo(1.31, -0.2, 0.72, 0.54)
        ctx.stroke();
        ctx.closePath()

        ctx.beginPath(); // spines!1!!
        ctx.lineWidth = 0.125
        ctx.moveTo(0.97, -0.14);
        ctx.quadraticCurveTo(0.91, 0.24, 0.72, 0.54)
        ctx.moveTo(0.82, -0.47)
        ctx.quadraticCurveTo(0.78, -0.13, 0.61, 0.38)
        ctx.moveTo(0.66, -0.7)
        ctx.quadraticCurveTo(0.64, -0.38, 0.43, 0.26)
        ctx.moveTo(0.46, -0.79)
        ctx.quadraticCurveTo(0.42, -0.36, 0.22, 0.1)
        ctx.moveTo(0.26, -0.92)
        ctx.quadraticCurveTo(0.21, -0.59, 0.04, -0.06)
        ctx.moveTo(0.02, -0.97)
        ctx.quadraticCurveTo(0, -0.72, -0.14, -0.28)
        ctx.moveTo(-0.18, -1.04)
        ctx.quadraticCurveTo(-0.17, -0.83, -0.29, -0.47)
        ctx.moveTo(-0.38, -1.07)
        ctx.quadraticCurveTo(-0.35, -0.34, -0.74, -0.88)
        ctx.moveTo(-0.76, -0.59)
        ctx.quadraticCurveTo(-0.61, -0.49, -0.4, -0.46)
        ctx.moveTo(-0.78, -0.34)
        ctx.quadraticCurveTo(-0.61, -0.26, -0.3, -0.24)
        ctx.moveTo(-0.69, -0.06)
        ctx.quadraticCurveTo(-0.47, -0.04, -0.15, -0.09)
        ctx.moveTo(-0.65, 0.14)
        ctx.quadraticCurveTo(-0.47, 0.15, 0.05, 0.05)
        ctx.moveTo(-0.53, 0.33)
        ctx.quadraticCurveTo(-0.18, 0.32, 0.12, 0.2)
        ctx.quadraticCurveTo(-0.19, 0.31, 0.12, 0.20)
        ctx.moveTo(-0.35, 0.5)
        ctx.quadraticCurveTo(0.02, 0.47, 0.27, 0.35)
        ctx.moveTo(-0.08, 0.63)
        ctx.quadraticCurveTo(0.15, 0.6, 0.49, 0.47)
        ctx.moveTo(0.26, 0.72)
        ctx.quadraticCurveTo(0.5, 0.72, 0.72, 0.54)
        ctx.stroke();
        ctx.lineCap = 'round'

        ctx.scale(1 / radius, 1 / radius)
    }
}

function getRenderOverride(type, rarity, mode = 'normal') {
    const data = structuredClone(renderOverrides.petal[mode].default)
    if (renderOverrides.petal[mode][type]) for (let i = 0; i <= Object.keys(renderOverrides.petal[mode][type])[Object.keys(renderOverrides.petal[mode][type]).length - 1]; i++) {
        if (renderOverrides.petal[mode][type][i] && i <= rarity) {
            for (let param of Object.keys(renderOverrides.petal[mode][type][i])) {
                data[param] = renderOverrides.petal[mode][type][i][param]
            }
        }
    }

    return data
}

function getEnemyRenderOverride(type) {
    const data = structuredClone(renderOverrides.enemies.default)
    if (!renderOverrides.enemies[type]) return data

    for (let param of Object.keys(renderOverrides.enemies[type])) {
        data[param] = renderOverrides.enemies[type][param]
    }
    return data
}

function gatherPcChanges(mode = 'normal') {
    const levels = {}
    for (let petalId of Object.keys(Descriptions.petals)) {
        if (mode == 'normal') {
            const petalStats = baseStats.petals[petalId]
            if (!petalStats.radius) petalStats.radius = baseStats.petals.default.radius
            levels[petalId] = [{
                radius: petalStats.radius,
                count: petalStats.petalLayout.length > 1 ? petalStats.petalLayout.length : petalStats.petalLayout[0].length,
                rarity: 0,
                render: getRenderOverride(petalId, 0, 'normal')
            }]
            for (let rarity = 0; rarity < baseStats.rarities.length; rarity++) {
                let override = undefined

                const changes = {}
                if (petalStats.override) if (Object.keys(petalStats.override).includes(rarity.toString())) override = petalStats.override[rarity]
                let render = getRenderOverride(petalId, rarity, 'normal')
                if (override) for (let param of [
                    'radius',
                    'petalLayout'
                ]) {
                    if (Object.keys(override).includes(param)) {
                        changes[param] = true
                    }
                }
                if (!(Object.keys(changes).length > 0) && render.forceOverride === false) continue
                const data = {
                    radius: levels[petalId][levels[petalId].length - 1].radius,
                    count: levels[petalId][levels[petalId].length - 1].count,
                    rarity,
                    render,
                }
                if (changes.radius === true) {
                    data.radius = override.radius
                }
                if (changes.petalLayout === true) {
                    data.count = override.petalLayout.length > 1 ? override.petalLayout.length : override.petalLayout[0].length
                }
                levels[petalId].push(data)
            }
        }
        if (mode == 'pvp') {
            if (!pregeneratedPvpStats) generatePvpStats()
            const petalStats = pregeneratedPvpStats.petals[petalId]
            levels[petalId] = [{
                radius: petalStats[0].radius,
                count: petalStats[0].petalLayout.length > 1 ? petalStats[0].petalLayout.length : petalStats[0].petalLayout[0].length,
                rarity: 0,
                render: getRenderOverride(petalId, 0, 'pvp')
            }]
            for (let rarity = 0; rarity < Object.keys(petalStats).length; rarity++) {
                if (rarity == 0) {
                    const data = {
                        radius: levels[petalId][levels[petalId].length - 1].radius,
                        count: levels[petalId][levels[petalId].length - 1].count,
                        rarity,
                        render: getRenderOverride(petalId, 0, 'pvp'),
                    }
                    levels[petalId].push(data)
                    continue;
                }

                const changes = {}

                for (let param of [
                    'radius',
                    'petalLayout'
                ]) {
                    if (petalStats[rarity][param] !== petalStats[rarity - 1][param]) {
                        changes[param] = true
                    }
                }

                let render = getRenderOverride(petalId, rarity, mode)

                if (!(Object.keys(changes).length > 0) && render.forceOverride === false) continue
                const data = {
                    radius: levels[petalId][levels[petalId].length - 1].radius,
                    count: levels[petalId][levels[petalId].length - 1].count,
                    rarity,
                    render,
                }
                if (changes.radius === true) {
                    data.radius = petalStats[rarity].radius
                }
                if (changes.petalLayout === true) {
                    data.count = petalStats[rarity].petalLayout.length > 1 ? petalStats[rarity].petalLayout.length : petalStats[rarity].petalLayout[0].length
                }
                levels[petalId].push(data)
            }
        }
    }
    return levels
}

function gatherEcChanges() {
    const data = {}
    for (let enemyId of Object.keys(Descriptions.enemies)) {
        const enemyStats = baseStats.enemies[enemyId]
        if (!enemyStats.radius) enemyStats.radius = baseStats.enemies.default.radius
        data[enemyId] = {
            radius: enemyStats.radius,
            override: getEnemyRenderOverride(enemyId)
        }
    }
    return data
}

function generatePcDisplays(quality = 100) {
    const changes = {
        normal: gatherPcChanges(),
        pvp: gatherPcChanges('pvp')
    }

    flowrMod.images.pcs = {
        normal: {
            normal: {},
            pvp: {}
        },
        rrolf: {
            normal: {},
            pvp: {}
        }
    }

    for (let renderMode of Object.keys(flowrMod.images.pcs)) {
        offset = 0.275
        if (renderMode == 'rrolf') offset = 0

        for (let type of Object.keys(changes)) {
            for (let petalId of Object.keys(changes[type])) {
                for (let changeId = 0; changeId < changes[type][petalId].length; changeId++) {
                    const data = changes[type][petalId][changeId]
                    const cache = new OffscreenCanvas(quality, quality)

                    const text = data.render.customText ? data.render.customText : petalId

                    if (petalRenderMap[petalId]) {

                        if (!data.render.renderImage) {

                            const rCtx = ctx
                            const textRatio = Math.min(1, ctx.measureText('Starfish').width / ctx.measureText(text).width)
                            ctx = cache.getContext('2d')

                            ctx.lineCap = 'round'
                            ctx.lineJoin = 'round'

                            ctx.translate(quality / 2 + data.render.xMainOffset, quality / (2 + offset) + data.render.yMainOffset)
                            ctx.scale(quality / 75 * data.render.mainSize, quality / 75 * data.render.mainSize)
                            ctx.rotate(data.render.mainOffset, data.render.mainOffset)

                            if (data.count > 1) {
                                for (let i = data.render.renderCountOffset; i < data.count + data.render.renderCountOffset; i++) {
                                    const angle = (i / data.count) * Math.PI * 2
                                    const x = data.render.dist * 15 * Math.cos(angle)
                                    const y = data.render.dist * 15 * Math.sin(angle)

                                    ctx.translate(x, y)
                                    ctx.scale(data.render.size, data.render.size)
                                    ctx.rotate(angle + data.render.offset)
                                    ctx.translate(data.render.xOffset, data.render.yOffset)

                                    if (!renders.petals[petalId]) {
                                        petalRenderMap[petalId]({
                                            radius: data.radius,
                                            lastTicksSinceLastDamaged: 1000,
                                            ticksSinceLastDamaged: 1000,
                                            rarity: data.rarity
                                        })
                                    } else {
                                        renders.petals[petalId](data.radius, data.rarity)
                                    }

                                    ctx.translate(-data.render.xOffset, -data.render.yOffset)
                                    ctx.rotate(-(angle + data.render.offset))
                                    ctx.scale(1 / data.render.size, 1 / data.render.size)
                                    ctx.translate(-x, -y)
                                }
                            } else {
                                if (!renders.petals[petalId]) {
                                    petalRenderMap[petalId]({
                                        radius: data.radius,
                                        lastTicksSinceLastDamaged: 1000,
                                        ticksSinceLastDamaged: 1000,
                                        rarity: data.rarity
                                    })
                                } else {
                                    renders.petals[petalId](data.radius, data.rarity)
                                }
                            }
                            ctx.rotate(-data.render.mainOffset, -data.render.mainOffset)
                            ctx.scale(1 / (quality / 75 * data.render.mainSize), 1 / (quality / 75 * data.render.mainSize))
                            ctx.translate(-(quality / 2 + data.render.xMainOffset), -(quality / (2 + offset) + data.render.yMainOffset))

                            ctx.textAlign = 'center'
                            ctx.textBaseline = 'middle'

                            ctx.strokeStyle = "#000000"
                            ctx.fillStyle = "#ffffff"
                            ctx.lineWidth = quality / 50 * textRatio
                            ctx.font = `900 ${quality / 5 * textRatio}px Ubuntu`

                            if (renderMode !== 'rrolf') {
                                ctx.strokeText(text, quality / 2, quality / 2 + quality / 4)
                                ctx.fillText(text, quality / 2, quality / 2 + quality / 4)
                            }

                            flowrMod.images.pcs[renderMode][type][`${petalId}${changeId}`] = {
                                image: cache,
                                rarity: data.rarity
                            }

                            ctx = rCtx
                        } else {
                            const img = new Image()
                            img.src = data.render.renderImage

                            img.onload = () => {

                                offset = 0.275
                                if (renderMode == 'rrolf') offset = 0

                                const rCtx = ctx
                                const textRatio = Math.min(1, ctx.measureText('Starfish').width / ctx.measureText(text).width)
                                ctx = cache.getContext('2d')

                                ctx.lineCap = 'round'
                                ctx.lineJoin = 'round'

                                ctx.translate(quality / 2 + data.render.xMainOffset, quality / (2 + offset) + data.render.yMainOffset)
                                ctx.scale(quality / 75 * data.render.mainSize, quality / 75 * data.render.mainSize)
                                ctx.rotate(data.render.mainOffset, data.render.mainOffset)

                                if (data.count > 1) {
                                    for (let i = data.render.renderCountOffset; i < data.count + data.render.renderCountOffset; i++) {
                                        const angle = (i / data.count) * Math.PI * 2
                                        const x = data.render.dist * 15 * Math.cos(angle)
                                        const y = data.render.dist * 15 * Math.sin(angle)

                                        ctx.translate(x + data.render.xOffset, y + data.render.yOffset)
                                        ctx.scale(data.render.size, data.render.size)
                                        ctx.rotate(angle + data.render.offset)

                                        ctx.scale(data.radius / (img.width / 2), data.radius / (img.height / 2))
                                        ctx.drawImage(img, -img.width / 2, -img.height / 2)
                                        ctx.scale(1 / (data.radius / (img.width / 2)), 1 / (data.radius / (img.height / 2)))

                                        ctx.rotate(-(angle + data.render.offset))
                                        ctx.scale(1 / data.render.size, 1 / data.render.size)
                                        ctx.translate(-(x + data.render.xOffset), -(y + data.render.yOffset))
                                    }
                                } else {
                                    ctx.scale(data.radius / (img.width / 2), data.radius / (img.height / 2))
                                    ctx.drawImage(img, -img.width / 2, -img.height / 2)
                                    ctx.scale(1 / (data.radius / (img.width / 2)), 1 / (data.radius / (img.height / 2)))
                                }

                                ctx.rotate(-data.render.mainOffset, -data.render.mainOffset)
                                ctx.scale(1 / (quality / 75 * data.render.mainSize), 1 / (quality / 75 * data.render.mainSize))
                                ctx.translate(-(quality / 2 + data.render.xMainOffset), -(quality / (2 + offset) + data.render.yMainOffset))

                                ctx.textAlign = 'center'
                                ctx.textBaseline = 'middle'

                                ctx.strokeStyle = "#000000"
                                ctx.fillStyle = "#ffffff"
                                ctx.lineWidth = quality / 50 * textRatio
                                ctx.font = `900 ${quality / 5 * textRatio}px Ubuntu`

                                if (renderMode !== 'rrolf') {
                                    ctx.strokeText(text, quality / 2, quality / 2 + quality / 4)
                                    ctx.fillText(text, quality / 2, quality / 2 + quality / 4)
                                }

                                flowrMod.images.pcs[renderMode][type][`${petalId}${changeId}`] = {
                                    image: cache,
                                    rarity: data.rarity
                                }

                                ctx = rCtx
                            }
                        }
                    }
                }
            }
        }
    }
}

function generateEnemyDisplays(quality = 100) {
    const changes = gatherEcChanges()

    flowrMod.images.ecs = {}

    // ctx.beginPath()
    // ctx.rect(0, 0, 500, 500)
    // ctx.globalAlpha = 0.5
    // ctx.fill()
    // ctx.globalAlpha = 1
    // ctx.closePath()

    for (let enemyId of Object.keys(changes)) {
        const data = changes[enemyId]
        const cache = new OffscreenCanvas(quality, quality)

        const rCtx = ctx
        ctx = cache.getContext('2d')

        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        if (enemyRenderMap[enemyId]) {
            ctx.translate(quality / 2 + data.override.xOffset, quality / 2 + data.override.yOffset)
            ctx.scale(quality / 75 * data.override.size, quality / 75 * data.override.size)
            ctx.rotate(data.override.offset, data.override.offset)
            if (!renders.enemies[enemyId]) {

                const renderData = {
                    render: {
                        radius: data.radius,
                        angle: data.override.offset,
                        time: 5000000,
                        lastX: -100,
                        lastY: -100,
                        x: 100,
                        y: 100
                    },
                    radius: data.radius,
                    lastTicksSinceLastDamaged: 1000,
                    ticksSinceLastDamaged: 1000,
                    rarity: 0,
                    isInEnemyBox: true
                }

                if (enemyDataMap[enemyId]) {
                    renderData.data = enemyDataMap[enemyId](renderData)
                }

                enemyRenderMap[enemyId](renderData)
            } else {
                renders.enemies[enemyId](data.radius, data.data)
            }
            ctx.rotate(-data.override.offset, -data.override.offset)
            ctx.scale(1 / (quality / 75 * data.override.size), 1 / (quality / 75 * data.override.size))
            ctx.translate(-(quality / 2 + data.override.xOffset), -(quality / 2 + data.override.yOffset))
        }


        ctx = rCtx

        flowrMod.images.ecs[`${enemyId}`] = {
            image: cache,
            rarity: data.rarity
        }
    }
}

generatePcDisplays()
generateEnemyDisplays()

flowrMod.functionStuffs = function functionStuffs() {
    if (flowrMod.betterBiomeMobs === true) {
        biomeEnemyMap.garden = ['Hornet', 'Bee', 'Centipede', 'Dandelion', 'Ladybug', 'Rock', 'Spider', 'Worker Ant', 'Baby Ant', 'Soldier Ant', 'Dark Ladybug', 'Queen Ant', 'Evil Centipede', 'Ant Burrow', 'Rock Tank', 'BossRose', "Soil"]
        biomeEnemyMap.desert = ['Scorpion', 'Fire Ant Burrow', 'Beetle', 'Desert Centipede', 'Shiny Ladybug', 'Fire Ant', 'Sandstorm', 'Cactus', 'Locust', 'Queen Fire Ant', 'Desert Moth', "Evil Desert Centipede"]
        biomeEnemyMap.ocean = ['Bubble', 'Shell', 'Jellyfish', 'Starfish', 'Leech', 'Crab', 'Sponge', 'Plastic', 'Sea Urchin', 'Ocean Ladybug']
        biomeEnemyMap['1v1'] = ['Agar.io Cell', '1v1text']
        biomeEnemyMap.Diep = ['Tank', 'Streamliner', 'Factory', 'Crasher', 'square', 'triangle', 'pentagon', 'triple shot', 'big pentagon', 'shooter of traps', 'twin', 'spawner of crashers', 'destroyer']
        biomeEnemyMap['Ladybug Biome'] = ['Poison Ladybug', 'Pink Ladybug', 'White Ladybug', 'Blue Ladybug', 'Brown Ladybug', 'Friendly Ladybug', 'Ladybug Nest', 'Inverted Ladybug']
        biomeEnemyMap['Soul Lands'] = ["Soul of the game", "Player soul", "Ladybug soul", "Ultra soul", "Soul spawner", "Dead Soul", "Fire soul", "Water soul", "The Death Soul", "The Light Soul", "The Star Soul", "Ice", "Smallest piece of ice", "Diamond soul", "Stinger Soul", "Soul trap", "Angry soul"]
        biomeEnemyMap.Rainforest = ["rf_Fly", "rf_Twig", "rf_Herculean Beetle", "rf_Termite", "rf_TermiteMound", "rf_Scarab", "rf_Mantis", "rf_MantisPea", "rf_Angelwing", "rf_Bee", "rf_termiteSpawner", "rf_woodChunk", "rf_Firewing", "rf_babyTermite", "rf_Bush", "rf_Rafflesia"]
        biomeEnemyMap.Fruit = ["cofffee bug", "apple beetle", "banana moth", "strawberry spider", "grape ant nest", "grape ant", "lemon hornet", "watermelon ladybug", "peach bumblebee", "pollen", "durian ant", "fruit basket"]
        biomeEnemyMap.Mansion = ["ghost spawner", "ghowost", "Grave", "Book", "Firefly", "nerd", "Zombie Bat", "Treasure", "Trapped Treasure", "Rat"]
        biomeEnemyMap.Sewers = ["Fly", "Trash", "Maggot", "Acid Bubble", "Sewer Spider", "Roach", "Sewer Moth", "Mosquito", "Sewer Rat"]
        biomeEnemyMap.Vegetable = ["cabbage centipede head", "eggplant bug", "tomato bug", "pimento beetle", "carrot fly", "pumpkin bug", "corn bug", "edamame bug", "potato", "white radish bug"]
    };
    if (flowrMod.betterEntityModels === true) {
        ladybugRender({
            type: "Ladybug",
            headColor: "#111111",
            bodyColor: "#eb4034",
            bodyBorderColor: "#be332a",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Dark Ladybug",
            headColor: "#111111",
            bodyColor: "#962921",
            bodyBorderColor: "#79211a",
            spotColor: "#be342a"
        })
        ladybugRender({
            type: "Shiny Ladybug",
            headColor: "#111111",
            bodyColor: "#ebeb34",
            bodyBorderColor: "#bebe2a",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Poison Ladybug",
            headColor: "#111111",
            bodyColor: "#ce76db",
            bodyBorderColor: "#995db8",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Pink Ladybug",
            headColor: "#111111",
            bodyColor: "#CB3A70",
            bodyBorderColor: "#9c3056",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "White Ladybug",
            headColor: "#111111",
            bodyColor: "#dedede",
            bodyBorderColor: "#a3a3a3",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Blue Ladybug",
            headColor: "#111111",
            bodyColor: "#4337eb",
            bodyBorderColor: "#2c30ba",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Brown Ladybug",
            headColor: "#111111",
            bodyColor: "#812d08",
            bodyBorderColor: "#6b2b00",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Friendly Ladybug",
            headColor: "#111111",
            bodyColor: "#eb4034",
            bodyBorderColor: "#be332a",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Inverted Ladybug",
            headColor: "#ffffff",
            bodyColor: "#41ccd5",
            bodyBorderColor: "#14bfcb",
            spotColor: "#ffffff"
        })
        ladybugRender({
            type: "watermelon ladybug",
            headColor: "#000000",
            bodyColor: "#25cb41",
            bodyBorderColor: "#1c9c31",
            spotColor: "#000000"
        })
        ladybugRender({
            type: "Ocean Ladybug",
            headColor: "#111111",
            bodyColor: "#2ae8e5",
            bodyBorderColor: "#22bbb9",
            spotColor: "#111111"
        })
        spiderRender({
            type: "Spider",
            bodyColor: "#4f412e",
            bodyBorderColor: "#403525",
            legColor: "#333333"
        })
        spiderRender({
            type: "Sewer Spider",
            bodyColor: "#2c3a27",
            bodyBorderColor: "#19291a",
            legColor: "#1b1e1a"
        })
        antRender({
            type: "Soldier Ant",
            bodyColor: "#555555",
            bodyBorderColor: "#454545",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: true,
            isBaby: false,
            isTermite: false,
        })
        antRender({
            type: "Worker Ant",
            bodyColor: "#555555",
            bodyBorderColor: "#454545",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: false,
            isBaby: false,
            isTermite: false,
        })
        antRender({
            type: "Baby Ant",
            bodyColor: "#555555",
            bodyBorderColor: "#454545",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: false,
            isBaby: true,
            isTermite: false,
        })
        antRender({
            type: "Fire Ant",
            bodyColor: "#a82a00",
            bodyBorderColor: "#882200",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: true,
            isBaby: false,
            isTermite: false,
        })
        antRender({
            type: "rf_soldierTermite",
            bodyColor: "#c7a037",
            bodyBorderColor: "#a1822f",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: true,
            isBaby: false,
            isTermite: true,
        })
        antRender({
            type: "rf_Termite",
            bodyColor: "#c7a037",
            bodyBorderColor: "#a1822f",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: false,
            isBaby: false,
            isTermite: true,
        })
        antRender({
            type: "rf_babyTermite",
            bodyColor: "#c7a037",
            bodyBorderColor: "#a1822f",
            pincerColor: "#292929",
            wingColor: "#ffffff",
            hasWings: false,
            isBaby: true,
            isTermite: true,
        })
        antRender({
            type: "grape ant",
            bodyColor: "#a46bd4",
            bodyBorderColor: "#7d519d",
            pincerColor: "#54376c",
            wingColor: "#ffffff",
            hasWings: true,
            isBaby: false,
            isTermite: false,
        })
        antRender({
            type: "Wood ant",
            bodyColor: "#642b0c",
            bodyBorderColor: "#4f240d",
            pincerColor: "#341409",
            wingColor: "#ffffff",
            hasWings: false,
            isBaby: false,
            isTermite: false,
        });
        sandstormRender({
            type: "Sandstorm",
            innerColor: "#d6ba36",
            middleColor: "#dfc85c",
            outerColor: "#ebda8e",
        })
    }
    if (flowrMod.helBeetle === true) {
        beetleRender({
            type: "Beetle",
            bodyColor: "#8f5db0",
            bodyBorderColor: "#764b90",
            easterEgg: true
        })
    }
    if (flowrMod.dwayne === true) {
        rockRender({
            type: "Rock",
            bodyColor: "#777777",
            bodyBorderColor: "#606060",
            easterEgg: true
        })
        rockPetalRender({
            type: "Rock",
            easterEgg: true
        })
    }
    if (flowrMod.dwayne === false) {
        rockPetalRender({
            type: "Rock",
            easterEgg: false
        })
    }
    if (flowrMod.bubblefish === true) {
        jellyfishRender({
            type: "Jellyfish",
            easterEgg: true
        })
    }
    if (flowrMod.carb === true) {
        crabRender({
            type: "Crab",
            easterEgg: true
        })
    }
    if (flowrMod.autoEnableDebug === true) {
        window.toRenderDebug = true
    }
    if (flowrMod.YGGPLZ === true) {
        petalRenderMap.Bud = (p) => {
            let innerColor = blendColor("#aa853f", '#FF0000', blendAmount(p));
            let outerColor = blendColor("#876e36", '#FF0000', blendAmount(p));
            if (checkForFirstFrame(p)) {
                innerColor = "#FFFFFF";
                outerColor = "#FFFFFF"
            }

            // outer color
            ctx.lineCap = 'round'
            ctx.strokeStyle = outerColor;
            ctx.fillStyle = outerColor;
            ctx.beginPath(); // stem
            ctx.moveTo(p.radius * 1.13, p.radius * 0.54)
            ctx.quadraticCurveTo(p.radius * 1.20, p.radius * 0.6, p.radius * 1.16, p.radius * 0.69)
            ctx.quadraticCurveTo(p.radius * 1.13, p.radius * 0.8, p.radius * 1.03, p.radius * 0.81)
            ctx.quadraticCurveTo(p.radius * -0.52, p.radius * 0.14, p.radius * -0.63, p.radius * -1.13)
            ctx.lineTo(p.radius * -0.56, p.radius * -1.13)
            ctx.quadraticCurveTo(p.radius * -0.1, p.radius * 0.38, p.radius * 1.13, p.radius * 0.54)
            ctx.lineWidth = p.radius * 0.4
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath(); // curvy leaf
            ctx.moveTo(p.radius * 0.72, p.radius * 0.54)
            ctx.quadraticCurveTo(p.radius * 0.3, p.radius * 0.97, p.radius * -0.49, p.radius * 0.13)
            ctx.quadraticCurveTo(p.radius * -0.92, p.radius * -0.44, p.radius * -0.57, p.radius * -0.98)
            ctx.quadraticCurveTo(p.radius * -0.2, p.radius * -1.01, p.radius * 0.24, p.radius * -0.8)
            ctx.quadraticCurveTo(p.radius * 1.31, p.radius * -0.2, p.radius * 0.72, p.radius * 0.54)
            ctx.fill();
            ctx.closePath()

            ctx.beginPath(); // spines!1!!
            ctx.lineWidth = p.radius * 0.4
            ctx.moveTo(p.radius * 0.97, p.radius * -0.14);
            ctx.quadraticCurveTo(p.radius * 0.91, p.radius * 0.24, p.radius * 0.72, p.radius * 0.54)
            ctx.moveTo(p.radius * 0.82, p.radius * -0.47)
            ctx.quadraticCurveTo(p.radius * 0.78, p.radius * -0.13, p.radius * 0.61, p.radius * 0.38)
            ctx.moveTo(p.radius * 0.66, p.radius * -0.7)
            ctx.quadraticCurveTo(p.radius * 0.64, p.radius * -0.38, p.radius * 0.43, p.radius * 0.26)
            ctx.moveTo(p.radius * 0.46, p.radius * -0.79)
            ctx.quadraticCurveTo(p.radius * 0.42, p.radius * -0.36, p.radius * 0.22, p.radius * 0.1)
            ctx.moveTo(p.radius * 0.26, p.radius * -0.92)
            ctx.quadraticCurveTo(p.radius * 0.21, p.radius * -0.59, p.radius * 0.04, p.radius * -0.06)
            ctx.moveTo(p.radius * 0.02, p.radius * -0.97)
            ctx.quadraticCurveTo(0, p.radius * -0.72, p.radius * -0.14, p.radius * -0.28)
            ctx.moveTo(p.radius * -0.18, p.radius * -1.04)
            ctx.quadraticCurveTo(p.radius * -0.17, p.radius * -0.83, p.radius * -0.29, p.radius * -0.47)
            ctx.moveTo(p.radius * -0.38, p.radius * -1.07)
            ctx.quadraticCurveTo(p.radius * -0.35, p.radius * -0.34, p.radius * -0.74, p.radius * -0.88)
            ctx.moveTo(p.radius * -0.76, p.radius * -0.59)
            ctx.quadraticCurveTo(p.radius * -0.61, p.radius * -0.49, p.radius * -0.4, p.radius * -0.46)
            ctx.moveTo(p.radius * -0.78, p.radius * -0.34)
            ctx.quadraticCurveTo(p.radius * -0.61, p.radius * -0.26, p.radius * -0.3, p.radius * -0.24)
            ctx.moveTo(p.radius * -0.69, p.radius * -0.06)
            ctx.quadraticCurveTo(p.radius * -0.47, p.radius * -0.04, p.radius * -0.15, p.radius * -0.09)
            ctx.moveTo(p.radius * -0.65, p.radius * 0.14)
            ctx.quadraticCurveTo(p.radius * -0.47, p.radius * 0.15, p.radius * 0.05, p.radius * 0.05)
            ctx.moveTo(p.radius * -0.53, p.radius * 0.33)
            ctx.quadraticCurveTo(p.radius * -0.18, p.radius * 0.32, p.radius * 0.12, p.radius * 0.2)
            ctx.quadraticCurveTo(p.radius * -0.19, p.radius * 0.31, p.radius * 0.12, p.radius * 0.20)
            ctx.moveTo(p.radius * -0.35, p.radius * 0.5)
            ctx.quadraticCurveTo(p.radius * 0.02, p.radius * 0.47, p.radius * 0.27, p.radius * 0.35)
            ctx.moveTo(p.radius * -0.08, p.radius * 0.63)
            ctx.quadraticCurveTo(p.radius * 0.15, p.radius * 0.6, p.radius * 0.49, p.radius * 0.47)
            ctx.moveTo(p.radius * 0.26, p.radius * 0.72)
            ctx.quadraticCurveTo(p.radius * 0.5, p.radius * 0.72, p.radius * 0.72, p.radius * 0.54)
            ctx.stroke();

            // inner color
            ctx.strokeStyle = innerColor;
            ctx.fillStyle = innerColor;
            ctx.beginPath(); // stem
            ctx.moveTo(p.radius * 1.13, p.radius * 0.54)
            ctx.quadraticCurveTo(p.radius * 1.20, p.radius * 0.6, p.radius * 1.16, p.radius * 0.69)
            ctx.quadraticCurveTo(p.radius * 1.13, p.radius * 0.8, p.radius * 1.03, p.radius * 0.81)
            ctx.quadraticCurveTo(p.radius * -0.52, p.radius * 0.14, p.radius * -0.63, p.radius * -1.13)
            ctx.lineTo(p.radius * -0.56, p.radius * -1.13)
            ctx.quadraticCurveTo(p.radius * -0.1, p.radius * 0.38, p.radius * 1.13, p.radius * 0.54)
            ctx.lineWidth = p.radius * 0.1
            ctx.stroke();
            ctx.fill();
            ctx.closePath();

            ctx.lineCap = 'square'
            ctx.beginPath(); // curvy leaf
            ctx.lineWidth = p.radius * 0.1
            ctx.moveTo(p.radius * 0.72, p.radius * 0.54)
            ctx.quadraticCurveTo(p.radius * 0.3, p.radius * 0.97, p.radius * -0.49, p.radius * 0.13)
            ctx.quadraticCurveTo(p.radius * -0.92, p.radius * -0.44, p.radius * -0.57, p.radius * -0.98)
            ctx.quadraticCurveTo(p.radius * -0.2, p.radius * -1.01, p.radius * 0.24, p.radius * -0.8)
            ctx.quadraticCurveTo(p.radius * 1.31, p.radius * -0.2, p.radius * 0.72, p.radius * 0.54)
            ctx.stroke();
            ctx.closePath()

            ctx.beginPath(); // spines!1!!
            ctx.lineWidth = p.radius * 0.125
            ctx.moveTo(p.radius * 0.97, p.radius * -0.14);
            ctx.quadraticCurveTo(p.radius * 0.91, p.radius * 0.24, p.radius * 0.72, p.radius * 0.54)
            ctx.moveTo(p.radius * 0.82, p.radius * -0.47)
            ctx.quadraticCurveTo(p.radius * 0.78, p.radius * -0.13, p.radius * 0.61, p.radius * 0.38)
            ctx.moveTo(p.radius * 0.66, p.radius * -0.7)
            ctx.quadraticCurveTo(p.radius * 0.64, p.radius * -0.38, p.radius * 0.43, p.radius * 0.26)
            ctx.moveTo(p.radius * 0.46, p.radius * -0.79)
            ctx.quadraticCurveTo(p.radius * 0.42, p.radius * -0.36, p.radius * 0.22, p.radius * 0.1)
            ctx.moveTo(p.radius * 0.26, p.radius * -0.92)
            ctx.quadraticCurveTo(p.radius * 0.21, p.radius * -0.59, p.radius * 0.04, p.radius * -0.06)
            ctx.moveTo(p.radius * 0.02, p.radius * -0.97)
            ctx.quadraticCurveTo(0, p.radius * -0.72, p.radius * -0.14, p.radius * -0.28)
            ctx.moveTo(p.radius * -0.18, p.radius * -1.04)
            ctx.quadraticCurveTo(p.radius * -0.17, p.radius * -0.83, p.radius * -0.29, p.radius * -0.47)
            ctx.moveTo(p.radius * -0.38, p.radius * -1.07)
            ctx.quadraticCurveTo(p.radius * -0.35, p.radius * -0.34, p.radius * -0.74, p.radius * -0.88)
            ctx.moveTo(p.radius * -0.76, p.radius * -0.59)
            ctx.quadraticCurveTo(p.radius * -0.61, p.radius * -0.49, p.radius * -0.4, p.radius * -0.46)
            ctx.moveTo(p.radius * -0.78, p.radius * -0.34)
            ctx.quadraticCurveTo(p.radius * -0.61, p.radius * -0.26, p.radius * -0.3, p.radius * -0.24)
            ctx.moveTo(p.radius * -0.69, p.radius * -0.06)
            ctx.quadraticCurveTo(p.radius * -0.47, p.radius * -0.04, p.radius * -0.15, p.radius * -0.09)
            ctx.moveTo(p.radius * -0.65, p.radius * 0.14)
            ctx.quadraticCurveTo(p.radius * -0.47, p.radius * 0.15, p.radius * 0.05, p.radius * 0.05)
            ctx.moveTo(p.radius * -0.53, p.radius * 0.33)
            ctx.quadraticCurveTo(p.radius * -0.18, p.radius * 0.32, p.radius * 0.12, p.radius * 0.2)
            ctx.quadraticCurveTo(p.radius * -0.19, p.radius * 0.31, p.radius * 0.12, p.radius * 0.20)
            ctx.moveTo(p.radius * -0.35, p.radius * 0.5)
            ctx.quadraticCurveTo(p.radius * 0.02, p.radius * 0.47, p.radius * 0.27, p.radius * 0.35)
            ctx.moveTo(p.radius * -0.08, p.radius * 0.63)
            ctx.quadraticCurveTo(p.radius * 0.15, p.radius * 0.6, p.radius * 0.49, p.radius * 0.47)
            ctx.moveTo(p.radius * 0.26, p.radius * 0.72)
            ctx.quadraticCurveTo(p.radius * 0.5, p.radius * 0.72, p.radius * 0.72, p.radius * 0.54)
            ctx.stroke();
            ctx.lineCap = 'round'
        }

        Descriptions.petals.Bud = `A dried leaf from the Yggdrasil tree.
Rumored to be able to bring the fallen back to life.`
    }
    if (flowrMod.permanentStreak === true && streakMenu.showType === 'timer') {
        streakMenu.visible = true
        streakMenu.timer = 1000
    }
};

renderHitbox = function renderHitbox({ x, y, radius, rarity = 0 }) {
    if (flowrMod.hitbox === true) {
        if (rarity === 'flower') {
            ctx.strokeStyle = '#0000ff'
        } else if (rarity === 'boss') {
            ctx.strokeStyle = `hsl(${(time / 10) % 360}, 30%, 60%)`
        } else {
            ctx.strokeStyle = Colors.rarities[rarity].hitbox;
        }
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }
};

enemyRenderMapText = function enemyRenderMapText(e, renderHp) {
    if (renderHp === true) {
        if (flowrMod.showRarity === true) {
            renderHpBar({ // we've already translated to enemy renderX and renderY
                x: 0,
                y: 0,
                radius: e.render.radius * 0.8,
                hp: e.render.hp,
                maxHp: e.maxHp,
                beforeStreakHp: e.render.beforeStreakHp,
                mob: true,
                rarity: e.rarity,
                team: e.team
            }, e);
        } else {
            renderHpBar({ // we've already translated to enemy renderX and renderY
                x: 0,
                y: 0,
                radius: e.render.radius * 0.8,
                hp: e.render.hp,
                maxHp: e.maxHp,
                beforeStreakHp: e.render.beforeStreakHp,
                team: e.team
            }, e);
        }
    }
    /*renderHitbox({
        x: 0,
        y: 0,
        radius: e.render.radius,
        rarity: e.rarity,
    })*/
    if (window.damageCounter) {
        renderDamageCounter({
            radius: e.render.radius,
            timeAlive: e.ticksSinceLastDamaged,
            totalDamage: e.damageCount,
        })
    }
}

let topPetals = {}
let prevLoadout = {}

let magnetRange = { "color": "", "range": 0 };
let eyeRange = { "color": "", "range": 0 };

function resetRange() {
    topPetals = menuInventory.topPetalContainers
    prevLoadout = {}
    magnetRange = { "color": "", "range": 0 };
    eyeRange = { "color": "", "range": 0 };

    for (let i = 0; 10 > i; i++) {
        if (topPetals[i] !== undefined) {
            if (topPetals[i].type === 'Magnet') {
                //console.log(topPetals[i].type, topPetals[i].petalStats.range)
                if (topPetals[i].petalStats.range > magnetRange.range) {
                    magnetRange.range = topPetals[i].petalStats.range
                    //magnetRange.color = Colors.rarities[topPetals[i].rarity].color
                }
            } else if (topPetals[i].type === 'Third Eye') {
                //console.log(topPetals[i].type, topPetals[i].petalStats.extraRange)
                if (topPetals[i].petalStats.extraRange > eyeRange.range) {
                    eyeRange.range = topPetals[i].petalStats.extraRange
                    //eyeRange.color = Colors.rarities[topPetals[i].rarity].border
                }
            }
            prevLoadout[i] = menuInventory.topPetalContainers[i]
        }
    }
}

flowrMod.renderRanges = function renderRanges() {
    if (flowrMod.ranges === true) {
        if (menuInventory.topPetalContainers !== prevLoadout) {
            resetRange();
        }
        if (window.state === 'game' && room.flowers[window.selfId]) {
            let prevThickness = ctx.lineWidth
            ctx.lineWidth = 5 * renderFov
            ctx.strokeStyle = "#FF000050";//eyeRange.color;
            ctx.beginPath();
            ctx.arc(canvas.w / 2, canvas.h / 2, room.flowers[window.selfId].radius - 25 + Math.max(attackPetalDistance, attackPetalDistance * eyeRange.range) * renderFov, 0, Math.PI * 2)
            ctx.stroke();
            ctx.closePath();
            if (magnetRange.range != 0) {
                ctx.strokeStyle = "#0000FF50";//magnetRange.color;
                ctx.beginPath();
                ctx.arc(canvas.w / 2, canvas.h / 2, room.flowers[window.selfId].radius + (magnetRange.range / 4) * renderFov, 0, Math.PI * 2)
                ctx.stroke();
                ctx.closePath();
            }
            ctx.lineWidth = prevThickness
        }
    }
}

resetRange();

renderHpBar = function renderHpBar({ x, y, radius, hp, maxHp, beforeStreakHp, givenAlpha, flowerName, flowerUsername, rarity, mob, shield, offset = false, barLength = 1, team }, entity = { fadeState: undefined, fadeTime: 0, lastHp: hp }) {
    // fadeout
    // TODO: define these params on the entities
    if (entity.fadeState === undefined) {
        if (Math.ceil(entity.hp) === maxHp) {
            if (flowrMod.alwaysShowHp === true) {
                entity.fadeState = 'fadein';
                entity.fadeTime = -220;
            } else {
                entity.fadeState = 'invisible';
                entity.fadeTime = -220;
            }
        } else {
            entity.fadeTime = time;
            entity.fadeState = 'fadeIn';
        }
    } else if (Math.ceil(entity.hp) === maxHp + 1) {
        entity.fadeState = 'invisible';
        entity.fadeTime = -220;
    }
    if (entity.lastHp === undefined) {
        entity.lastHp = entity.hp;
    }

    let fadeAlphaMult = 1;

    // setting fadeState
    if (entity.dead !== true) {
        // if(entity.petals !== undefined)console.log(entity.hp, entity.lastHp);
        if (Math.ceil(entity.lastHp) < maxHp && Math.ceil(entity.hp) === maxHp) {
            entity.fadeTime = time;
            entity.fadeState = 'fadeOut';
        } else if (Math.ceil(entity.lastHp) === maxHp && Math.ceil(entity.hp) < maxHp) {
            entity.fadeTime = time;
            entity.fadeState = 'fadeIn';
        }
    }

    entity.lastShield = entity.shield;
    entity.lastHp = entity.hp;

    toResetFadeState = false;
    if (givenAlpha) {
        if (givenAlpha > 0) {
            toResetFadeState = entity.fadeState;
            entity.fadeState = "visible";
        }
    }
    if (entity.fadeState === 'fadeOut') {
        fadeAlphaMult = 1 - (time - entity.fadeTime) / 180;
        // if(entity.petals !== undefined){console.log((time - entity.fadeTime)/4000);}
        if (fadeAlphaMult < 0) {
            fadeAlphaMult = 0;
            entity.fadeState = 'invisible';
        }
    } else if (entity.fadeState === 'fadeIn') {
        fadeAlphaMult = (time - entity.fadeTime) / 180;
        if (fadeAlphaMult > 1) {
            fadeAlphaMult = 1;
            entity.fadeState = 'visible';
        }
    } else if (entity.fadeState === 'invisible') {
        return;
    }

    if (entity.dead === true) fadeAlphaMult *= ((10 - entity.deadAnimationTimer) / 166) ** 3;

    if (givenAlpha) {
        fadeAlphaMult = givenAlpha;
        // console.log(givenAlpha)
    }
    const barDimensions = {
        w: ((radius / 25) ** 1.2 * 25 * 3.2 + .33) * barLength,
        h: (radius / 25) ** 1.2 * 25 * 0.39 + .33,
        borderRadius: (radius / 25) ** 1.2 * 25 * 0.25,
        innerPadding: (radius / 25) ** 1.05 * 1.8 - .1
    }

    if (mob === true) { //the funny outline
        ctx.fillStyle = Colors.rarities[rarity].color;
        ctx.beginPath();
        const paddingMult = -1.5;
        ctx.roundRect(x - barDimensions.w / 2 + barDimensions.innerPadding * paddingMult, y + radius * 1.775 + barDimensions.innerPadding * paddingMult, barDimensions.w - barDimensions.borderRadius * 1.5 + barDimensions.borderRadius * 1.5 - barDimensions.innerPadding * 2 * paddingMult, barDimensions.h - barDimensions.innerPadding * paddingMult * 2, barDimensions.borderRadius * barDimensions.h / (barDimensions.h + barDimensions.innerPadding * paddingMult * 2));
        ctx.fill();
        ctx.closePath();
    }

    ctx.globalAlpha = fadeAlphaMult;
    hp = Math.max(hp, 0);
    beforeStreakHp = Math.max(beforeStreakHp, 0);
    ctx.fillStyle = /*isEnemy ? '#131315' : */'#333333';
    ctx.beginPath();
    ctx.roundRect(x - barDimensions.w / 2, y + radius * 1.775, barDimensions.w, barDimensions.h, barDimensions.borderRadius);
    ctx.fill();
    ctx.closePath();

    if (flowerName !== undefined && entity.id !== window.selfId) {

        ctx.globalAlpha = 1;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.font = `900 22px Ubuntu`;// rendering name
        if (window.usernames === true) {
            ctx.strokeText(flowerName, x, y - radius * 2.75 + barDimensions.h + 2);
            ctx.fillText(flowerName, x, y - radius * 2.75 + barDimensions.h + 2);
            ctx.font = `900 10px Ubuntu`;// rendering username
            ctx.fillStyle = '#bbbbbb';
            ctx.strokeText(flowerUsername, x, y - radius * 2 + barDimensions.h + 2);
            ctx.fillText(flowerUsername, x, y - radius * 2 + barDimensions.h + 2);
        } else {
            ctx.strokeText(flowerName, x, y - radius * 2.375 + barDimensions.h + 2);
            ctx.fillText(flowerName, x, y - radius * 2.375 + barDimensions.h + 2);
        }
    }

    if (beforeStreakHp < maxHp / 10) {
        ctx.globalAlpha = Math.max(0, hp * .95 / (maxHp / 10) + 0.05) * fadeAlphaMult;
    }
    // // red stuff
    // ctx.globalAlpha *= 0.9;
    if (beforeStreakHp > 0) {
        ctx.fillStyle = '#dd3434'//'#ff0000'
        ctx.beginPath();
        const paddingMult = 1.4;
        ctx.roundRect(x - barDimensions.w / 2 + barDimensions.innerPadding * paddingMult, y + radius * 1.775 + barDimensions.innerPadding * paddingMult, (barDimensions.w - barDimensions.borderRadius * 1.5) * Math.min(1, beforeStreakHp / maxHp) + barDimensions.borderRadius * 1.5 - barDimensions.innerPadding * 2 * paddingMult, barDimensions.h - barDimensions.innerPadding * paddingMult * 2, barDimensions.borderRadius * barDimensions.h / (barDimensions.h + barDimensions.innerPadding * 2));
        ctx.fill();
        ctx.closePath();
    }


    ctx.globalAlpha = fadeAlphaMult;
    if (hp < maxHp / 10) {
        ctx.globalAlpha = Math.max(0, hp * .95 / (maxHp / 10) + 0.05) * fadeAlphaMult;
    }

    if (hp > 0) {
        // green "normal" part of the hp bar
        ctx.fillStyle = /*isEnemy ? '#6df12b' : */'#75dd34'
        if (team == "flower") {
            ctx.fillStyle = "#b5aa31"
        }
        ctx.beginPath();
        ctx.roundRect(x - barDimensions.w / 2 + barDimensions.innerPadding, y + radius * 1.775 + barDimensions.innerPadding, (barDimensions.w - barDimensions.borderRadius * 1.5) * Math.min(1, hp / maxHp) + barDimensions.borderRadius * 1.5 - barDimensions.innerPadding * 2, barDimensions.h - barDimensions.innerPadding * 2, barDimensions.borderRadius * barDimensions.h / (barDimensions.h + barDimensions.innerPadding * 2));
        ctx.fill();
        ctx.closePath();
    }
    if (shield) {
        if (shield > maxHp * 0.005) {
            ctx.fillStyle = /*isEnemy ? '#6df12b' : */'white'
            ctx.beginPath();

            ctx.roundRect(x - barDimensions.w / 2 + barDimensions.innerPadding, y + radius * 1.805 + barDimensions.innerPadding, (barDimensions.w - barDimensions.borderRadius * 1.5) * Math.min(1, shield / maxHp) + barDimensions.borderRadius * 1.5 - barDimensions.innerPadding * 2, barDimensions.h - barDimensions.innerPadding * 3, barDimensions.borderRadius * barDimensions.h / (barDimensions.h + barDimensions.innerPadding * 3));
            ctx.fill();
            ctx.closePath();
        }
    }

    ctx.globalAlpha = 1;

    if (flowrMod.numHP === true) { // credits to rog and aether for the idea!
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.font = `900 ${radius / 3}px Ubuntu`
        ctx.lineWidth = radius / 15

        ctx.strokeText(`${formatAmountHighPrecision(Math.round(hp * 1000) / 1000)}/${formatAmountHighPrecision(Math.round(maxHp * 1000) / 1000)} (${Math.round(hp / maxHp * 1000) / 10}%)`, x + (offset === true ? radius * 3.75 : 0), y + radius * 1.775 + barDimensions.innerPadding + (barDimensions.h - barDimensions.innerPadding * 2) / 2)
        ctx.fillText(`${formatAmountHighPrecision(Math.round(hp * 1000) / 1000)}/${formatAmountHighPrecision(Math.round(maxHp * 1000) / 1000)} (${Math.round(hp / maxHp * 1000) / 10}%)`, x + (offset === true ? radius * 3.75 : 0), y + radius * 1.775 + barDimensions.innerPadding + (barDimensions.h - barDimensions.innerPadding * 2) / 2)
    }

    if (toResetFadeState !== false) {
        entity.fadeState = toResetFadeState;
    }
}

renderGame = function renderGame(dt) {
    if ((window.selfId === null || room.flowers[window.selfId] === undefined) && window.isDead !== true) {
        if (window.state === 'disconnected' && typeof biomeManager !== 'undefined') {
            const {
                ratio,
                last,
                current,
                direction
            } = biomeManager.getCurrentBiomeData();

            ctx.fillStyle = Colors.biomes[current].background;
            ctx.strokeStyle = Colors.biomes[current].grid;
        } else if (room && typeof Colors !== 'undefined') {
            ctx.fillStyle = Colors.biomes[room.biome].background;
            ctx.strokeStyle = Colors.biomes[room.biome].grid;
        } else {
            ctx.fillStyle = "white";
            ctx.strokeStyle = "#1c8c54"
        }
        ctx.fillRect(0, 0, canvas.w, canvas.h);

        if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
            timeOffset = (-time / 20) % 50;
        } else {
            timeOffset = (-time / 20) % 325
        }

        ctx.lineWidth = 2;
        ctx.globalAlpha = 1;
        if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
            for (let x = timeOffset - ctx.lineWidth; x <= canvas.w + ctx.lineWidth; x += tileSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.h);
                ctx.stroke();
                ctx.closePath();
            }
        }

        if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
            for (let y = -timeOffset - ctx.lineWidth; y <= canvas.h + ctx.lineWidth; y += tileSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.w, y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        ctx.globalAlpha = 1;

        if (flowrMod.detailedBackgrounds === true && flowrMod.images[biomeManager.currentBiome] !== undefined) {
            for (let i = 0; i < Math.ceil(canvas.w / 325) + 1; i++) {
                for (let j = 0; j < Math.ceil(canvas.h / 325) + 1; j++) {
                    ctx.drawImage(flowrMod.images[biomeManager.currentBiome], (325 * (i)) + timeOffset, (325 * (j - 1)) - timeOffset, 325, 325)
                }
            }
        }

        renderMenuEnemies();

        // renderChatMessages();

        renderConnectingText();
        return;
    } else {
        menuEnemies = [];
        connectingTextSizeMult = 1;
    }

    ctx.fillStyle = Colors.biomes[room.biome].background;
    ctx.fillRect(0, 0, canvas.w, canvas.h);

    const me = window.isDead ? (() => {
        let closestFlower = null;
        let lowestId = 1000;
        for (let id in room.flowers) {
            if (id < lowestId) {
                lowestId = id;
                closestFlower = room.flowers[id];
            }
        }
        return closestFlower === null ? {
            render: {
                headX: 0,
                headY: 0,
                x: 0,
                y: 0
            }
        } : closestFlower;
    })() : room.flowers[window.selfId];

    if (window.isDead !== true) {
        me.updateInterpolate();
    } else {
        petalReloadData = {};
        petalHpData = {};
    }

    // wtf we already do this in input.js??
    // if (time > lastSentInput + minimumInputTime){
    // 	if (!arrayEquals(latestInput, previousInput)){
    // 		send(latestInput);
    // 		previousInput = window.structuredClone(latestInput);
    // 		lastSentInput = time;// window.structuredclone
    // 	}
    // }

    renderFov = interpolate(renderFov, fov, 0.04);

    //window.camera = {x: (room.flowers[window.selfId] ?? {render: {headX: 'pass'}}).render.headX, y: (room.flowers[window.selfId] ?? {render: {headY: 0}}).render.headY};
    window.camera = {
        x: me.render.headX,
        y: me.render.headY
    }

    ctx.lineWidth = canvas.w * 2 + canvas.h * 2;
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.globalAlpha = 0.08;
    ctx.arc(canvas.w / 2 - me.render.headX * renderFov, canvas.h / 2 - me.render.headY * renderFov, room.radius * renderFov + ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    ctx.globalAlpha = 1;

    let tileOffset = {}

    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        tileOffset = { x: (-me.render.headX + canvas.w / 2 / renderFov) % tileSize, y: (-me.render.headY + canvas.h / 2 / renderFov) % tileSize };
    } else {
        tileOffset = { x: (-me.render.headX + canvas.w / 2 / renderFov) % 1000 * renderFov, y: (-me.render.headY + canvas.h / 2 / renderFov) % 1000 * renderFov };
    }

    ctx.strokeStyle = Colors.biomes[room.biome].grid;
    ctx.lineWidth = renderFov;
    ctx.globalAlpha = 1;

    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        for (let x = (tileOffset.x - ctx.lineWidth) * renderFov; x <= canvas.w + ctx.lineWidth; x += tileSize * renderFov) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.h);
            ctx.stroke();
            ctx.closePath();
        }
    }

    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        for (let y = (tileOffset.y - ctx.lineWidth) * renderFov; y <= canvas.h + ctx.lineWidth; y += tileSize * renderFov) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.w, y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    ctx.globalAlpha = 1;

    if (flowrMod.detailedBackgrounds === true && flowrMod.images[biomeManager.currentBiome] !== undefined) {
        for (let i = 0; i < Math.ceil(canvas.w / (1000 * renderFov)) + 1; i++) {
            for (let j = 0; j < Math.ceil(canvas.h / (1000 * renderFov)) + 1; j++) {
                ctx.drawImage(flowrMod.images[biomeManager.currentBiome], ((1000 * renderFov) * (i - 1)) + tileOffset.x, ((1000 * renderFov) * (j - 1)) + tileOffset.y, (1000 * renderFov), (1000 * renderFov))
            }
        }
        if (biomeManager.currentBiome == 2) {

        }
        ctx.lineWidth = canvas.w * 2 + canvas.h * 2;
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.globalAlpha = 0.08;
        ctx.arc(canvas.w / 2 - me.render.headX * renderFov, canvas.h / 2 - me.render.headY * renderFov, room.radius * renderFov + ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.globalAlpha = 1;


    // const camera = {x: canvas.w/2-me.render.headX, y: canvas.h/2-me.render.headY};

    if (window.camera.x !== 'pass') {
        ctx.translate(canvas.w / 2 - camera.x * renderFov, canvas.h / 2 - camera.y * renderFov);
    }
    ctx.scale(renderFov, renderFov);

    if (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1' && window.inMainPvpRoom !== true) {
        if (Object.keys(room.flowers).length >= 2) {
            window.canWinPvp = true;
        }
        else if (Object.keys(room.flowers).length === 1 && window.isDead !== true && window.canWinPvp) {
            window.hasWonPvp = true;
            delete window.canWinPvp;
        }
    }
    if (window.hasWonPvp === true) {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.globalAlpha = 0.3;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = room.radius * 1.55 / 20;
        ctx.font = `600 ${room.radius * 1.55}px Ubuntu`;
        const metrics = ctx.measureText('W');
        const yOff = (metrics.actualBoundingBoxDescent - metrics.actualBoundingBoxAscent) / 2;
        ctx.fillText('W', 0, -yOff);
        ctx.strokeText('W', 0, -yOff);
        ctx.globalAlpha = 1;
    }

    // drawing

    for (let i of Object.keys(room.flowers)) {
        let flower = room.flowers[i]
        flower.drawProjectiles()
    }

    for (let i of Object.keys(room.enemies)) {
        let enemy = room.enemies[i]
        if (!flowrMod.priorityList.includes(enemy.type)) {
            enemy.draw()
        }
    }

    for (let i of Object.keys(room.enemies)) {
        let enemy = room.enemies[i]
        if (flowrMod.priorityList.includes(enemy.type)) {
            enemy.draw()
        }
    }

    for (let i of Object.keys(room.flowers)) {
        let flower = room.flowers[i]
        flower.drawPets()
    }

    for (let i of Object.keys(room.flowers)) {
        let flower = room.flowers[i]
        flower.draw()
    }

    for (let i of Object.keys(room.petalContainers)) {
        let pc = room.petalContainers[i]
        if (pc.rarity >= flowrMod.minRarityDrop || pc.type === "Token" && pc.rarity == 0) {
            pc.draw()
        }
    }

    // hitboxes
    if (flowrMod.hitbox === true) {
        for (let i of Object.keys(room.enemies)) {
            let enemy = room.enemies[i]
            renderHitbox({ x: enemy.render.x, y: enemy.render.y, radius: enemy.render.radius, rarity: enemy.rarity })
        }

        for (let i of Object.keys(room.flowers)) {
            let flower = room.flowers[i]
            renderHitbox({ x: flower.render.headX, y: flower.render.headY, radius: flower.render.radius, rarity: 'flower' })

            for (let petal of flower.petals) {
                if (petal.dead === true) continue
                renderHitbox({ x: petal.render.x, y: petal.render.y, radius: petal.radius, rarity: petal.rarity })
            }

            for (let petal of flower.projectiles) {
                if (room.flowers[window.selfId]) if ((flower.username !== room.flowers[window.selfId].username && flowrMod.noPeasGrapes == true && (petal.type == "PeasProjectile" || petal.type == "GrapesProjectile"))) continue
                renderHitbox({ x: petal.render.x, y: petal.render.y, radius: petal.radius, rarity: petal.rarity })
            }

            for (let enemy of flower.pets) {
                renderHitbox({ x: enemy.render.x, y: enemy.render.y, radius: enemy.render.radius, rarity: enemy.rarity })
            }
        }
    }

    if (flowrMod.petalHp === true) {

        for (let i of Object.keys(room.flowers)) {
            let flower = room.flowers[i]
            for (let petal of flower.petals) {
                if (petal.dead === true) {
                    petal.hp = petal.maxHp
                    continue;
                }


                let pv = [
                    'Magnet',
                    'Pearl',
                    'Heavy',
                    'Corn',
                    'Sponge',
                    'Egg'
                ]
                if (pv.includes(petal.type) && flowrMod.petalHp === true) {
                    renderHpBar({
                        x: petal.render.x,
                        y: petal.render.y - petal.radius,
                        radius: petal.radius * 2,
                        hp: petal.hp,
                        maxHp: petal.maxHp,
                        beforeStreakHp: 0,
                    },
                        {
                            fadeState: 'fadein',
                            fadeTime: -220,
                            lastHp: 0
                        });
                }
            }
        }
    }

    if (flowrMod.eggTimer === true) {
        for (let i of Object.keys(room.flowers)) {
            let flower = room.flowers[i]
            for (let petal of flower.petals) {
                if (petal.dead === true) continue;
                if (petal.type === 'Custom') continue;
                if (Stats.petals[petal.type][petal.rarity].hatchTime) {
                    let percent = ((30 * Stats.petals[petal.type][petal.rarity].hatchTime) - petal.ticksAlive) / (serverTickLength * Stats.petals[petal.type][petal.rarity].hatchTime)
                    ctx.strokeStyle = '#ff0000'
                    ctx.lineWidth = petal.radius * 4.5
                    ctx.globalAlpha = 0.5
                    ctx.beginPath()
                    ctx.arc(petal.render.x, petal.render.y, petal.radius * 8.5, 0, Math.PI * 2 * percent)
                    ctx.stroke()
                    ctx.closePath();
                    ctx.globalAlpha = 1
                }
            }
        }
    }

    ctx.scale(1 / renderFov, 1 / renderFov)
    if (window.camera.x !== 'pass') {
        ctx.translate(-(canvas.w / 2 - camera.x * renderFov), -(canvas.h / 2 - camera.y * renderFov));
    }
    ctx.globalAlpha = 1;

    ctx.translate(canvas.w / 2, 0);
    // if(window.tutorial === true){
    // 	ctx.translate(0, -canvas.h/11.2);
    // }
    if ((bosses.length === 0 && flowrMod.bossBar === true) || flowrMod.bossBar === false) {
        for (let i = 0; i < room.enemyBoxes.length; i++) {
            let enemyBox = room.enemyBoxes[i];
            enemyBox.update();

            if (enemyBox.isBoss) {
                ctx.strokeStyle = `hsl(${(time / 10) % 360}, 50%, 40%)`
            }
            else {
                ctx.strokeStyle = Colors.rarities[enemyBox.rarity].border;
                if (Colors.rarities[enemyBox.rarity].fancy !== undefined) ctx.strokeStyle = Colors.rarities[enemyBox.rarity].fancy.border;
            }
            ctx.beginPath();

            if (enemyBox.isBoss) {
                ctx.fillStyle = `hsl(${(time / 10) % 360}, 30%, 60%)`
            }
            else {
                ctx.fillStyle = Colors.rarities[enemyBox.rarity].color;
                if (Colors.rarities[enemyBox.rarity].fancy !== undefined) {
                    const gradientFill = ctx.createLinearGradient(enemyBox.x - enemyBox.w / 2, enemyBox.y, enemyBox.x + enemyBox.w / 2, enemyBox.y + enemyBox.h);

                    createFancyGradient(gradientFill, enemyBox.rarity);
                    //ctx.fillStyle = `hsl(${Math.cos(Date.now()/400)*35 + 285}, 100%, 15%)`
                    ctx.fillStyle = gradientFill;
                }
            }
            ctx.beginPath();
            let coef = 0.92;
            let miniCoef = (1 - coef) / 2;
            ctx.roundRect(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef, enemyBox.y + enemyBox.h * miniCoef, enemyBox.w * coef, enemyBox.h * coef, 2.5);
            ctx.lineWidth = 5.25
            ctx.fill();
            ctx.stroke()

            ctx.save()
            ctx.beginPath()
            ctx.globalAlpha = .5
            ctx.roundRect(enemyBox.x - enemyBox.w / 2 + enemyBox.w * miniCoef - 2.625, enemyBox.y + enemyBox.h * miniCoef - 2.625, enemyBox.w * coef + 5.25, enemyBox.h * coef + 5.25, 1)
            ctx.fill()
            ctx.closePath()
            ctx.restore()

            if (Colors.rarities[enemyBox.rarity].fancy !== undefined && Colors.rarities[enemyBox.rarity].fancy.stars !== undefined && !enemyBox.isBoss) {
                ctx.save();
                ctx.translate(enemyBox.x, enemyBox.y + enemyBox.h / 2);
                //scale to size of enemyBox (originally 50, now enemyBox.w)
                ctx.scale(enemyBox.w / 50, enemyBox.w / 50);
                //shiny stars & stuff
                if (!enemyBox.stars) {
                    enemyBox.stars = [];
                    for (let starnum = 0; starnum < Colors.rarities[enemyBox.rarity].fancy.stars; starnum++) {
                        enemyBox.stars.push({ x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 })
                    }
                }
                ctx.shadowBlur = 20;
                ctx.shadowColor = "white";
                ctx.fillStyle = "#ffffff";
                for (let star of enemyBox.stars) {
                    star.x += 0.1;
                    star.y += 0.1;
                    if (star.x > 30 || star.y > 30) {
                        star.x = Math.random() * 800 - 20 - 30;
                        star.y = -30;

                    }

                    if (star.x < -30 || star.x > 30 || star.y < -30 || star.y > 30) {
                        //don't draw;
                        continue;
                    }
                    ctx.beginPath();

                    var grad = ctx.createRadialGradient(star.x, star.y, 15, star.x, star.y, 0);
                    grad.addColorStop(0, "transparent");
                    grad.addColorStop(0.8, `rgba(255,255,255,${(Math.cos(Date.now() / 600 + star.x / 30 + star.y / 30) + 1) * 0.8})`);
                    grad.addColorStop(1, "white");

                    ctx.fillStyle = grad;
                    ctx.globalAlpha = 0.3;

                    ctx.fillRect(-20.5, -20.5, 41, 41);
                    ctx.globalAlpha = 1;
                    if (star.x < 20.5 && star.x > -20.5 && star.y < 20.5 && star.y > -20.5) {

                        ctx.fillStyle = "#fff";

                        ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                    ctx.closePath();
                }
                ctx.restore();
            }

            drawEnemySprite(enemyBox.enemy, enemyBox.type, enemyBox.x, enemyBox.y + enemyBox.h / 2, Math.min(enemyBox.w, enemyBox.h) * 0.38);

            if (enemyBox.amount > 1) {
                if (time - enemyBox.lastAmountChangedTime < 100) {
                    ctx.globalAlpha = smoothstep((time - enemyBox.lastAmountChangedTime) / 100)
                }
                ctx.lineWidth = 3;
                ctx.font = "900 16px 'Ubuntu'";
                ctx.textAlign = "right";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.strokeStyle = "black";
                ctx.translate(enemyBox.x + enemyBox.w / 2 - 7, enemyBox.y + 18);
                ctx.rotate(0.34);
                ctx.strokeText("x" + enemyBox.amount, 0, 0)
                ctx.fillText("x" + enemyBox.amount, 0, 0)
                ctx.rotate(-0.34);
                ctx.translate(-(enemyBox.x + enemyBox.w / 2 - 7), -(enemyBox.y + 18))
                ctx.globalAlpha = 1;
            }

            if (enemyBox.delete == true) {
                let typeStillExists = false;
                for (let j = 0; j < room.enemyBoxes.length; j++) {
                    let otherBox = room.enemyBoxes[j];
                    if (otherBox.type == enemyBox.type && otherBox.rarity != enemyBox.rarity) {
                        typeStillExists = true;
                    }
                }
                if (typeStillExists) {
                    for (let j = 0; j < room.enemyBoxes.length; j++) {
                        let otherBox = room.enemyBoxes[j];
                        if (otherBox.type == enemyBox.type) {
                            if (otherBox.rarity > enemyBox.rarity) {
                                otherBox.targetY -= enemyBoxOverlapSize;
                            }
                        }
                    }
                } else {
                    for (let j = 0; j < room.enemyBoxes.length; j++) {
                        let otherBox = room.enemyBoxes[j];
                        if (otherBox.x < enemyBox.x) {
                            otherBox.targetX += enemyBoxBoundSize / 2;
                        } else {
                            otherBox.targetX -= enemyBoxBoundSize / 2;
                        }
                    }
                }

            }
        }
    }

    ctx.translate(-canvas.w / 2, 0);
    // if(window.tutorial === true){
    // 	ctx.translate(0, canvas.h/11.2);
    // }
    room.enemyBoxes = room.enemyBoxes.filter((e) => !e.delete)

    //if(window.tutorial !== true){
    //room.waveTimer ++;

    let text = (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1') ? "Fight!" : "Wave " + room.wave;
    if (flowrMod.experiment === true && biomeManager.getCurrentBiome() !== '1v1') {
        text = text + " " + flowrMod.percents.boss + " " + flowrMod.percents.special;
    }

    if (bosses.length > 0) {
        if (flowrMod.bossBar === false) {
            let health = 1;
            for (let i of bosses) {
                if (!room.enemies[i]) {
                    health -= 1 / bossCount;
                }
                else {
                    health -= Math.max(Math.min((room.enemies[i].maxHp - room.enemies[i].render.hp) / room.enemies[i].maxHp, 1), 0) / bossCount;
                }
            }
            health -= (bossCount - bosses.length) / bossCount;

            let firstDivide = 1;
            let secondDivide = 1;
            let end = "";

            if (totalBossHealth < 1e3) {

            }
            else if (totalBossHealth < 1e4) {
                firstDivide = 10;
                secondDivide = 100;
                end = "k"
            }
            else if (totalBossHealth < 1e5) {
                firstDivide = 100;
                secondDivide = 10;
                end = "k"
            }
            else if (totalBossHealth < 1e6) {
                firstDivide = 1000;
                secondDivide = 1;
                end = "k"
            }
            else if (totalBossHealth < 1e7) {
                firstDivide = 10000;
                secondDivide = 100;
                end = "m"
            }
            else if (totalBossHealth < 1e8) {
                firstDivide = 100000;
                secondDivide = 10;
                end = "m"
            }
            else if (totalBossHealth < 1e9) {
                firstDivide = 1000000;
                secondDivide = 1;
                end = "m"
            }
            else if (totalBossHealth < 1e10) {
                firstDivide = 10000000;
                secondDivide = 100;
                end = "b"
            }
            else if (totalBossHealth < 1e11) {
                firstDivide = 100000000;
                secondDivide = 10;
                end = "b"
            }
            else if (totalBossHealth < 1e12) {
                firstDivide = 1000000000;
                secondDivide = 1;
                end = "b"
            }

            text += " • " + Math.round(totalBossHealth * health / firstDivide) / secondDivide + end + "/" + Math.round(totalBossHealth / firstDivide) / secondDivide + end;
            ctx.lineWidth = 24;
            ctx.lineCap = "round";
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 + 140, waveBarY);
            ctx.stroke();
            if (health > 0) {
                ctx.lineWidth = 18;
                ctx.lineCap = "round";
                ctx.strokeStyle = "#75dd34";
                ctx.beginPath();
                ctx.lineTo(canvas.w / 2 - 140, waveBarY);
                ctx.lineTo(canvas.w / 2 - 140 + 280 * (health), waveBarY);
                ctx.stroke();
            }
        } else {
            tempVar = []
            tempVar.storedTypes = []
            tempVar.bossData = []
            tempVar.index = 0
            for (let i of bosses) {
                let enemy = {}
                if (!room.enemies[i]) {
                    continue
                } else {
                    enemy = room.enemies[i]
                }
                if (!tempVar.storedTypes.includes(enemy.type)) {
                    let data = {
                        type: enemy.type,
                        hp: enemy.hp,
                        maxHp: enemy.maxHp,
                        beforeStreakHp: enemy.beforeStreakHp,
                        count: 1,
                        rarity: enemy.rarity,
                        wave: room.wave,
                    }
                    tempVar.bossData.push(data)
                    tempVar.storedTypes.push(enemy.type)
                } else {
                    for (let boss of tempVar.bossData) {
                        if (boss.type === enemy.type) {
                            boss.hp += enemy.hp
                            boss.maxHp += enemy.maxHp
                            boss.beforeStreakHp += enemy.beforeStreakHp
                            boss.count++
                        }
                    }
                }
            }

            for (let boss of tempVar.bossData) {
                renderHpBar({ x: canvas.w / 2, y: -210 + 100 + (105 * tempVar.index), radius: 105, hp: boss.hp, maxHp: boss.maxHp, beforeStreakHp: boss.beforeStreakHp, givenAlpha: 1, barLength: 1.45 })
                ctx.font = `900 ${65 * 105 / 132.5}px Ubuntu`
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                ctx.letterSpacing = "0.5px";
                ctx.lineWidth = 10 * 105 / 132.5
                ctx.fillStyle = 'white'
                ctx.strokeStyle = 'black'
                ctx.strokeText(`${boss.type} ${boss.count > 1 ? 'x' + boss.count : ''}`, canvas.w / 2, 85 * 105 / 132.5 + (105 * tempVar.index))
                ctx.fillText(`${boss.type} ${boss.count > 1 ? 'x' + boss.count : ''}`, canvas.w / 2, 85 * 105 / 132.5 + (105 * tempVar.index))

                ctx.font = `900 ${45 * 105 / 132.5}px Ubuntu`
                if (room.biome !== '1v1') {
                    ctx.fillStyle = Colors.rarities[boss.rarity].color
                    ctx.strokeText('Wave ' + boss.wave, canvas.w / 2, 45 + 105 * 105 / 132.5 + (105 * tempVar.index))
                    ctx.fillText('Wave ' + boss.wave, canvas.w / 2, 45 + 105 * 105 / 132.5 + (105 * tempVar.index))
                } else {
                    ctx.fillStyle = Colors.rarities[Math.max(0, boss.rarity - 2)].color
                    ctx.strokeText(Colors.rarities[Math.max(0, boss.rarity - 2)].name, canvas.w / 2, 45 + 105 * 105 / 132.5 + (105 * tempVar.index))
                    ctx.fillText(Colors.rarities[Math.max(0, boss.rarity - 2)].name, canvas.w / 2, 45 + 105 * 105 / 132.5 + (105 * tempVar.index))
                }
                tempVar.index++
            }
        }
    } else if (room.biome !== "1v1" && bosses.length == 0) {
        let maxSpawnTime = waveLengthFunc(room.wave) * 30;
        if (room.waveTimer < maxSpawnTime) {
            ctx.lineWidth = 24;
            ctx.lineCap = "round";
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 + 140, waveBarY);
            ctx.stroke();
            ctx.lineWidth = 18 * Math.min(1, (room.waveTimer / maxSpawnTime) * 10);
            ctx.lineCap = "round";
            ctx.strokeStyle = blendColor(Colors.biomes[room.biome].background, "#ffffff", 0.4)
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 - 140 + 280 * (room.waveTimer / maxSpawnTime), waveBarY);
            ctx.stroke();
        } else {
            ctx.lineWidth = 24;
            ctx.lineCap = "round";
            ctx.strokeStyle = "black";
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 + 140, waveBarY);
            ctx.stroke();
            ctx.lineWidth = 18;
            ctx.strokeStyle = blendColor(Colors.biomes[room.biome].background, "#ffffff", 0.4);
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 + 140, waveBarY);
            ctx.stroke();
            ctx.lineWidth = 15.5 * Math.min(1, ((room.waveTimer - maxSpawnTime) / maxSpawnTime) * 10);
            ctx.globalAlpha = Math.min((room.waveTimer / maxSpawnTime) / 1.5, 1);
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.lineTo(canvas.w / 2 - 140, waveBarY);
            ctx.lineTo(canvas.w / 2 - 140 + 280 * Math.min(1, ((room.waveTimer - maxSpawnTime) / (maxSpawnTime * 2))), waveBarY);
            ctx.stroke();
            ctx.globalAlpha = 1;
        }
    }

    if ((bosses.length == 0 && flowrMod.bossBar === true) || flowrMod.bossBar === false) {
        ctx.letterSpacing = "1px";
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.lineWidth = 6;
        ctx.font = "900 37px 'Ubuntu'";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeText(Colors.biomes[room.biome].display ? Colors.biomes[room.biome].display : room.biomeDisplay, canvas.w / 2, 50)
        ctx.fillText(Colors.biomes[room.biome].display ? Colors.biomes[room.biome].display : room.biomeDisplay, canvas.w / 2, 50)
        ctx.lineWidth = 3;
        ctx.letterSpacing = "0.5px";
        ctx.font = "900 17px 'Ubuntu'";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.strokeText(text, canvas.w / 2, waveBarY - 8)
        ctx.fillText(text, canvas.w / 2, waveBarY - 8)
        ctx.letterSpacing = "0px";
        ctx.textBaseline = "middle";
    }

    let globalIndicationY = 100;
    let globalIndicationX = 65;

    let self = room.flowers[window.selfId];
    let indicationY = globalIndicationY;

    for (let id in room.squadMembers) {
        let flower;
        if (room.flowers[id]) {
            flower = room.flowers[id];
        } else {

            //dead flower
            flower = room.squadMembers[id];
            flower.render = { hp: 0, shield: 0, beforeStreakHp: 0 };
            flower.maxHp = 100;
            flower.drawFlower = Flower.drawDeadFlower;
        }

        if (id == window.selfId) {
            let indicationSize = 35;
            renderHpBar({
                x: globalIndicationX + indicationSize * 4,
                y: globalIndicationY - indicationSize * 3.6,
                radius: indicationSize * 1.8,
                hp: flower.render.hp,
                maxHp: flower.maxHp,
                shield: flower.render.shield,
                beforeStreakHp: flower.render.beforeStreakHp,
                givenAlpha: 1,
                offset: true
            }, flower);
            flower.drawFlower(globalIndicationX, globalIndicationY, indicationSize);
            ctx.font = `900 ${indicationSize * 0.75}px Ubuntu`;
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.textBaseline = "middle";
            ctx.strokeText(flower.name, globalIndicationX + indicationSize * 4, globalIndicationY);
            ctx.fillText(flower.name, globalIndicationX + indicationSize * 4, globalIndicationY);
        } else {
            let indicationSize = 30;
            indicationY += 90;
            renderHpBar({
                x: globalIndicationX + indicationSize * 4,
                y: indicationY - indicationSize * 3.6,
                radius: indicationSize * 1.8,
                hp: flower.render.hp,
                maxHp: flower.maxHp,
                shield: flower.render.shield,
                beforeStreakHp: flower.render.beforeStreakHp,
                givenAlpha: 1,
                offset: true
            }, flower);
            flower.drawFlower(globalIndicationX, indicationY, indicationSize);
            ctx.font = `900 ${indicationSize * 0.75}px Ubuntu`;
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.textBaseline = "middle";
            ctx.strokeText(flower.name, globalIndicationX + indicationSize * 4, indicationY);
            ctx.fillText(flower.name, globalIndicationX + indicationSize * 4, indicationY);

            if (self && room.flowers[id]) {
                ctx.lineWidth = indicationSize / 7;
                let angle = Math.atan2(flower.render.headY - self.render.headY, flower.render.headX - self.render.headX);
                ctx.translate(globalIndicationX, indicationY);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.rotate(angle);
                ctx.beginPath();
                ctx.lineTo(indicationSize * 1.15, -indicationSize * 0.4);
                ctx.lineTo(indicationSize * 1.45, 0);
                ctx.lineTo(indicationSize * 1.15, indicationSize * 0.4);
                ctx.lineTo(indicationSize * 1.15, -indicationSize * 0.4);
                ctx.stroke();
                ctx.fill();
                ctx.rotate(-angle);
                ctx.translate(-globalIndicationX, -indicationY);
            }
        }
    }

    if (flowrMod.eggTimer === true && room.flowers[window.selfId]) {

        for (let petal of room.flowers[window.selfId].petals) {
            if (petal.type === 'Custom') continue
            if (!Stats.petals[petal.type][petal.rarity].hatchTime) continue
            let percent = Math.min(1, ((30 * Stats.petals[petal.type][petal.rarity].hatchTime) - petal.ticksAlive) / (30 * Stats.petals[petal.type][petal.rarity].hatchTime))
            if ((percent >= 1 || percent < 0) && petal.dead === true) {
                percent = 1
                petal.ticksAlive = 0
            }
            let rpercent = (1 - Math.pow(percent, 0.7)) * Math.PI * 6

            ctx.globalAlpha = 0.9

            ctx.lineWidth = 5
            ctx.fillStyle = Colors.rarities[petal.rarity].color
            ctx.strokeStyle = Colors.rarities[petal.rarity].border
            let ps = menuInventory.topPetalSlots[petal.petalContainerId]
            ctx.beginPath()
            ctx.roundRect(ps.x - ps.size / 2, ps.y - ps.size * 3 / 2 - 15, ps.size, ps.size, 2)
            ctx.fill()
            ctx.stroke()
            ctx.closePath();

            ctx.beginPath()
            ctx.roundRect(ps.x - ps.size / 2, ps.y - ps.size * 3 / 2 - 15, ps.size, ps.size, 2)
            ctx.save()
            ctx.clip()
            ctx.closePath()

            ctx.globalAlpha = 0.3
            ctx.strokeStyle = "#000000";
            ctx.lineCap = "butt";
            ctx.lineWidth = ps.size * 2;
            ctx.beginPath()
            ctx.arc(ps.x, ps.y - ps.size - 15, ps.size, rpercent - Math.PI * 2 * smoothstep(percent), rpercent)
            ctx.stroke();
            ctx.closePath();

            ctx.restore();

            ctx.globalAlpha = 1

            if (petal.dead !== true) {
                ctx.fillStyle = 'white'
                ctx.strokeStyle = 'black'
                ctx.font = `900 32px Ubuntu`;
                ctx.strokeText(Math.round(100 * Stats.petals[petal.type][petal.rarity].hatchTime * percent) / 100, ps.x, ps.y - ps.size - 15)
                ctx.fillText(Math.round(100 * Stats.petals[petal.type][petal.rarity].hatchTime * percent) / 100, ps.x, ps.y - ps.size - 15)
            }
        }
    }

    inventory.draw();

    levelBar.draw();

    if (window.isDead === true) {
        window.deadMenuTime += dt;
        deadMenu.draw();
    }
    else {
        window.deadMenuTime = 0;
    }

    settingsMenu.draw();

    flowrMod.flowrSettingsMenu.draw();
    if (settingsMenu.active !== true) {
        flowrMod.flowrSettingsMenu.drawIcon();
    } else if (flowrMod.flowrSettingsMenu.active === true && settingsMenu.active === true) {
        flowrMod.flowrSettingsMenu.toggle();
    }
    //}

    // renderChatMessages();

    if (window.isDead === true) {
        deadMenu.draw();
    } else if (window.state === 'game' && flowrMod.seeLoot === true) {
        collectedMenu.draw(true)
    }

    let index = 0

    let enemyBarsArr = []
    for (let id of Object.keys(room.enemies)) {
        enemyBarsArr.push(room.enemies[id])
    }
    enemyBarsArr = enemyBarsArr.sort(
        (a, b) => {
            if (a.maxHp > b.maxHp) {
                return -1
            }
            if (a.maxHp == b.maxHp) {
                return 0
            }
            if (a.maxHp < b.maxHp) {
                return 1
            }
        }
    )

    for (let enemy of enemyBarsArr) {
        if (enemy.rarity >= flowrMod.enemyBar && ![
            "RockMissile",
            "BigRockMissile",
            "Missile",
            "BeeMissile",
            "StarfishMissile",
            "FireMissile",
            "UrchinMissile",
            "BossUrchinMissile",
            "BigBossUrchinMissile",
            "ScorpionMissile",
            "LocustMissile",
            "SplitLocustMissile",
            "DandelionMissile",
            "BossDandelionMissile",
            "Invincible Urchin",
            "Ant Egg",
            "Fire Ant Egg",
        ].includes(enemy.type)) {
            if (enemy.type === 'Leech' && !enemy.childIds) continue
            renderHpBar({ x: flowrMod.seeLoot === true ? canvas.w - 500 : canvas.w - 150, y: -10 + 65 * (index - 1), radius: 65, hp: enemy.hp, maxHp: enemy.maxHp, beforeStreakHp: enemy.beforeStreakHp, givenAlpha: 1 })
            ctx.font = `900 ${flowrMod.numHP === true ? 19.5 : 24}px Ubuntu`
            ctx.textAlign = 'center'
            ctx.lineWidth = 5
            ctx.fillStyle = 'white'
            ctx.strokeStyle = 'black'
            ctx.strokeText(enemy.type, flowrMod.seeLoot === true ? canvas.w - 500 : canvas.w - 150, (flowrMod.numHP === true ? 100 : 105) + 65 * (index - 1))
            ctx.fillText(enemy.type, flowrMod.seeLoot === true ? canvas.w - 500 : canvas.w - 150, (flowrMod.numHP === true ? 100 : 105) + 65 * (index - 1))

            ctx.font = `900 ${flowrMod.numHP === true ? 14.21875 : 17.5}px Ubuntu`;
            ctx.fillStyle = Colors.rarities[enemy.rarity].color
            ctx.strokeText(Colors.rarities[enemy.rarity].name, flowrMod.seeLoot === true ? canvas.w - 500 : canvas.w - 150, (flowrMod.numHP === true ? 140 : 135) + 65 * (index - 1))
            ctx.fillText(Colors.rarities[enemy.rarity].name, flowrMod.seeLoot === true ? canvas.w - 500 : canvas.w - 150, (flowrMod.numHP === true ? 140 : 135) + 65 * (index - 1))
            index++
        }
    }

    if (window.isDead !== true && room.biome == "1v1" && flowrMod.pvpMiniMap === true) {
        ctx.translate(canvas.w - 110, 110 + (flowrMod.seeLoot === true ? 348 : 0))

        ctx.fillStyle = "#333333"
        ctx.strokeStyle = "#292929"
        ctx.lineWidth = 5

        ctx.save()

        ctx.globalAlpha = 0.5

        ctx.beginPath()
        ctx.arc(0, 0, 90, 0, Math.PI * 2)
        ctx.clip()
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.globalAlpha = 1

        for (let id of Object.keys(room.flowers)) {
            const flower = room.flowers[id]

            ctx.fillStyle = (id == window.selfId ? "#00ffff" : (flower.dev ? "#ffff00" : "#ff0000"))
            ctx.beginPath()
            ctx.arc(flower.baseX * (90 / room.radius), flower.baseY * (90 / room.radius), Math.max(0, flower.radius) * (90 / room.radius), 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()

            ctx.fillStyle = (id == window.selfId ? "#00cfcf" : (flower.dev ? "#cfcf00" : "#cf0000"))
            for (let petal of flower.petals) {
                if (petal.dead) continue
                ctx.beginPath()
                ctx.arc(petal.x * (90 / room.radius), petal.y * (90 / room.radius), petal.radius * (90 / room.radius), 0, Math.PI * 2)
                ctx.fill()
                ctx.closePath()
            }
            for (let petal of flower.projectiles) {
                if (petal.dead) continue
                ctx.beginPath()
                ctx.arc(petal.x * (90 / room.radius), petal.y * (90 / room.radius), petal.radius * (90 / room.radius), 0, Math.PI * 2)
                ctx.fill()
                ctx.closePath()
            }

            ctx.fillStyle = (id == window.selfId ? "#009e9e" : (flower.dev ? "#9e9e00" : "#9e0000"))
            for (let pet of flower.pets) {
                if (pet.dead) continue
                ctx.beginPath()
                ctx.arc(pet.x * (90 / room.radius), pet.y * (90 / room.radius), pet.radius * (90 / room.radius), 0, Math.PI * 2)
                ctx.fill()
                ctx.closePath()
            }
        }

        for (let id of Object.keys(room.enemies)) {
            const enemy = room.enemies[id]

            ctx.fillStyle = enemy.isBoss ? "#00ff00" : "#009e00"
            ctx.beginPath()
            ctx.arc(enemy.x * (90 / room.radius), enemy.y * (90 / room.radius), Math.max(50, enemy.radius) * (90 / room.radius), 0, Math.PI * 2)
            ctx.fill()
            ctx.closePath()
        }

        ctx.restore()

        ctx.translate(-(canvas.w - 110), -(110 + (flowrMod.seeLoot === true ? 348 : 0)))
    }

    if (window.isDead !== true && room.biome !== "1v1" && flowrMod.compassInd === true) {

        if (flowrMod.prev.wave !== room.wave && flowrMod.compass !== -1) {
            flowrMod.compass = -1
        }

        ctx.translate(canvas.w - 110, 12.5 + (flowrMod.seeLoot === true ? 348 : 0))

        ctx.fillStyle = flowrMod.compass == -1 ? "#ababab" : Colors.rarities[flowrMod.compass].color
        ctx.strokeStyle = flowrMod.compass == -1 ? "#8a8a8a" : Colors.rarities[flowrMod.compass].border
        ctx.lineWidth = 7.5

        ctx.beginPath()
        ctx.rect(0, 0, 82.5, 82.5)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.translate(82.5 / 2, 82.5 / 2)
        ctx.scale(82.5 / 10 / 4, 82.5 / 10 / 4)
        ctx.rotate(-Math.PI / 4)
        petalRenderMap.Compass({
            radius: 10,
        })
        ctx.rotate(Math.PI / 4)
        ctx.scale(1 / (82.5 / 10 / 4), 1 / (82.5 / 10 / 4))
        ctx.translate(-82.5 / 2, -82.5 / 2)

        ctx.translate(-(canvas.w - 110), -(12.5 + (flowrMod.seeLoot === true ? 348 : 0)))
    }

    let hoverOverX = false;

    if (mouse.canvasX > 10 && 10 + 45 > mouse.canvasX && mouse.canvasY > 10 && 10 + 45 > mouse.canvasY) {
        hoverOverX = true
    } else {
        hoverOverX = false
    }

    // draw x

    ctx.strokeStyle = '#90464b';
    if (hoverOverX === true) {
        ctx.fillStyle = '#c16666';
    } else {
        ctx.fillStyle = '#c1565e';
    }
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.roundRect(10, 10, 45, 45, 6);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.translate(-2.5, -2.5)
    ctx.lineWidth = 7.5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#cccccc';
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(45, 45);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(45, 25);
    ctx.lineTo(25, 45);
    ctx.stroke();
    ctx.closePath();
    ctx.translate(2.5, 2.5)

    if (hoverOverX === true && mouse.lastDownData.x > 10 && 10 + 45 > mouse.lastDownData.x && mouse.lastDownData.y > 10 && 10 + 45 > mouse.lastDownData.y && mouse.lastDownData.time > 100) {
        send({ leaveGame: true, real: true })
        petalReloadData = {}
        petalHpData = {}
        hoverOverX = false
    }

    // movement indicator

    if (flowrMod.movInd === true && mouseMovement === true && room.flowers[window.selfId]) {
        let dist = 45 * renderFov
        let angle = Math.atan2(mouse.canvasY - (canvas.h / 2), mouse.canvasX - (canvas.w / 2))
        let opacity = Math.sqrt(
            Math.pow((mouse.canvasX - Math.cos(angle) * dist) - (canvas.w / 2), 2) +
            Math.pow((mouse.canvasY - Math.sin(angle) * dist) - (canvas.h / 2), 2)
        )
        if (Math.sqrt(
            Math.pow((mouse.canvasX) - (canvas.w / 2), 2) +
            Math.pow((mouse.canvasY) - (canvas.h / 2), 2)
        ) < dist) opacity = 0

        ctx.strokeStyle = 'black'
        ctx.lineWidth = 10

        ctx.globalAlpha = Math.min(opacity / 220, 1) * 0.3
        ctx.beginPath()
        ctx.moveTo(Math.cos(angle) * dist + (canvas.w / 2), Math.sin(angle) * dist + (canvas.h / 2))
        ctx.lineTo(mouse.canvasX, mouse.canvasY)
        ctx.lineTo(mouse.canvasX + Math.cos(angle + 3 * Math.PI / 4) * 25, mouse.canvasY + Math.sin(angle + 3 * Math.PI / 4) * 25)
        ctx.lineTo(mouse.canvasX, mouse.canvasY)
        ctx.lineTo(mouse.canvasX + Math.cos(angle + -3 * Math.PI / 4) * 25, mouse.canvasY + Math.sin(angle + -3 * Math.PI / 4) * 25)
        ctx.stroke()
        ctx.closePath()
        ctx.globalAlpha = 1
    }
}

function spawnMenuEnemy() {
    if (typeof biomeManager === 'undefined') {
        // setTimeout(() => {
        //     spawnMenuEnemy();
        // }, 200)
        return;
    }
    const currentBiomeName = biomeManager.getCurrentBiomeData().current;
    const biomeTypes = (rareBiomeEnemyMap[currentBiomeName] !== undefined && Math.random() < 0.01) ? rareBiomeEnemyMap[currentBiomeName] : biomeEnemyMap[currentBiomeName];
    biomeTypes.push('Square', 'Pentagon')
    const radius = Math.random() < 0.0001 ? 360 : Math.sqrt(menuEnemyIncrementRadii[Math.floor(Math.random() * menuEnemyIncrementRadii.length)] * (Math.random() * 0.1 + 0.95)) * 8.7;
    if (Math.round(Math.random()) === 0) {
        menuEnemies.push(new Enemy({
            x: - radius * 3,
            y: - radius + Math.random() * (canvas.h + radius * 2),
            radius,
            hp: 100,
            maxHp: 100,
            id: Math.random(),
            type: biomeTypes[Math.floor(Math.random() * biomeTypes.length)],//enemyTypes[Math.floor(Math.random() * enemyTypes.length)],
            rarity: Math.floor(Math.random() * 12),
            angle: Math.random() * Math.PI * 2,
            angleVel: Math.random() * 0.04 - 0.04 / 2,
            xVel: Math.random() < 0.001 ? 20 : (5.8 + (Math.random() ** 3) * 1.5) / 2,// not using xv or yv so that i dont mess anything up
            yVel: (Math.random() > 0.5 ? 1 : -1) * (Math.random() ** 3) * 1,
            sinTimer: (212 + Math.random() * 46) * Math.random(),
            sinVel: Math.random() * .8,
            maxSinTimer: 212 + Math.random() * 46,
            toRenderUi: false,
            isMenuEnemy: true
        }))
    } else {
        menuEnemies.push(new Petal({
            radius: radius / 1.5,
            type: Object.keys(Descriptions.petals)[Math.floor(Math.random() * Object.keys(Descriptions.petals).length)],
            rarity: Math.floor(Math.random() * 12),
            id: Math.random(),
            subId: 0,
            subStackedId: 0,
            dead: false,
            hp: 100,
            maxHp: 100,
            offset: { angle: 0, distance: 0 },
            angleOffset: 0,
            selfAngle: 0,
            render: { selfAngle: 0, x: 0, y: 0 },
            stickParentRotation: true,
            isProjectile: true,
            petalContainerId: 0,
            sinTimer: (212 + Math.random() * 46) * Math.random(),
            sinVel: Math.random() * .8,
            maxSinTimer: 212 + Math.random() * 46,
            angle: Math.random() * Math.PI * 2,
            angleVel: Math.random() * 0.04 - 0.04 / 2,
            xVel: Math.random() < 0.001 ? 20 : (5.8 + (Math.random() ** 3) * 1.5) / 2,// not using xv or yv so that i dont mess anything up
            yVel: (Math.random() > 0.5 ? 1 : -1) * (Math.random() ** 3) * 1,
            x: - radius / 1.5 * 3,
            y: - radius / 1.5 + Math.random() * (canvas.h + radius / 1.5 * 2),
            petal: true
        }))
    }
}

function renderMenuEnemies() {
    if (Math.random() < 0.02 + (0.005 * maxRarityObtained / 8) * dt / 16.67) {
        spawnMenuEnemy();
    }
    // draw and simulate menu enemies
    const now = time;
    for (let i = 0; i < menuEnemies.length; i++) {
        const e = menuEnemies[i];

        const mouseX = mouse.canvasX; const mouseY = mouse.canvasY;
        if (Math.sqrt((mouseX - e.render.x) ** 2 + (mouseY - e.render.y) ** 2) < e.radius * 2 + 100 && e.dead !== true) {
            e.isHovered = true;
        } else {
            e.isHovered = false;
        }

        e.draw();

        e.sinTimer += dt / 16.67;
        e.angle += e.angleVel * 1 + Math.abs(Math.sin(now / 10000)) / 200 * dt / 16.67;
        e.x += e.xVel * dt / 16.67;
        e.y += (e.yVel + Math.sin(e.sinTimer / e.maxSinTimer * 2 * Math.PI) * e.sinVel) * dt / 16.67;
        if (e.x > canvas.w + e.radius * 2 + 100) {
            // remove
            e.toRemove = true;
        }
        if (e.petal) {
            e.render.x = interpolate(e.render.x, e.x, 0.08 * dt / 16.66);
            e.render.y = interpolate(e.render.y, e.y, 0.08 * dt / 16.66);
            e.selfAngle = e.angle
        }
    }
    menuEnemies = menuEnemies.filter(e => e.toRemove !== true);

    ctx.lastTransform7 = ctx.getTransform();
    // for(let i = 0; i < menuEnemies.length; i++){
    //     menuEnemies[i].drawStatsBox();
    // }
    ctx.setTransform(ctx.lastTransform7);
    delete ctx.lastTransform7;
}

window.onmousedown = (e) => {
    mouse.clickPosition = 'down';
    mouse.lastDownData = { time: performance.now(), x: e.pageX, y: e.pageY };

    if (typeof squadUI === 'undefined') {
        return;
    }

    if (squadUI.hoveringOverX === true && e.button === 0) {
        closeSquadUI();
    }

    const mouseX = mouse.x * canvas.w / window.innerWidth;
    const mouseY = mouse.y * canvas.h / window.innerHeight;

    if (window.state === "menu" && e.button === 0 && squadUI.intersectingSliderBound({ x: mouseX, y: mouseY })) {
        squadUI.startSliderDrag(mouseX);
    }

    // ready: true, name: [username], findPublic: true, newSquad: true
    if (window.connected === true) {
        if (performance.now() - window.lastRoomSentTime > 300) {
            if (squadUI.hoveringOverPublic === true && e.button === 0) {
                sendRoomRequest({ findPublic: true, biome: biomeManager.getCurrentBiomeData().current });
            } else if (squadUI.hoveringOverNew === true && e.button === 0) {
                sendRoomRequest({ newSquad: true, biome: biomeManager.getCurrentBiomeData().current });
            } else if (squadUI.hoveringOverPrivate === true && e.button === 0) {
                const squadCode = prompt('Enter Private Squad Code');
                if (squadCode !== null) {
                    sendRoomRequest({ findPrivate: true, biome: biomeManager.getCurrentBiomeData().current, squadCode });
                }
            } else if (squadUI.hoveringOverJoinMainPvp === true && e.button === 0) {
                sendRoomRequest({ newSquad: true, biome: biomeManager.getCurrentBiomeData().current });
                send({ joinMainPvp: true });
                window.inMainPvpRoom = true;
            }// else if(squadUI.hoveringOverQuickJoin === true && e.button === 0){
            //     sendRoomRequest({quickJoin: true, biome: biomeManager.getCurrentBiomeData().current});
            // }
        }

        if ((globalInventory.hoveringOverButton === true || globalInventory.hoveringOverX) && e.button === 0) {
            globalInventory.toggleMenu();
        } else if ((craftingMenu.hoveringOverButton === true || craftingMenu.hoveringOverX) && e.button === 0) {
            craftingMenu.toggleMenu();
        } else if ((changelog.hoveringOverX) && e.button === 0) {
            changelog.toggle();
        } else if ((flowrMod.petalGallery.hoveringOverButton === true || flowrMod.petalGallery.hoveringOverX) && e.button === 0) {
            flowrMod.petalGallery.toggleMenu();
        }

        settingsMenu.mouseDown({ mouseX, mouseY, x: mouseX, y: mouseY });

        menuInventory.mouseDown({ mouseX, mouseY, menuInventory }, menuInventory);

        mobGallery.mouseDown({ x: mouseX, y: mouseY });

        if (changelog.active === true) {
            changelog.mouseDown({ mouseX, mouseY });
        }

        if ((flowrMod.flowrSettingsMenu.hoveringOverButton === true || flowrMod.flowrSettingsMenu.hoveringOverX) && e.button === 0 && settingsMenu.active !== true) {
            flowrMod.flowrSettingsMenu.toggle();
        }
        flowrMod.flowrSettingsMenu.mouseDown({ mouseX, mouseY, x: mouseX, y: mouseY });


        if (globalInventory.menuActive === true && draggingPetalContainer === null) {
            globalInventory.mouseDown({ mouseX, mouseY }, menuInventory);
        } else if (craftingMenu.menuActive === true) {
            craftingMenu.mouseDown({ mouseX, mouseY }, e);
        } else if (flowrMod.petalGallery.menuActive === true) {
            flowrMod.petalGallery.mouseDown({ mouseX, mouseY }, e);
        }

        flowrMod.BuildSaver.data.mouseDown = true
    }

    // requestAnimationFrame(() => {
    //     ctx.beginPath();
    //     ctx.fillStyle = 'red';
    //     ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
    //     ctx.fill();
    //     ctx.closePath();
    // })

    if (window.state === "menu") {
        biomeManager.mouseDown({ mouseX, mouseY }, e);
        for (let i = 0; i < menuEnemies.length; i++) {
            const e = menuEnemies[i];
            if (Math.sqrt((mouseX - e.render.x) ** 2 + (mouseY - e.render.y) ** 2) < e.radius && e.dead !== true) {
                if (e.hp <= 0) {
                    e.dead = true;
                } else {
                    e.hp -= (1 + Math.min(10, maxRarityObtained));
                    e.updateRenderDamage();
                }
            }
        }

        streakMenu.mouseDown({ mouseX, mouseY });
    }

    if (room !== undefined && selfId !== null && window.isDead === true) {
        if (deadMenu.hoveringOverButton === true) {
            // if(window.tutorial === true){
            //     // delete window.tutorial;
            //     // const MenuEl = document.querySelector('.menu');
            //     // MenuEl.classList.remove('hidden');
            //     location.reload();
            // } else {
            deadMenu.rematchRequested = false;
            if (deadMenu.acceptedDeath === true || window.is3D === true) {
                send({ leaveGame: true, real: true });
            }
            else {
                deadMenu.acceptedDeath = true;
            }
            // we don't do any initting back to the menu just yet.
            // We have to wait until the server acknowledges that we left
            // the game (through the acknowledgeleavegame message) and then
            // we can reset everything.
            // }
        } else if (deadMenu.hoveringOverRematchButton === true) {
            deadMenu.rematchRequested = true;
            send({ rematchRequested: true });
        }
    }
    else if (room !== undefined && selfId !== null && window.isDead !== true) {
        // if(globalInventory.menuActive === true){
        //     // handling intersecting petals in globalInventory. This can probably be done much more efficiently with % operations but idc
        //     for(let i = 0; i < numberOfRarities; i++){
        //         if(globalInventory.petalContainers[i] === undefined){
        //             continue;
        //         }
        //         for(let j = 0; j < globalInventory.petalContainers[i].length; j++){
        //             const petalContainer = globalInventory.petalContainers[i][j];
        //             if(mouseX > petalContainer.x - petalContainer.w/2 && mouseX < petalContainer.x + petalContainer.w/2 && mouseY > petalContainer.y - petalContainer.h/2 && mouseY < petalContainer.y + petalContainer.h/2){
        //                 // for now we'll just equip the petal, but in the future we would want to start a petal drag
        //                 let position = -1;
        //                 for(let i = 0; i < inventory.bottomPetalSlots.length; i++){
        //                     if(inventory.bottomPetalContainers[i] === undefined){
        //                         position = i;
        //                         break;
        //                     }
        //                 }
        //                 if(position === -1){
        //                     return;
        //                 }
        //                 inventory.addPetalContainer(new PetalContainer(petalContainer.petals, petalContainer, petalContainer.id, 1), false, position);

        //                 globalInventory.removePetalContainer(petalContainer);
        //                 return;
        //             }
        //         }
        //     }
        //     // intersecting globalinventory
        //     if(mouseX > 130 && mouseY > canvas.h - 700 - 20 && mouseX < 130 + 510 && mouseY < canvas.h - 20){
        //         return;
        //     }
        // }
        // intersecting globalInventory button
        // if(mouseX > 20 + 15 && mouseX < 20 + 15 + 80 - 15 * 2 && mouseY > canvas.h - 20 - 80 + 15 && mouseY < canvas.h - 20 - 80 + 15 + 80 - 15 * 2){//20 + 15, canvas.h - 20 - 80 + 15, 80 - 15 * 2, 80 - 15 * 2
        //     return;
        // }
        if (e.button == 0) {
            // sendGame({attack: true});
            send(['a', true]);
            // room.flowers[selfId].attacking = true;
        } else if (e.button == 2) {
            // sendGame({defend: true});
            send(['d', true]);
            // room.flowers[selfId].defending = true;
        }
        if (window.state === "game") inputHandler.updateChat();
    }
}

window.onmouseup = (e) => {
    mouse.clickPosition = 'up';

    // const mouseX = mouse.x * canvas.width / canvas.w;
    // const mouseY = mouse.y * canvas.height / canvas.h;

    if (typeof room !== "undefined" && selfId !== null && window.isDead !== true) {
        if (e.button == 0) {
            // sendGame({attack: false});
            send(['a', false]);
            // room.flowers[selfId].attacking = false;
        } else if (e.button == 2) {
            // sendGame({defend: false});
            send(['d', false]);
            // room.flowers[selfId].defending = false;
        }
    }

    const mouseX = mouse.x * canvas.w / window.innerWidth;
    const mouseY = mouse.y * canvas.h / window.innerHeight;

    if (window.state === "menu" && squadUI.hoveringOverSlider === true && e.button === 0) {
        squadUI.endSliderDrag(mouseX);
    }

    flowrMod.flowrSettingsMenu.mouseUp({ mouseX, mouseY, x: mouseX, y: mouseY });

    if (window.connected === true) {
        // if(globalInventory.menuActive === true){
        globalInventory.mouseUp({ mouseX, mouseY }, menuInventory);
        // }
        flowrMod.petalGallery.mouseUp({ mouseX, mouseY }, menuInventory);
        mobGallery.mouseUp({ x: mouseX, y: mouseY });
        if (craftingMenu.menuActive === true) {
            craftingMenu.mouseUp({ mouseX, mouseY });
        }
        if (changelog.active === true) {
            changelog.mouseUp({ mouseX, mouseY });
        }
    }

    flowrMod.BuildSaver.data.mouseUp = true

    if (window.state === "game") inputHandler.updateChat();
}

document.addEventListener("wheel", (e) => {
    if (window.state === 'game') {
        fov /= 1 / (1 - e.deltaY / 700);
        if (fov < 0.2) {
            fov = 0.2;
        }
        if (fov > 3) {
            fov = 3;
        }
    }

    const mouseX = mouse.x * canvas.w / window.innerWidth;
    const mouseY = mouse.y * canvas.h / window.innerHeight;
    globalInventory.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY });
    flowrMod.petalGallery.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY });
    craftingMenu.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY });
    flowrMod.flowrSettingsMenu.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY })
    mobGallery.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY });
    changelog.updateScroll({ x: e.deltaX, y: e.deltaY }, { mouseX, mouseY });
});

flowrMod.generatePetalContainer = function generatePetalContainer(type, rarity, amount) {
    let stats = Stats.petals[type][rarity]

    let petals = []

    let pcStats = {}

    let blacklist = [
        'radius',
        'override',
        'knockback',
        'damageScalers',
        'healScalers',
        'petalLayout',
        'attackDistanceMult',
        'healthScalers',
        'pvpOverride',
        'stickParentRotation',
        'massScalers',
        'boss'
    ]

    for (let i of Object.keys(stats)) {
        if (Object.keys(Descriptions.petals).includes(type) && i === 'customBiome') {
            continue;
        }
        pcStats[i] = stats[i]
    }
    if (stats.petalLayout.length > 0) {
        if (stats.petalLayout.length > 1) {
            stats.petalLayout[0] = stats.petalLayout
        }

        for (let i of stats.petalLayout[0]) {
            petals.push(new Petal({
                x: 0,
                y: 0,
                angle: 0,
                radius: pcStats.radius,
                type,
                rarity,
                damage: pcStats.damage,
                offset: { angle: 5.026548245743669, distance: 0 },
                distance: 0,
                dv: 0,
                id: Math.random(),
                subId: 0,
                subStackedId: 0,
                dead: false,
                hp: pcStats.health,
                maxHp: pcStats.health,
                reload: pcStats.reload,
                maxReload: pcStats.reload,
                angleOffset: 0,
                stickParentRotation: true,
                petalContainerId: 0
            }))
        }
    } else {
        petals.push(new Petal({
            x: 0,
            y: 0,
            angle: 0,
            radius: pcStats.radius,
            type,
            rarity,
            damage: pcStats.damage,
            offset: { angle: 5.026548245743669, distance: 0 },
            distance: 0,
            dv: 0,
            id: Math.random(),
            subId: 0,
            subStackedId: 0,
            dead: false,
            hp: pcStats.health,
            maxHp: pcStats.health,
            reload: pcStats.reload,
            maxReload: pcStats.reload,
            angleOffset: 0,
            stickParentRotation: true,
            petalContainerId: 0
        }))
    }

    let pc = new PetalContainer(petals, { x: 0, y: 0, w: 50, h: 50, toOscillate: false, radius: 0 }, Math.random(), amount, 0)
    pc.petalStats = {}

    for (let i of Object.keys(pcStats)) {
        if (blacklist.includes(i)) {
            /*if (i !== 'radius' && i !== 'override' && i !== 'knockback' && i !== 'damageScalers' && i !== 'healthScalers' && i !== 'healScalers' && i !== 'petalLayout' && i !== 'attackDistanceMult') {
            console.log(i)
            }*/
            continue;
        }
        pc.petalStats[i] = pcStats[i]
    }

    return pc
}


class PetalGallery extends GlobalInventory {
    constructor() {
        super()
    }
    resizeScroll() {
        super.resizeScroll()
    }
    drawIcon(alpha = 1) {
        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        // these colors are taken from florr.io, not hornex. They are the exact same. I checked.
        ctx.fillStyle = '#8e6bb5';
        ctx.strokeStyle = '#735793';
        if (mouse.canvasX + 6 > 20 && mouse.canvasY + 6 > canvas.h - 20 - 80 - 100 - 100 - 100 && mouse.canvasX - 6 < 20 + 80 && mouse.canvasY - 6 < canvas.h - 20 - 80 + 80 - 100 - 100 - 100) {
            ctx.fillStyle = '#9979bc';
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            // if(this.hoveringOverX === false){
            //     document.body.style.cursor = 'auto';
            // }
            this.hoveringOverButton = false;
        }
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80 - 100 - 100 - 100, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(flowrMod.images.petalGallery, 20 + 15, canvas.h - 20 - 80 + 15 - 100 - 100 - 100, 80 - 15 * 2, 80 - 15 * 2);

        ctx.fillStyle = '#f0f0f0';// this is gonna be pain lol
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[Z]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100 - 100)
        ctx.fillText("[Z]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100 - 100)
        ctx.letterSpacing = lastLetterSpacing;

        ctx.globalAlpha = 1;
    }
    draw() {
        super.draw()
    }
    fadeOut() {
        super.fadeOut()
    }
    initInventory(data) {
        super.initInventory(data)
    }
    addPetalContainer(p, isCRSync = false) {
        // this whole function is really inefficient lol. If you're ever bored then refactor ig.
        if (this.petalContainers[p.rarity] === undefined) {
            this.petalContainers[p.rarity] = [];
        }

        // const me = room.flowers[window.selfId];

        let previousStack = this.petalContainers[p.rarity].find(p2 => p2.type === p.type);
        if (previousStack !== undefined) {
            previousStack.amount += p.amount;
            previousStack.lastAmountChangedTime = time;

            // if(this.menuActive === true){
            //     previousStack.lastAmountChangedTime = time;
            //     p.isTempAnimation = true;
            //     p.realNonAnimationParent = previousStack;

            //     setTimeout(() => {
            //         const lastLength = this.petalContainers[p.rarity.length];
            //         this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);
            //         if(lastLength === this.petalContainers[p.rarity].length){
            //             for(let i = 0; i < this.petalContainers[p.rarity]; i++){
            //                 if(this.petalContainers[p.rarity][i].type === p.type){
            //                     this.removePetalContainer(p.rarity, i);
            //                     return;
            //                 }
            //             }
            //         }
            //     }, 2000)
            //     return;
            // } else {
            return;
            // }
        }// else {
        // this.petalContainers[p.rarity].unshift(p);
        // this.petalContainers[p.rarity].sort();
        // }

        p.w = 62;
        p.h = 62;

        this.petalContainers[p.rarity].unshift(p);// pushing p ong

        this.petalContainers[p.rarity].sort();

        if (flowrMod.alphabet === true) {
            for (let rarity of Object.keys(this.petalContainers)) {
                this.petalContainers[rarity].sort((a, b) => {
                    let p1 = a.type.toLowerCase()
                    let p2 = b.type.toLowerCase()

                    if (p1 > p2) {
                        return 1
                    } else if (p1 < p2) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
        }
        if (flowrMod.noCustom === true) {
            for (let i of Object.keys(this.petalContainers)) {
                this.petalContainers[i] = this.petalContainers[i].filter(petal => {
                    let officialList = Object.keys(Descriptions.petals)
                    if (officialList.includes(petal.type)) {
                        return true;
                    }
                })
            }
        }

        // adding camera render so that it looks the same even without translation
        // p.render.x += canvas.w/2-me.render.headX;
        // p.render.y += canvas.h/2-me.render.headY;
    }
    removeByRarityAndType(rarity, type) {
        super.removeByRarityAndType(rarity, type)
    }
    ReturnRarityAndType(rarity, type) {
        super.ReturnRarityAndType(rarity, type)
    }
    removeByRarityAndTypeAndReturn(rarity, type) {
        super.removeByRarityAndTypeAndReturn(rarity, type)
    }
    removePetalContainer(rarity, indexInRarity) {
        super.removePetalContainer()
    }
    removePetalContainerAmount(rarity, indexInRarity, amount) {
        super.removePetalContainerAmount()
    }
    mouseDown({ mouseX, mouseY }, inv) {
        if (
            mouseX < this.w - 16 + 12 + 130 &&
            mouseX > this.w - 16 - 12 + 130 &&
            mouseY > (this.scrollbar.bottom) &&
            mouseY < (this.scrollbar.top)
        ) {
            this.draggingScrollBar = true;
        }
    }
    mouseUp({ mouseX, mouseY }, inv, skipFastFlag = false) {
        this.draggingScrollBar = false;
    }
    drawInventory(alpha = 1) {

        this.render.scroll = interpolate(this.render.scroll, this.scroll, 0.0070 * dt);

        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if (time - this.lastCloseTime < 160) {
            translation += this.h * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if (time - this.lastOpenTime < 160) {
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if (translation !== 0) {
            ctx.translate(0, translation);
        }

        if (this.hoveringOverScrollbar === true || this.draggingScrollBar === true) {
            setCursor('pointer');
        }

        ctx.translate(130, canvas.h - this.h - 20);
        // if(time - this.lastCloseTime < 500){
        //     ctx.translate()
        // }
        ctx.fillStyle = '#8e6bb5';
        ctx.strokeStyle = '#735793';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.clip();
        ctx.closePath();

        const petalContainersPerRow = 5;
        const padding = 35;
        const rightPadding = 50;// scroll bar is here so we need more
        const petalContainerSize = 65//(this.petalContainers[0] ?? {w: 0}).w;

        let firstPetalContainer = null;
        let lastPetalContainer = null;

        let renderIndex = 0;
        for (let i = numberOfRarities - 1; i >= 0; i--) {
            if (this.petalContainers[i] === undefined) {
                continue;
            }
            for (let j = 0; j < this.petalContainers[i].length; j++) {
                const petalContainer = this.petalContainers[i][j];
                if (petalContainer.isTempAnimation === true) {
                    var lastRenderIndex = renderIndex;
                    renderIndex = petalContainer.realNonAnimationParent.renderIndex;
                }
                petalContainer.x = petalContainerSize / 2 + padding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow - 1) * (this.w - petalContainerSize - padding - rightPadding);
                petalContainer.y = padding + petalContainerSize / 2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + this.render.scroll;
                petalContainer.renderIndex = renderIndex;

                // really unoptimized lol
                if (firstPetalContainer === null) {
                    firstPetalContainer = petalContainer;
                }
                lastPetalContainer = petalContainer;

                petalContainer.relativeY = Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + petalContainerSize / 2 + this.render.scroll;
                if (petalContainer.relativeY - petalContainer.y + petalContainer.render.y < this.h - padding /*-*/ + petalContainerSize && petalContainer.relativeY - petalContainer.y + petalContainer.render.y > /*padding*/ - petalContainerSize * 2) {
                    // if(this.h - petalContainer.relativeY < petalContainerSize / 2){
                    //     ctx.globalAlpha = (this.h - petalContainer.relativeY) / petalContainerSize / 2;
                    // }
                    if (petalContainer.lastOutTime !== undefined) {
                        delete petalContainer.lastOutTime;
                        petalContainer.lastInTime = time;
                    }

                    // if(petalContainer.lastInTime !== undefined){
                    //     ctx.globalAlpha = ((time - petalContainer.lastInTime) / 300) ** 2;
                    //     if(time - petalContainer.lastInTime > 300){
                    //         delete petalContainer.lastInTime;
                    //     }
                    // }

                    petalContainer.draw();
                    // ctx.globalAlpha = 1;
                } else {
                    // if(petalContainer.lastOutTime === undefined){
                    //     petalContainer.lastOutTime = time;
                    // }
                    // if(petalContainer.lastInTime !== undefined){
                    //     delete petalContainer.lastInTime;
                    // }
                    // if(time - petalContainer.lastOutTime < 300){
                    //     ctx.globalAlpha = (1 - (time - petalContainer.lastOutTime) / 300) ** 2;
                    //     petalContainer.draw();
                    //     ctx.globalAlpha = 1;
                    // } else {
                    petalContainer.updateInterpolate();
                    // }
                }
                renderIndex++;
                if (petalContainer.isTempAnimation === true) {
                    renderIndex = lastRenderIndex;
                }
            }
        }

        ctx.restore();

        // stroking the rect again so that hte stroke isn't halfway in
        ctx.fillStyle = '#8e6bb5';
        ctx.strokeStyle = '#735793';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();

        if (firstPetalContainer !== null && Object.keys(this.petalContainers).length > 0) {// insanity
            this.menuHeights = {
                beginning: firstPetalContainer.relativeY, //- petalContainerSize * 1/2,
                end: lastPetalContainer.relativeY //+ petalContainerSize * 4
            }

            if (this.menuHeights.end - this.menuHeights.beginning < this.h - (petalContainerSize + 12)/*extra row*/) {
                this.scrollBarActive = false;
                this.scroll = 5;
            } else {
                if (this.menuHeights.end - this.menuHeights.beginning < this.h) {
                    this.scrollBarActive = false;
                } else {
                    this.scrollBarActive = true;
                }

                // const lastScroll = this.scroll;

                // console.log(this.menuHeights.beginning - this.menuHeights.end);

                if (this.menuHeights.end + this.scroll - this.render.scroll < this.h - petalContainerSize - padding) {
                    // we want to move target - actual distance
                    this.scroll = (this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - padding - 5;
                } else if (this.menuHeights.beginning + this.scroll - this.render.scroll > padding) {
                    this.scroll = 5;
                    // this.render.scroll = 0;
                }

                // const ratio = (this.scroll - 5) / ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize * 3/2 - 5 - 5);// at 0 it will be 0, at max (this.mH.beginning - ...) it will be 1

                // this.scrollbar.length = ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - 5); // max scroll
                // this.scrollbar.top = ratio * (this.h - this.scrollbar.length);
                // this.scrollbar.bottom = ratio * (this.h - this.scrollbar.length) + this.scrollbar.length;

                // reverseing the mouseY to scroll to give us mouseY in terms of this.scroll
                const scrollBarProjections = {
                    top: (canvas.h - this.h - 20) + this.scrollbar.length * .5 + 60,
                    bottom: (canvas.h - 20) - this.scrollbar.length * .5 + 30
                }
                // top: (canvas.h - this.h - 20) + this.scrollbar.length - 130,
                // bottom: (canvas.h - 20) - 16 + this.scrollbar.length + 160

                // const mouseProjections = {
                //     top: scrollBarProjections.top - this.scrollbar.length * .25,
                //     bottom: scrollBarProjections.bottom - this.scrollbar.length * .25 + 30
                // }
                // // console.log(scrollBarProjections.bottom - canvas.h);
                // ctx.translate(-130, -(canvas.h - this.h - 20));
                // ctx.fillStyle = 'blue';
                // ctx.beginPath();
                // ctx.arc(0, mouseProjections.bottom, 30, 0, Math.PI * 2);
                // ctx.fill();
                // ctx.closePath();
                // ctx.beginPath();
                // ctx.arc(0, mouseProjections.top, 30, 0, Math.PI * 2);
                // ctx.fill();
                // ctx.closePath();
                // ctx.translate(130, (canvas.h - this.h - 20));

                this.totalPetalHeight = (this.menuHeights.beginning - this.menuHeights.end);

                // this.scroll = (mouseY - scrollBarProjections.top) / (scrollBarProjections.bottom - scrollBarProjections.top) * (this.totalPetalHeight + this.scrollbar.length) //* ((this.h - 82 - 16 * 2) / this.h);

                // max at (this.scroll - this.h) / this.totalPetalHeight, min at 0 / this.totalPetalHeight
                // const ratio = (this.scroll - this.h * ratio) / this.totalPetalHeight;
                const ratio = this.scroll / this.totalPetalHeight / (1 + this.h / this.totalPetalHeight);
                // console.log(ratio);
                this.scrollbar.bottom = interpolate(scrollBarProjections.top, scrollBarProjections.bottom, ratio) - this.scrollbar.length / 2//this.scroll / (this.totalPetalHeight) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top + this.scrollbar.length / 2 - (canvas.h - this.h - 20);
                // this.scrollbar.bottom = this.scroll / (this.totalPetalHeight + this.scrollbar.length) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top - this.scrollbar.length/2;
                this.scrollbar.top = this.scrollbar.bottom + this.scrollbar.length / 2//this.scrollbar.bottom - this.scrollbar.length / 2;
            }
        }

        this.scrollbar.renderTop = interpolate(this.scrollbar.renderTop, this.scrollbar.top, this.draggingScrollBar ? 0.28 : 0.08);
        this.scrollbar.renderBottom = interpolate(this.scrollbar.renderBottom, this.scrollbar.bottom, this.draggingScrollBar ? 0.28 : 0.08);

        // console.log(this.scrollBarActive);
        if (this.scrollBarActive !== false && Object.keys(this.petalContainers).length > 0) {
            ctx.translate(0, -(canvas.h - this.h - 20));
            ctx.strokeStyle = '#735793';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(this.w - 16, (this.scrollbar.renderTop) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.lineTo(this.w - 16, (this.scrollbar.renderBottom) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.stroke();
            ctx.closePath();
            ctx.translate(0, (canvas.h - this.h - 20));
        }


        if (this.menuActive === true && translation === 0) {
            if (mouse.canvasX > 130 + this.w - 7.5 - 30 - 3 && mouse.canvasY > canvas.h - this.h - 20 + 7.5 + 3 && mouse.canvasX < 130 + this.w - 7.5 - 3 && mouse.canvasY < canvas.h - this.h - 20 + 7.5 + 30 + 3) {
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                // if(this.hoveringOverButton === false){
                //     document.body.style.cursor = 'auto';
                // }
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        ctx.translate(-3, 3);
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.w - 7.5 - 30, 7.5, 30, 30, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.w - 30, 30);
        ctx.lineTo(this.w - 7.5 * 2, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.w - 7.5 * 2, 30);
        ctx.lineTo(this.w - 30, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(3, -3);
        // ctx.beginPath();
        // ctx.moveTo(this.w - 7.5, 7.5 - 7.5 - 7.5, 30 + 7.5 + 7.5);
        // ctx.lineTo(this.w - 7.5 - 30, 15 + 30 + 15);
        // ctx.stroke();
        // ctx.closePath();

        // const firstPetalContainer = this.petalContainers[0][0];
        // const lastPetalContainer = this.petalContainers[numberOfRarities-2][this.petalContainers[numberOfRarities-2].length-1].y
        // if(firstPetalContainer.relativeY < this.h - petalContainerSize - padding - 20){
        //     this.scroll += (this.h - petalContainerSize - padding - 20 - firstPetalContainer.relativeY);
        // } else if(lastPetalContainer.relativeY > 0){
        //     console.log('alrt');
        // }
        const mouseRelative = {
            x: mouse.canvasX - 130,
            y: mouse.canvasY - (canvas.h - this.h - 20)
        };

        if (mouseRelative.y > 0 && mouseRelative.x < this.w) {
            ctx.lastTransform6 = ctx.getTransform();
            for (let i = numberOfRarities - 1; i >= 0; i--) {
                if (this.petalContainers[i] === undefined) {
                    continue;
                }
                for (let j = 0; j < this.petalContainers[i].length; j++) {
                    const petalContainer = this.petalContainers[i][j];

                    if (
                        mouseRelative.x > petalContainer.render.x - (petalContainer.w / 2 + 6) &&
                        mouseRelative.x < petalContainer.render.x + (petalContainer.w / 2 + 6) &&
                        mouseRelative.y > petalContainer.render.y - (petalContainer.h / 2 + 6) &&
                        mouseRelative.y < petalContainer.render.y + (petalContainer.h / 2 + 6)
                    ) {
                        petalContainer.isHovered = true;
                    }

                    petalContainer.drawStatsBox();
                }
            }
            ctx.setTransform(ctx.lastTransform6);
            delete ctx.lastTransform6;
        }

        ctx.translate(-130, -(canvas.h - this.h - 20));

        if (translation !== 0) {
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;

        // ctx.fillStyle = 'red';
        // const scrollBarProjections = {
        //     top: (canvas.h - this.h - 20) + 85 + this.scrollbar.length - 130,
        //     bottom: (canvas.h - 20) - 16 + this.scrollbar.length - 130 - 22
        // }
        // ctx.beginPath();
        // ctx.arc(130, scrollBarProjections.top, 12, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.beginPath();
        // ctx.arc(130, scrollBarProjections.bottom, 12, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
    }
    updateScroll(/*delta*/{ x, y }, { mouseX, mouseY }) {
        super.updateScroll({ x, y }, { mouseX, mouseY })
    }
    mouseMove({ mouseX, mouseY }) {
        super.mouseMove({ mouseX, mouseY })
    }
    toggleMenu() {
        if (mobGallery.menuActive === true) mobGallery.toggleMenu();
        if (globalInventory.menuActive === true) globalInventory.toggleMenu();
        if (this.menuActive === true) {
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if (craftingMenu.menuActive === true) {
                craftingMenu.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;
        // console.log(this.menuActive);
    }
}
flowrMod.petalGallery = new PetalGallery()

function gen5pcs() {
    const a = {}
    for (let i = 0; i < 10; i++) {
        a[i] = flowrMod.generatePetalContainer(Object.keys(Descriptions.petals)[Math.random() * Object.keys(Descriptions.petals).length | 0], (Math.random() * baseStats.rarities.length) | 0, 1)
    }
    return a
}

flowrMod.BUILDSAVER = class BUILDSAVER {
    constructor() {
        this.dimensions = {
            y: { target: canvas.h / 1.1, val: 0 },
            w: 625,
            h: 250
        }
        this.builds = []
        if (flowrMod.savedBuilds) {
            for (let index = 0; index < flowrMod.savedBuilds.length; index++) {
                this.builds[index] = {
                    name: flowrMod.savedBuilds[index].name,
                    petals: {
                        top: {},
                        bottom: {}
                    }
                }
                for (let id of Object.keys(flowrMod.savedBuilds[index].petals.top)) {
                    const pc = flowrMod.savedBuilds[index].petals.top[id]
                    if (pc) this.builds[index].petals.top[id] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                }
                for (let id of Object.keys(flowrMod.savedBuilds[index].petals.top)) {
                    const pc = flowrMod.savedBuilds[index].petals.bottom[id]
                    if (pc) this.builds[index].petals.bottom[id] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                }
            }
        }
        this.data = {
            active: false,
            selectedBuild: 0,
            mouseDown: false,
            mouseUp: false,
            selections: {
                main: false,
                left: false,
                right: false,
                clear: false,
                save: false,
                load: false
            }
        }
    }
    clearBuild() {
        for (let i of Object.keys(menuInventory.topPetalContainers)) {
            const pc = menuInventory.topPetalContainers[i]
            globalInventory.addPetalContainer(pc)
            delete menuInventory.topPetalContainers[i]
        }
        for (let i of Object.keys(menuInventory.bottomPetalContainers)) {
            const pc = menuInventory.bottomPetalContainers[i]
            globalInventory.addPetalContainer(pc)
            delete menuInventory.bottomPetalContainers[i]
        }
        localStorage.setItem("savedPetals", JSON.stringify({ top: menuInventory.topPetalContainers, bottom: menuInventory.bottomPetalContainers }))
        menuInventory.swapPetals(0)
    }
    setBuild() {
        this.clearBuild()
        for (let i of Object.keys(menuInventory.topPetalSlots)) {
            const pc = this.builds[this.data.selectedBuild].petals.top[i]
            if (pc) {
                globalInventory.removeByRarityAndType(pc.rarity, pc.type)
                menuInventory.topPetalContainers[i] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                menuInventory.topPetalContainers[i].render.x = menuInventory.topPetalContainers[i].x = menuInventory.topPetalSlots[i].x
                menuInventory.topPetalContainers[i].render.y = menuInventory.topPetalContainers[i].y = menuInventory.topPetalSlots[i].y
                menuInventory.topPetalContainers[i].render.w = menuInventory.topPetalContainers[i].w = menuInventory.topPetalSlots[i].size
            }
        }
        for (let i of Object.keys(menuInventory.bottomPetalSlots)) {
            const pc = this.builds[this.data.selectedBuild].petals.bottom[i]
            if (pc) {
                globalInventory.removeByRarityAndType(pc.rarity, pc.type)
                menuInventory.bottomPetalContainers[i] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                menuInventory.bottomPetalContainers[i].render.x = menuInventory.bottomPetalContainers[i].x = menuInventory.bottomPetalSlots[i].x
                menuInventory.bottomPetalContainers[i].render.y = menuInventory.bottomPetalContainers[i].y = menuInventory.bottomPetalSlots[i].y
                menuInventory.bottomPetalContainers[i].render.w = menuInventory.bottomPetalContainers[i].w = menuInventory.bottomPetalSlots[i].size
            }
        }
        localStorage.setItem("savedPetals", JSON.stringify({ top: menuInventory.topPetalContainers, bottom: menuInventory.bottomPetalContainers }))
        menuInventory.swapPetals(0)
        menuInventory.swapPetals(0)
    }
    saveBuild() {
        if (this.builds[this.data.selectedBuild]) {
            if (prompt("Type \"confirm\" if you wish to overrite this save.") === "confirm") {
                const build = {
                    name: "Unnamed Build",
                    petals: {
                        top: {},
                        bottom: {}
                    }
                }
                for (let i = 0; i < Object.keys(menuInventory.topPetalContainers).length; i++) {
                    const pc = menuInventory.topPetalContainers[Object.keys(menuInventory.topPetalContainers)[i]]
                    if (pc) build.petals.top[i] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                }
                for (let i = 0; i < Object.keys(menuInventory.bottomPetalContainers).length; i++) {
                    const pc = menuInventory.bottomPetalContainers[Object.keys(menuInventory.bottomPetalContainers)[i]]
                    if (pc) build.petals.bottom[Object.keys(menuInventory.bottomPetalContainers)[i]] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
                }

                const name = prompt('Name of build?')
                build.name = name

                this.builds[this.data.selectedBuild] = build
            }
        } else {
            const build = {
                name: "Unnamed Build",
                petals: {
                    top: {},
                    bottom: {}
                }
            }

            for (let i = 0; i < Object.keys(menuInventory.topPetalContainers).length; i++) {
                const pc = menuInventory.topPetalContainers[Object.keys(menuInventory.topPetalContainers)[i]]
                if (pc) build.petals.top[i] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
            }
            for (let i = 0; i < Object.keys(menuInventory.bottomPetalContainers).length; i++) {
                const pc = menuInventory.bottomPetalContainers[Object.keys(menuInventory.bottomPetalContainers)[i]]
                if (pc) build.petals.bottom[Object.keys(menuInventory.bottomPetalContainers)[i]] = flowrMod.generatePetalContainer(pc.type, pc.rarity, 1)
            }

            const name = prompt('Name of build?')
            build.name = name

            this.builds.push(build)
        }

        scripts.flowrMod.savedBuilds = this.builds
        localStorage.setItem("scripts", JSON.stringify(scripts))
    }
    render() {
        if (this.data.active === true) {
            this.dimensions.y.target = canvas.h - this.dimensions.h - 25
        } else {
            this.dimensions.y.target = canvas.h
        }

        this.dimensions.y.val = interpolate(this.dimensions.y.val, this.dimensions.y.target, 0.01 * dt)

        ctx.fillStyle = '#6e48b1'
        ctx.strokeStyle = '#6e48b1'
        ctx.lineWidth = 5

        ctx.translate(canvas.w / 2 - this.dimensions.w / 2, this.dimensions.y.val)

        ctx.beginPath()
        ctx.roundRect(this.dimensions.w / 2 - this.dimensions.w / 8, -this.dimensions.h / 8, this.dimensions.w / 4, this.dimensions.h / 8, 5)
        ctx.fill()
        ctx.closePath()

        if (mouseInBox({
            x: mouse.canvasX,
            y: mouse.canvasY
        }, {
            x: canvas.w / 2 - this.dimensions.w / 8,
            y: this.dimensions.y.val - this.dimensions.h / 8,
            w: this.dimensions.w / 4,
            h: this.dimensions.h / 8
        })) {
            setCursor('pointer')
            this.data.selections.main = true
        } else {
            this.data.selections.main = false
        }

        if (this.data.selections.main === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.data.active = !this.data.active

        ctx.strokeStyle = "#5d3d96"

        // insert triple arrows here

        ctx.fillStyle = '#895adb'
        ctx.strokeStyle = '#6e48b1'

        ctx.beginPath()
        ctx.roundRect(0, 0, this.dimensions.w, this.dimensions.h, 5)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        if (this.data.active == true) {

            const leftButtonPos = 35
            const rightButtonPos = this.dimensions.w - leftButtonPos
            const buttonH = 25

            ctx.fillStyle = this.data.selectedBuild < this.builds.length ? "#7eef6d" : "#6b6b6b"
            ctx.strokeStyle = this.data.selectedBuild < this.builds.length ? "#66c258" : "#565656"

            ctx.beginPath()
            ctx.rect(leftButtonPos, buttonH, 50, 50)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            ctx.font = `900 20px Ubuntu`
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2

            ctx.strokeText("Load", leftButtonPos + 25, buttonH + 25)
            ctx.fillText("Load", leftButtonPos + 25, buttonH + 25)

            if (mouseInBox({
                x: mouse.canvasX,
                y: mouse.canvasY
            }, {
                x: canvas.w / 2 - this.dimensions.w / 2 + leftButtonPos,
                y: this.dimensions.y.val + buttonH,
                w: 50,
                h: 50
            }) && this.data.selectedBuild < this.builds.length) {
                setCursor('pointer')
                this.data.selections.load = true
            } else {
                this.data.selections.load = false
            }

            if (this.data.selections.load === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.setBuild()

            ctx.fillStyle = "#e34747"
            ctx.strokeStyle = "#c14242"
            ctx.lineWidth = 5

            ctx.beginPath()
            ctx.rect(leftButtonPos + 60, buttonH, 50, 50)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            if (mouseInBox({
                x: mouse.canvasX,
                y: mouse.canvasY
            }, {
                x: canvas.w / 2 - this.dimensions.w / 2 + leftButtonPos + 60,
                y: this.dimensions.y.val + buttonH,
                w: 50,
                h: 50
            })) {
                setCursor('pointer')
                this.data.selections.save = true
            } else {
                this.data.selections.save = false
            }

            if (this.data.selections.save === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.saveBuild()

            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2

            ctx.strokeText("Save", leftButtonPos + 85, buttonH + 25)
            ctx.fillText("Save", leftButtonPos + 85, buttonH + 25)

            ctx.fillStyle = this.data.selectedBuild < this.builds.length ? "#cccccc" : "#6b6b6b"
            ctx.strokeStyle = this.data.selectedBuild < this.builds.length ? "#a5a5a5" : "#565656"
            ctx.lineWidth = 5

            ctx.beginPath()
            ctx.rect(rightButtonPos - 50, buttonH, 50, 50)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            if (mouseInBox({
                x: mouse.canvasX,
                y: mouse.canvasY
            }, {
                x: canvas.w / 2 - this.dimensions.w / 2 + rightButtonPos - 50,
                y: this.dimensions.y.val + buttonH,
                w: 50,
                h: 50
            }) && this.data.selectedBuild < this.builds.length) {
                setCursor('pointer')
                this.data.selections.right = true
            } else {
                this.data.selections.right = false
            }

            if (this.data.selections.right === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.data.selectedBuild++

            ctx.font = `900 20px Ubuntu`
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2

            ctx.strokeText("Next", rightButtonPos - 25, buttonH + 25)
            ctx.fillText("Next", rightButtonPos - 25, buttonH + 25)

            ctx.fillStyle = this.data.selectedBuild > 0 ? "#cccccc" : "#6b6b6b"
            ctx.strokeStyle = this.data.selectedBuild > 0 ? "#a5a5a5" : "#565656"
            ctx.lineWidth = 5

            ctx.beginPath()
            ctx.rect(rightButtonPos - 110, buttonH, 50, 50)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            if (mouseInBox({
                x: mouse.canvasX,
                y: mouse.canvasY
            }, {
                x: canvas.w / 2 - this.dimensions.w / 2 + rightButtonPos - 110,
                y: this.dimensions.y.val + buttonH,
                w: 50,
                h: 50
            }) && this.data.selectedBuild > 0) {
                setCursor('pointer')
                this.data.selections.left = true
            } else {
                this.data.selections.left = false
            }

            if (this.data.selections.left === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.data.selectedBuild--

            ctx.font = `900 20px Ubuntu`
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2

            ctx.strokeText("Back", rightButtonPos - 85, buttonH + 25)
            ctx.fillText("Back", rightButtonPos - 85, buttonH + 25)

            ctx.fillStyle = "#de1f1f"
            ctx.strokeStyle = "#b41919"
            ctx.lineWidth = 5

            ctx.beginPath()
            ctx.rect(leftButtonPos, buttonH + 60, 50, 50)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()

            if (mouseInBox({
                x: mouse.canvasX,
                y: mouse.canvasY
            }, {
                x: canvas.w / 2 - this.dimensions.w / 2 + leftButtonPos,
                y: this.dimensions.y.val + buttonH + 60,
                w: 50,
                h: 50
            })) {
                setCursor('pointer')
                this.data.selections.clear = true
            } else {
                this.data.selections.clear = false
            }

            if (this.data.selections.clear === true) if (this.data.mouseDown === true && this.data.mouseUp === true) this.clearBuild()

            ctx.font = `900 20px Ubuntu`
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2

            ctx.strokeText("Clear", leftButtonPos + 25, buttonH + 85)
            ctx.fillText("Clear", leftButtonPos + 25, buttonH + 85)

            ctx.translate(this.dimensions.w / 2, this.dimensions.h - 100)

            ctx.font = `900 40px Ubuntu`
            ctx.lineWidth = 4

            ctx.strokeText("Build Saver", 0, -this.dimensions.h + 140)
            ctx.fillText("Build Saver", 0, -this.dimensions.h + 140)

            if (this.builds[this.data.selectedBuild]) {
                const build = this.builds[this.data.selectedBuild]
                for (let i = 0, n = Object.keys(build.petals.top).length; i < n; i++) {
                    const size = 42.5
                    const padding = 10
                    const miniRatio = 0.75

                    ctx.translate((i * (size + padding)) - (n / 2 * (size + padding)) + (padding / 2), 0)

                    ctx.globalAlpha *= 0.8

                    ctx.fillStyle = "#eeeeee"
                    ctx.strokeStyle = "#bebebe"
                    ctx.lineWidth = 3.75

                    ctx.beginPath()
                    ctx.rect(0, 0, size, size)
                    ctx.fill()
                    ctx.stroke()
                    ctx.closePath()

                    ctx.globalAlpha *= 1 / 0.8

                    if (build.petals.top[i]) {
                        build.petals.top[i].w = size
                        build.petals.top[i].x = size / 2
                        build.petals.top[i].y = size / 2
                        build.petals.top[i].draw()
                    }

                    ctx.translate(-((i * (size + padding)) - (n / 2 * (size + padding)) + (padding / 2)), 0)

                    ctx.translate((i * (size * miniRatio + padding)) - (n / 2 * (size * miniRatio + padding)) + (padding / 2), size + padding)

                    ctx.globalAlpha *= 0.8

                    ctx.fillStyle = "#eeeeee"
                    ctx.strokeStyle = "#bebebe"
                    ctx.lineWidth = 3.75 * miniRatio

                    ctx.beginPath()
                    ctx.rect(0, 0, size * miniRatio, size * miniRatio)
                    ctx.fill()
                    ctx.stroke()
                    ctx.closePath()

                    ctx.globalAlpha *= 1 / 0.8

                    if (build.petals.bottom[i]) {
                        build.petals.bottom[i].w = size * miniRatio
                        build.petals.bottom[i].x = size * miniRatio / 2
                        build.petals.bottom[i].y = size * miniRatio / 2
                        build.petals.bottom[i].draw()
                    }

                    ctx.translate(-((i * (size * miniRatio + padding)) - (n / 2 * (size * miniRatio + padding)) + (padding / 2)), -(size + padding))

                    ctx.font = `900 25px Ubuntu`
                    ctx.fillStyle = "#ffffff"
                    ctx.strokeStyle = "#000000"
                    ctx.lineWidth = 2.5

                    ctx.strokeText(build.name, 0, -25)
                    ctx.fillText(build.name, 0, -25)
                }
            } else {
                ctx.font = `900 32px Ubuntu`
                ctx.fillStyle = "#ffffff"
                ctx.strokeStyle = "#000000"
                ctx.lineWidth = 3.2

                ctx.strokeText("Click the save button to create a build!", 0, 12.5)
                ctx.fillText("Click the save button to create a build!", 0, 12.5)
            }

            ctx.font = `900 25px Ubuntu`
            ctx.fillStyle = "#ffffff"
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2.5

            ctx.strokeText(`Page: ${this.data.selectedBuild + 1}/${this.builds.length + 1}`, 0, -62.5)
            ctx.fillText(`Page: ${this.data.selectedBuild + 1}/${this.builds.length + 1}`, 0, -62.5)

            ctx.translate(-this.dimensions.w / 2, -(this.dimensions.h - 100))
        }

        ctx.translate(-(canvas.w / 2 - this.dimensions.w / 2), -this.dimensions.y.val)

        if (this.data.mouseUp === true && this.data.mouseDown === true) this.data.mouseDown = false
        this.data.mouseUp = false
    }
}

flowrMod.BuildSaver = new flowrMod.BUILDSAVER()

renderMenu = function renderMenu(dt) {
    flowrMod.percents = {
        boss: 0,
        special: 0
    }
    flowrMod.prev = {
        wave: 0,
        enemyTypeCounts: 0
    }
    flowrMod.compass = -1
    flowrMod.mobSpawnCounts = 0
    flowrMod.registeredEnemyTypes = []
    // getCurrentBiomeData(){
    //     return {
    //         ratio: this.transitionAnimationTimer / this.transitionTime,
    //         last: this.biomeOrder[this.lastBiome],
    //         current: this.biomeOrder[this.currentBiome]
    //     }
    // }
    const { ratio, last, current, direction } = biomeManager.getCurrentBiomeData();
    // ctx.fillStyle = '#1ea761';
    // ctx.strokeStyle = "#1c8c54";

    if (ratio !== 1) {
        if (direction === 'right') {
            ctx.fillStyle = Colors.biomes[last].background;
            ctx.strokeStyle = Colors.biomes[last].grid;
        } else {
            ctx.fillStyle = Colors.biomes[current].background;
            ctx.strokeStyle = Colors.biomes[current].grid;
        }

        renderBg();

        ctx.save();
        ctx.beginPath();
        if (direction === 'right') {
            ctx.rect(0, 0, smoothstep(smoothstep(ratio)) * canvas.w, canvas.h);
        } else {
            ctx.rect(0, 0, (1 - smoothstep(smoothstep(ratio))) * canvas.w, canvas.h);
        }
        ctx.clip();
        ctx.closePath();

        if (direction === 'right') {
            ctx.fillStyle = Colors.biomes[current].background;
            ctx.strokeStyle = Colors.biomes[current].grid;
        } else {
            ctx.fillStyle = Colors.biomes[last].background;
            ctx.strokeStyle = Colors.biomes[last].grid;
        }
        renderBg();

        ctx.restore();

        for (let i = 0; i < menuEnemies.length; i++) {
            if (menuEnemies[i].updatedBiome === undefined) {
                continue;
            }
            if ((biomeManager.lastDirectionPressed === 'right' && menuEnemies[i].render.x <= smoothstep(smoothstep(ratio)) * canvas.w) || (biomeManager.lastDirectionPressed === 'left' && menuEnemies[i].render.x >= (1 - smoothstep(smoothstep(ratio))) * canvas.w)) {
                delete menuEnemies[i].updatedBiome;
                const biomeTypes = biomeEnemyMap[Object.keys(biomeEnemyMap)[biomeManager.currentBiome]];
                if (!menuEnemies[i].petal) {
                    menuEnemies[i].type = biomeTypes[Math.floor(Math.random() * biomeTypes.length)];
                    menuEnemies[i] = new Enemy(menuEnemies[i]);
                } else {
                    menuEnemies[i].type = Object.keys(Descriptions.petals)[Math.round(Math.random() * Object.keys(Descriptions.petals).length)];
                    menuEnemies[i] = new Petal(menuEnemies[i]);
                }
            }
        }
    } else {
        ctx.fillStyle = Colors.biomes[current].background;
        ctx.strokeStyle = Colors.biomes[current].grid;
        renderBg();
        // ctx.fillRect(0,0,canvas.w,canvas.h);

        // // tiles
        // const timeOffset = (-time/20) % 50;

        // ctx.lineWidth = 2;
        // ctx.globalAlpha = 0.6;
        // for(let x = timeOffset-ctx.lineWidth; x <= canvas.w+ctx.lineWidth; x+=tileSize){
        //     ctx.beginPath();
        //     ctx.moveTo(x, 0);
        //     ctx.lineTo(x, canvas.h);
        //     ctx.stroke();
        //     ctx.closePath();
        // }

        // for(let y = -timeOffset-ctx.lineWidth; y <= canvas.h+ctx.lineWidth; y+=tileSize){
        //     ctx.beginPath();
        //     ctx.moveTo(0, y);
        //     ctx.lineTo(canvas.w, y);
        //     ctx.stroke();
        //     ctx.closePath();
        // }
    }

    biomeManager.draw();

    renderMenuEnemies();

    changelog.draw();

    settingsMenu.draw();

    flowrMod.flowrSettingsMenu.draw();
    if (settingsMenu.active !== true && changelog.active !== true) {
        flowrMod.flowrSettingsMenu.drawIcon();
    } else if (flowrMod.flowrSettingsMenu.active === true && settingsMenu.active === true) {
        flowrMod.flowrSettingsMenu.toggle();
    }

    if (window.connected === false || time - window.connectedTime < 800) {
        if (window.connected === false) {
            connectingTextAnimationCompletion = 1;
        } else {
            connectingTextAnimationCompletion = 1 - easeOutCubic((time - window.connectedTime) / 800);
        }
        ctx.globalAlpha = 1;
        ctx.font = "900 42px 'Ubuntu'";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black'//"#1c8c54";
        ctx.lineWidth = 5;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.strokeText("Connecting...", canvas.w / 2, canvas.h * 0.5 * connectingTextAnimationCompletion - canvas.h * 0.03);
        ctx.fillText("Connecting...", canvas.w / 2, canvas.h * 0.5 * connectingTextAnimationCompletion - canvas.h * 0.03);
    }

    let toTranslate = false;
    if (time - window.connectedTime < 1000) {
        toTranslate = true;
        const animationCompletion = easeOutCubic(smoothstep((time - window.connectedTime) / 1000));
        var positionToTranslate = (0) * animationCompletion + (1 - animationCompletion) * (-canvas.h / 2 - 140);
        ctx.translate(0, positionToTranslate);
    }

    // Title text
    ctx.font = "900 91px Ubuntu";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = "-1px";

    ctx.lineWidth = 10;
    ctx.strokeStyle = 'black'//"#1c8c54";
    ctx.strokeText("flowr.fun", canvas.w / 2, canvas.h / 2 - 140);

    ctx.fillStyle = 'white';
    ctx.fillText("flowr.fun", canvas.w / 2, canvas.h / 2 - 140);

    ctx.letterSpacing = "0px";

    if (toTranslate === true) {
        ctx.translate(0, -positionToTranslate);
    }

    levelBar.draw();

    // ctx.lineWidth = 6;
    // ctx.strokeStyle = 'white';
    // ctx.lineCap = 'round';
    // ctx.strokeText("Flowr.io", canvas.w / 2, canvas.h / 3);

    // ctx.font = "600 124px Fredoka One";
    // ctx.fillStyle = '#f0f0f0';
    // ctx.strokeStyle = 'black'//"#1c8c54";
    // ctx.lineWidth = 8;
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.strokeText("Flowr.io", canvas.w / 2, canvas.h / 3);
    // ctx.fillText("Flowr.io", canvas.w / 2, canvas.h / 3);

    if (window.connected === true) {

        const topPetalSlotSize = menuInventory.topPetalSlots[0].size;// global size for all petal slots
        const bottomPetalSlotSize = menuInventory.bottomPetalSlots[0].size;

        const initialDisplacement = topPetalSlotSize + topPetalSlotSize * paddingRatio + bottomPetalSlotSize + bottomPetalSlotSize * paddingRatio - 2;
        const finalDisplacement = -canvas.h / 2 + initialDisplacement * 1.5;

        if (time - window.connectedTime < 1000) {
            const animationCompletion = easeOutCubic(smoothstep((time - window.connectedTime) / 1000));
            const positionToTranslate = finalDisplacement * animationCompletion + (1 - animationCompletion) * initialDisplacement;
            menuInventory.translateY = positionToTranslate;
            ctx.translate(0, positionToTranslate);
            menuInventory.draw(animationCompletion);
            ctx.translate(0, -positionToTranslate);
        } else {
            if (window.squadUIEnabled === true) {
                menuInventory.translateY = finalDisplacement + squadUI.h * 0.95;
                ctx.translate(0, finalDisplacement + squadUI.h * 0.95);
                menuInventory.draw();
                ctx.translate(0, -finalDisplacement - squadUI.h * 0.95);
                squadUI.render(dt);
            } else {
                menuInventory.translateY = finalDisplacement;
                ctx.translate(0, finalDisplacement);
                menuInventory.draw();
                ctx.translate(0, -finalDisplacement);
            }
        }

        if (draggingPetalContainer !== null) {
            draggingPetalContainer.draw();
        }

        craftingMenu.draw();
        globalInventory.draw();
        flowrMod.petalGallery.draw()
        mobGallery.draw();

        if (versions.db > versions.script && flowrMod.noUpdInd !== true) {
            ctx.font = `900 50px 'Ubuntu'`
            ctx.textAlign = 'middle'
            ctx.textBaseline = "center";
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = "black";
            ctx.lineWidth = 7.5
            ctx.strokeText(`Please update FlowrMod to ${versions.db}.`, canvas.w / 2, 50)
            ctx.fillText(`Please update FlowrMod to ${versions.db}.`, canvas.w / 2, 50)
        }
    }

    flowrMod.BuildSaver.render()

    streakMenu.draw();
}

draw = function draw() {
    time = performance.now();
    dt = time - lastTime;
    lastTime = time;

    if (dt > 1000) {
        // dt = 1000;
        dt = 0;
    }

    if (window.state === "account") {
        renderAccountMenu(dt);
    } else if (window.state === "menu") {
        renderMenu(dt);
    } else {
        renderGame(dt);
        if (window.state === "disconnected") {
            renderDisconnectedText(dt);
        }
    }

    let server = {
        'location': 'Chicago',
        'type': 1
    }
    if (ws.url.split('//')[1].split('.')[0] === 'server2') {
        server.location = 'Frankfurt'
        server.type = 2
    }

    if (window.toRenderDebug === true) {
        window.framesRendered++;
        if (window.framesRendered > 10) {
            const now = performance.now();
            window.fps = Math.floor(window.framesRendered / (now - window.lastFramesRenderedResetTime) * 1000);
            window.lastFramesRenderedResetTime = now;
            window.framesRendered = 0;
        }
        renderDebug();
        ctx.fillStyle = "#aaddff";
        ctx.strokeText(`flowrMod ${versions.script}, client ${versions.client}`, canvas.w - 2, canvas.h - 17); //, Server: ${server.location} (server${server.type})
        ctx.fillText(`flowrMod ${versions.script}, client ${versions.client}`, canvas.w - 2, canvas.h - 17);
    } else {
        ctx.font = "900 15px 'Ubuntu'";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        ctx.fillStyle = "#aaddff";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.strokeText(`flowrMod ${versions.script}, client ${versions.client}`, canvas.w - 2, canvas.h - 2);
        ctx.fillText(`flowrMod ${versions.script}, client ${versions.client}`, canvas.w - 2, canvas.h - 2);
    }
}

flowrMod.calcSpecialWave = function calcSpecialWave(input) {
    let ignoredMobs = [
        "RockMissile",
        "BigRockMissile",
        "Missile",
        "BeeMissile",
        "StarfishMissile",
        "FireMissile",
        "UrchinMissile",
        "BossUrchinMissile",
        "BigBossUrchinMissile",
        "ScorpionMissile",
        "LocustMissile",
        "SplitLocustMissile",
        "DandelionMissile",
        "BossDandelionMissile",
        "Invincible Urchin",
        "Ant Egg",
        "Fire Ant Egg",
        "Queen Ant",
        "Fire Queen Ant",
        "Fire Ant"
    ]
    if (room.wave > 10 && room.wave !== flowrMod.prev.wave) {
        if (flowrMod.percents.special < 10) {
            flowrMod.percents.special += 9
        } else {
            flowrMod.percents.special += 4.5
        }
        if (flowrMod.percents.special > 100) {
            flowrMod.percents.special = 100
        } else if (flowrMod.percents.special < 0) {
            flowrMod.percents.special = 0
        }
        flowrMod.registeredEnemyTypes = []
    } else if (room.wave === flowrMod.prev.wave) {
        if (!flowrMod.registeredEnemyTypes.includes(input.type) && !ignoredMobs.includes(input.type)) {
            flowrMod.registeredEnemyTypes.push(input.type)
        }
        if (
            flowrMod.registeredEnemyTypes.includes('Ladybug') && flowrMod.registeredEnemyTypes.includes('Hornet') ||
            flowrMod.registeredEnemyTypes.includes('Ladybug') && flowrMod.registeredEnemyTypes.includes('Hornet') ||
            flowrMod.registeredEnemyTypes.includes('Ladybug') && flowrMod.registeredEnemyTypes.includes('Dandelion') ||
            flowrMod.registeredEnemyTypes.includes('Dark Ladybug') && flowrMod.registeredEnemyTypes.includes('Hornet') ||
            flowrMod.registeredEnemyTypes.includes('Evil Centipede') ||
            flowrMod.registeredEnemyTypes.includes('Centipede') && flowrMod.registeredEnemyTypes.includes('Bee') ||
            flowrMod.registeredEnemyTypes.includes('Dark Ladybug') && flowrMod.registeredEnemyTypes.includes('Bee') ||

            flowrMod.registeredEnemyTypes.includes('Shiny Ladybug') ||
            flowrMod.registeredEnemyTypes.includes('Desert Centipede') ||
            flowrMod.registeredEnemyTypes.includes('Cactus') && flowrMod.registeredEnemyTypes.includes('Beetle') ||
            flowrMod.registeredEnemyTypes.includes('Scorpion') && flowrMod.registeredEnemyTypes.includes('Beetle') ||
            flowrMod.registeredEnemyTypes.includes('Fire Ant Burrow') && flowrMod.registeredEnemyTypes.includes('Beetle') ||
            flowrMod.registeredEnemyTypes.includes('Sandstorm') && flowrMod.registeredEnemyTypes.includes('Beetle') ||
            flowrMod.registeredEnemyTypes.includes('Desert Moth') && flowrMod.registeredEnemyTypes.includes('Beetle') ||
            flowrMod.registeredEnemyTypes.includes('Locust') && flowrMod.registeredEnemyTypes.includes('Beetle') ||

            flowrMod.registeredEnemyTypes.includes('Shell') && flowrMod.registeredEnemyTypes.includes('Crab') ||
            flowrMod.registeredEnemyTypes.includes('Starfish') && flowrMod.registeredEnemyTypes.includes('Jellyfish') ||
            flowrMod.registeredEnemyTypes.includes('Starfish') && flowrMod.registeredEnemyTypes.includes('Crab') ||
            flowrMod.registeredEnemyTypes.includes('Starfish') && flowrMod.registeredEnemyTypes.includes('Leech') ||
            flowrMod.registeredEnemyTypes.includes('Starfish') && flowrMod.registeredEnemyTypes.includes('Sea Urchin') ||
            flowrMod.registeredEnemyTypes.includes('Starfish') && flowrMod.registeredEnemyTypes.includes('Sponge')
        ) {
            return;
        }
        if (flowrMod.registeredEnemyTypes.includes('Plastic')) {
            flowrMod.percents.special -= 13
            for (let i = 0; i < 5; i++) {
                flowrMod.registeredEnemyTypes.push('Filler')
            }
        }
        if (room.waveTimer > 250 && flowrMod.registeredEnemyTypes.length <= 4) {
            flowrMod.percents.special -= 13
            for (let i = 0; i < 5; i++) {
                flowrMod.registeredEnemyTypes.push('Filler')
            }
        }
    }
    if (flowrMod.percents.special > 100) {
        flowrMod.percents.special = 100
    } else if (flowrMod.percents.special < 0) {
        flowrMod.percents.special = 0
    }
}

flowrMod.calcBossWave = function calcBossWave(input) {
    if (room.wave >= 40 && room.wave !== flowrMod.prev.wave) {
        if (input !== 'boss') {
            flowrMod.percents.boss += 3.5
        } else {
            flowrMod.percents.boss -= 20
        }
    }
    if (flowrMod.percents.boss > 100) {
        flowrMod.percents.boss = 100
    } else if (flowrMod.percents.boss < 0) {
        flowrMod.percents.boss = 0
    }
}

let newMap = {}

for (let i of Object.keys(processGameMesssageMap)) {
    newMap[i] = processGameMesssageMap[i]
}

newMap.newEnemy = (data, me, advanced) => {
    if (flowrMod.prev.wave === 0) {
        flowrMod.calcSpecialWave(data)
        flowrMod.calcBossWave(data)
        flowrMod.prev.wave = room.wave
    }
    if (data.isBoss) {
        let addBoss = true;
        if (data.type == "Leech" || data.type == "BudLeech") {
            if (!data.isHead) {
                addBoss = false;
            }
        }
        if (addBoss) {
            bosses.push(data.id);
            totalBossHealth += data.maxHp;
            bossCount += 1;
            flowrMod.calcBossWave('boss')
            flowrMod.bossActive === true
        }
    } else if (!flowrMod.bossActive) {
        flowrMod.calcSpecialWave(data)
        flowrMod.calcBossWave(data)
    }
    if (flowrMod.prev.wave !== room.wave && flowrMod.bossActive) {
        delete flowrMod.bossActive
    }
    if (flowrMod.prev.wave !== room.wave) {
        flowrMod.prev.wave = room.wave
    }
    room.addNewEnemy(data);
}

newMap.compassGlow = (data, me, advanced) => {
    room.flowers[data.flowerID].petals[data.compassID].glow = data.compassGlow;
    setTimeout(() => { flowrMod.compass = data.compassGlow }, 4 * dt)
},

    newMap.leaveGameAcknowledged = (msg) => {
        // do all of the initting required to get back to the menu.
        // See util.js when the deadmenu.button is clicked to see why
        // we don't do the initting there
        globalInventory.petalContainers = {};
        clearInterval(window.runInterval);

        document.querySelector('.menu').style.display = "";

        squadUI = new SquadUI();

        closeSquadUI();
        // mainWS = new WebSocket(HOST);
        // mainWS.binaryType = "arraybuffer";

        // initMainWS();

        window.selfId = null;

        window.state = "menu";
        // window.connected = false;

        deadMenu = new DeadMenu();
        room = new Room();
        collectedMenu = new CollectedMenu();

        bosses = [];
        totalBossHealth = 0;
        bossCount = 0;

        if (window.mobile === true) {
            mobileDiv.classList.add('hidden');
        }

        if (window.isEditor !== true) {
            chatDiv.classList.add('hidden');
            inputHandler.chatOpen = false;
            chatInput.value = '';
            chatInput.style.opacity = '0';
            chatInput.blur();
        }

        if (window.is3D === true) {
            window.unInit3D();
        }

        // window.selfId = null;

        delete window.isDead;
        delete window.hasWonPvp;
        delete window.inMainPvpRoom;

        flowrMod.percents.boss = 0
        flowrMod.percents.special = 0
        flowrMod.compass = -1
    },

    processGameMesssageMap = newMap

renderBg = function renderBg() {
    ctx.fillRect(0, 0, canvas.w, canvas.h);

    // tiles
    let timeOffset = 0

    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        timeOffset = (-time / 20) % 50;
    } else {
        timeOffset = (-time / 20) % 450
    }

    ctx.lineWidth = 2;
    ctx.globalAlpha = 1;
    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        for (let x = timeOffset - ctx.lineWidth; x <= canvas.w + ctx.lineWidth; x += tileSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.h);
            ctx.stroke();
            ctx.closePath();
        }
    }

    if (flowrMod.detailedBackgrounds !== true || flowrMod.images[biomeManager.currentBiome] === undefined) {
        for (let y = -timeOffset - ctx.lineWidth; y <= canvas.h + ctx.lineWidth; y += tileSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.w, y);
            ctx.stroke();
            ctx.closePath();
        }
    }
    ctx.globalAlpha = 1;

    if (flowrMod.detailedBackgrounds === true && flowrMod.images[biomeManager.currentBiome] !== undefined) {
        for (let i = 0; i < Math.ceil(canvas.w / 450) + 1; i++) {
            for (let j = 0; j < Math.ceil(canvas.h / 450) + 1; j++) {
                ctx.drawImage(flowrMod.images[biomeManager.currentBiome], (450 * (i)) + timeOffset, (450 * (j - 1)) - timeOffset, 450, 450)
            }
        }
    }
}

flowrMod.updateLoop = function updateLoop() {
    flowrMod.renderRanges();
    flowrMod.functionStuffs();
    flowrMod.assignColors();
    requestAnimationFrame(updateLoop)
}
flowrMod.updateLoop()

blendAmount = function blendAmount(p) {
    if (flowrMod.noDMGflash === false) {
        return Math.max(0, 1 - p.ticksSinceLastDamaged / 166.5);
    } else {
        return 0
    }
}

attemptDrawCache = function attemptDrawCache(e, angle, sz = 2) {
    if (e.cachedImage && !checkForFirstFrame(e) && blendAmount(e) <= 0) {
        ctx.rotate(angle);
        ctx.scale(Math.max(0.01, e.radius / e.cachedRadius), Math.max(0.01, e.radius / e.cachedRadius))
        ctx.drawImage(e.cachedImage, -sz * e.cachedRadius, -sz * e.cachedRadius);
        ctx.scale(1 / (Math.max(0.01, e.radius / e.cachedRadius)), 1 / (Math.max(0.01, e.radius / e.cachedRadius)))
        ctx.rotate(-angle);
        return true;
    }
    return false;
}

checkToCache = function checkToCache(e, sz = 2) {
    if (!e.cachedImage && e.render.radius == e.radius) { //worth caching!
        e.render.radius = e.radius;
        e.cachedRadius = e.radius;
        e.cachedImage = new OffscreenCanvas(Math.max(1, 2 * sz * e.render.radius), Math.max(1, 2 * sz * e.render.radius));
        let realctx = ctx;
        ctx = e.cachedImage.getContext("2d");
        ctx.lineCap = realctx.lineCap;
        ctx.lineJoin = realctx.lineJoin;
        ctx.translate(sz * e.render.radius, sz * e.render.radius);
        return realctx;
    }
    return null;
}

/**************/
/*  CLASSES  */
/*************/

Enemy = class Enemy {
    constructor(init) {
        if (enemyRenderMap[init.type] === undefined && editorEnemyShapesMap[init.type] !== undefined) {
            return new Enemy({
                ...init,
                type: "Custom",
                customType: init.type
            });
        }
        this.beforeStreakHp = init.maxHp; // if flowers hit the enemy over and over again, we want to be able to render the red in the hp bar. This is the damage stored before the enemy gets a "streak" of hits dealt to it
        this.ticksSinceLastDamaged = 1001; // set to 0 when damaged. 


        this.damageCount = 0;
        this.damageCountCooldown = 0;

        this.type = init.type;
        this.rarity = init.rarity;

        for (let key in init) {
            this[key] = init[key];
        }

        this.toRenderUi = init.toRenderUi ?? !noRenderingUi.includes(this.type);

        this.radius = init.radius;

        if (enemyDataMap[this.type] !== undefined) {
            this.data = enemyDataMap[this.type](this);
        }

        this.dead = false;
        this.deadAnimationTimer = 0;

        this.xv = 0;
        this.yv = 0;

        this.team = init.team;

        this.render = {};
        for (let i = 0; i < enemyInterpolateKeys.length; i++) {
            this.render[enemyInterpolateKeys[i]] = this[enemyInterpolateKeys[i]];
        }
        this.render.angle = this.angle;
        this.render.radius = 0;
        if (![
            "Ladybug",
            "Cactus",
            "Bee",
            "Hornet",
            "Ant Hole",
            "Rock",
            "RockTank",
            "RockMissile",
            "Sandstorm",
            "Shiny Ladybug",
            "Cactus",
            "Fire Ant Burrow",
            "Centipede",
            "Evil Centipede",
            "Evil Desert Centipede",
            "Desert Centipede",
            "Dark Ladybug",
            "UrchinMissile",
            "LocustMissile",
            "FireMissile",
            "Ocean Ladybug",
            "Shiny Plastic",
            "Plastic",
            "BossRose",
            "Dandelion",
            "DandelionMissile",
            "Soil",
            "BeeMissile",
            "BossUrchinMissile",
            "BigBossUrchinMissile",
        ].includes(this.type)) {
            this.render.lastX = this.render.x;
            this.render.lastY = this.render.y;
            this.render.time = 0;
        }

        if (this.type === 'Locust') {
            this.createdTime = performance.now();
            this.locustLastMoveTime = 0;
        }

        this.isHovered = false;
        this.statsBoxAlpha = 0;
        this.statsBox = null;
    }
    update(data, startInd) {
        if (this.type === 'Locust' && performance.now() - this.createdTime > 200 /*to prevent initial spawning displacement*/) {
            // x and y
            this.xv = (data[startInd + 1] - this.x) / 10;
            this.yv = (data[startInd + 2] - this.y) / 10;
            if (Math.sqrt(this.xv ** 2 + this.yv ** 2) > 0.1) {
                this.locustLastMoveTime = performance.now();
            }
        }
        for (let i = startInd; i < enemyPackKeys.length + startInd; i++) {
            this[enemyPackKeys[i - startInd]] = data[i];
        }
        return startInd + enemyPackKeys.length;
        // let toInferAngle = Math.abs(this.xv) < .1 && Math.abs(this.yv) < .1;
        // if(toInferAngle === true && pack.x !== undefined && pack.y !== undefined){
        // 	// if(this.hasInitAngle !== true){
        // 	// 	this.hasInitAngle = true;
        // 	// 	this.angle = Math.atan2(pack.y - this.y, pack.x - this.x);
        // 	// } else {
        // 		this.angle = interpolateDirection(this.angle, Math.atan2(pack.y - this.y, pack.x - this.x), 0.2);
        // 	// }
        // }
        // if(pack.dead !== undefined){
        // 	console.log('die');
        // }
        // if (pack.hp !== undefined && pack.hp < this.hp) {
        // 	this.updateRenderDamage(pack.hp);
        // }
        // //temp before Serum fixes
        // for (let key in pack) {
        // 	this[key] = pack[key];
        // }

        // if(toInferAngle === false){
        // 	this.angle = Math.atan2(this.yv, this.xv);
        // }
        // this.render.x = this.x//pack.x;
        // this.render.y = this.y//pack.y;
        // this.render.radius = this.radius;
    }
    updateInterpolate() {
        for (let i = 0; i < enemyInterpolateKeys.length; i++) {
            this.render[enemyInterpolateKeys[i]] = interpolate(this.render[enemyInterpolateKeys[i]], this[enemyInterpolateKeys[i]], enemyInterpolateMagnitudes[i] * dt / 16.66);
        }
        this.render.angle = interpolateDirection(this.render.angle, this.angle, 0.12); // this should probably be a lot higher than 0.08, test it out to look the same as florr once we get random move and turn motion working
        if (this.render.radius < .01) {
            this.render.radius = .01;
        }
    }
    updateRenderDamage(damage) {
        this.ticksSinceLastDamaged = 0;
        this.lastTicksSinceLastDamaged = 0;
        this.previousTakenDamage = damage;
    }
    drawStatsBox(drawBelow = false, rarityOverride = false) {
        if (window.statBoxes === false) {
            return;
        }
        if (this.isHovered === true) {
            if (this.statsBox === null && window.enemyStats[this.customType ?? this.type] !== undefined) {
                const last = {
                    rarity: this.rarity,
                    x: this.x,
                    y: this.y,
                    radius: this.radius,
                    render: {
                        x: this.render.x,
                        y: this.render.y,
                        radius: this.render.radius
                    }
                };
                this.x = this.render.x = this.y = this.render.y = 0;
                this.radius = this.render.radius = 17;

                const rarity = this.rarity = rarityOverride ? this.rarity : Math.max(3, Math.min(12, Math.floor(Math.random() * (maxRarityObtained + 1.99))));
                const stats = window.structuredClone(window.enemyStats[this.customType ?? this.type]); // {health, damage, mass, speed}
                const scalars = enemyRarityScalars[rarity];

                stats.xp = scalars.xp;
                stats.health *= scalars.health;
                stats.damage *= scalars.damage;

                if (this.type == "Starfish") {
                    stats.healing = formatAmountHighPrecision(Math.round(stats.health * 0.007 * 30 * 100) / 100) + "/s"
                }
                if (this.type == "Jellyfish") {
                    stats.lightningDamage = Math.round(stats.damage * 1.5 * 1000) / 1000
                }

                if (stats.poison) {
                    stats.poison[0] = Math.round(stats.poison[0] * scalars.damage * 1000) / 1000;
                    stats.poison[1] = Math.round(stats.poison[1] * scalars.damage * 1000) / 1000;
                }
                if (stats.detectionDistance) {
                    stats.detectionDistance *= scalars.detectionDistance;
                }
                stats.mass *= scalars.mass;
                this.statsBox = generateStatsBox(new PetalContainer([this], {
                    x: 0,
                    y: 0,
                    w: 50,
                    h: 50,
                    toOscillate: false,
                    amount: 1,
                    petalStats: stats
                }, Math.random(), 1, 0), false, {
                    x: 0,
                    y: 0
                })
                this.statsBox.pc.amount = 1;
                this.x = last.x;
                this.render.x = last.render.x;
                this.y = last.y;
                this.render.y = last.render.y;
                this.radius = last.radius;
                this.render.radius = last.render.radius;
                this.rarity = last.rarity;
            }
            this.statsBoxAlpha += 0.15 * dt / 18;
            if (this.statsBoxAlpha > 1) {
                this.statsBoxAlpha = 1;
            }

            ctx.globalAlpha = this.statsBoxAlpha;
        } else {
            this.statsBoxAlpha -= 0.15 * dt / 18;
            if (this.statsBoxAlpha < 0) {
                this.statsBoxAlpha = 0;
            }
        }
        if (this.statsBoxAlpha !== 0 && this.statsBox !== null) {
            this.statsBox.x = this.render.x - this.statsBox.w / 2
            this.statsBox.y = drawBelow ?
                this.render.y + this.radius / 2 + 11.5 :
                this.render.y - this.statsBox.h - this.radius - 11.5;
            if (drawBelow === false && this.statsBox.y < 0) {
                this.drawStatsBox(true);
                return;
            }
            ctx.globalAlpha = this.statsBoxAlpha;
            this.statsBox.draw();
            ctx.globalAlpha = 1;
        }
        this.isHovered = false;
    }
    draw() {
        this.updateInterpolate();

        if (this.isInEnemyBox === undefined && toRender({
            x: this.render.x,
            y: this.render.y,
            radius: this.render.radius * 4 /*for hp bar*/
        }, window.camera) === false && this.toRenderUi === true) {
            if (this.dead === true) {
                this.deadAnimationTimer += dt;
            }
            return;
        }

        // const hashDistance = 500;
        // ctx.globalAlpha = 0.5;
        // if(this.hashData !== undefined){
        //     // console.log(this.hashData);
        //     for(let x = this.hashData.top.x; x <= this.hashData.bottom.x; x++){
        //         for(let y = this.hashData.top.y; y <= this.hashData.bottom.y; y++){
        //             ctx.fillStyle = 'blue';
        //             ctx.beginPath();
        //             ctx.arc(x*hashDistance-4000,y*hashDistance-4000,8,0,Math.PI * 2);
        //             ctx.fill();
        //             ctx.closePath();
        //             ctx.globalAlpha = 0.1;
        //             ctx.fillRect(x*hashDistance-4000,y*hashDistance-4000,hashDistance,hashDistance);
        //             ctx.globalAlpha = 0.5;
        //         }
        //     }
        // }
        // ctx.globalAlpha = 1;

        this.lastTicksSinceLastDamaged = this.ticksSinceLastDamaged;
        if (this.ticksSinceLastDamaged == 0) {
            if (this.resetDamageCount) {
                this.damageCount = 0;
                this.resetDamageCount = false;
            }
            this.damageCount += this.previousTakenDamage;
            this.damageCountCooldown = 240;
        }
        if (this.damageCountCooldown < 0) {
            this.resetDamageCount = true;
        }
        this.damageCountCooldown -= dt;


        this.ticksSinceLastDamaged += dt;
        if (this.ticksSinceLastDamaged > 166) {
            this.beforeStreakHp = this.hp;
        }
        // we shouldn't need this because we wont be modifying this.render during the drawing? Idk js gc gives me nightmares
        // let translateX = this.render.x;
        // let translateY = this.render.y;
        ctx.translate(this.render.x, this.render.y);
        if (this.dead === true) {
            var scalar = 1 + smoothstep(Math.log10(this.deadAnimationTimer * 0.0432 + 1)) * 0.6;
            this.deadAnimationTimer += dt;
            ctx.scale(scalar, scalar);
            ctx.globalAlpha = smoothstep(Math.max(0, 1 - Math.cbrt(this.deadAnimationTimer * 0.0048)));
            if (this.type === 'Custom') {
                window.alphaMult = ctx.globalAlpha;
            }
        }

        let oldAlpha;
        if (this.opacityMultiplier != undefined) {
            if (this.opacityMultiplier != 1) {
                oldAlpha = ctx.globalAlpha;
                if (isNaN(oldAlpha)) oldAlpha = 1;
                ctx.globalAlpha = oldAlpha * this.opacityMultiplier
            }
        }

        // fade in animation stuff happens here
        if (enemyRenderMap[this.type]) {
            enemyRenderMap[this.type](this);
        } else {
            enemyRenderMap.default(this);
        }
        if (this.toRenderUi === true && (this.rarity > 3 || this.team == "flower" || (flowrMod.alwaysShowHp === true && this.rarity > -1))) {
            enemyRenderMapText(this, true);
        } else if (this.toRenderUi === true) {
            enemyRenderMapText(this, false);
        }

        if (oldAlpha) {
            ctx.globalAlpha = oldAlpha;
        }

        if (this.dead === true) {
            ctx.scale(1 / scalar, 1 / scalar);
            ctx.globalAlpha = 1;
            if (this.type === 'Custom') {
                delete window.alphaMult;
            }
        }
        ctx.translate(-this.render.x, -this.render.y);
    }
    // basically predicting what'll happen on server side. This isn't correct but it'll work for now. Also x and y should always be sent if movement changes (if xv/yv != 0) so it wont desync
    // simulate(room) {
    // 	if (this.dead === true) {
    // 		return;
    // 	}

    // 	this.x += this.xv;
    // 	this.y += this.yv;
    // }
}

Petal = class Petal {
    constructor(init) {
        if (petalRenderMap[init.type] === undefined && editorPetalShapesMap[init.type] !== undefined) {
            return new Petal({ ...init, type: "Custom", customType: init.type });
        }
        for (let key in init) {
            this[key] = init[key];
        }

        this.render = {};
        this.render.distance = this.distance;
        this.render.angle = this.angle;
        this.selfAngle = this.angle;
        this.render.x = this.x;
        this.render.y = this.y;
        this.render.reload = this.reload;
        this.render.hp = this.hp;

        this.dying = false;
        this.deadAnimationTimer = 9999;


        if (init.dead === true) {
            this.firstDeadFlag = true;
        }

        this.ticksSinceLastDamaged = 9999;

        this.insidePetalContainer = false;

        this.isProjectile = false;

        if (window.isEditor) this.time = 0;

        // if(init.isSwappedPetal === true){
        //     console.log('xd');
        //     this.hp = -1;
        //     this.dead = true;
        //     this.dying = false;
        //     this.deadAnimationTimer = 9999;
        //     delete this.deadPosition;
        //     this.ticksSinceLastDamaged = 9999;
        // }

        this.particles = {}

        this.ticksAlive = 0
    }
    update(data, parent) {
        // if((data.hp !== undefined && data.hp < this.hp) || data.dead === true){
        //     this.updateRenderDamage(data.hp);
        // }
        if (data.takeDamage === true && this.shotFlag !== true) {
            this.updateRenderDamage();
            this.render.hp = data.hp;
        }
        for (let key in data) {
            this[key] = data[key];
        }

        if (data.dead === true) {
            this.render.reload = this.maxReload;
            if (this.firstDeadFlag !== undefined) {
                delete this.firstDeadFlag;
                return;
            }

            if (this.shotFlag === true) {
                delete this.shotFlag;
                this.dead = true;
                this.dying = false;
                this.deadAnimationTimer = 9999;
                delete this.deadPosition;
                this.ticksSinceLastDamaged = 9999;
                return;
            }
            // reason we don't find the shortest angle dist is because we wanna compare numbers straightforwardly
            // also if its negative then parent.petalRotateSpeed will also be negative which is fine
            this.dead = false;
            this.dying = true;
            this.deadAnimationTimer = 0;
            this.deadPosition = { x: this.x, y: this.y }; // making petals stay where they were when they die
            // this.deadAnimationTimer = -(this.angle-this.render.angle)/parent.petalRotateSpeed// * 1000 / 30;
            // this.dead = false;
            // this.dying = true;
            // this.deadAnimationTimer = 0;

            this.ticksAlive = 0
        }
        else if (data.dead === false) {
            this.dead = false;
            this.dying = false;
            this.deadAnimationTimer = 9999;
            this.selfAngle = this.render.angle;
        }

        if (this.dead === false) {
            this.ticksAlive++
        }
    }
    updateRenderDamage(hp) {
        this.ticksSinceLastDamaged = 0;
        this.lastTicksSinceLastDamaged = 0;
    }
    updateInterpolate(parent) {
        if (this.isProjectile === true || (this?.stats?.code !== undefined && this.hasNormalPetalSimulate === undefined)) {
            if (window.isEditor && this.deadPosition !== undefined) return;
            this.render.x = interpolate(this.render.x, this.x, 0.08 * dt / 16.66);
            this.render.y = interpolate(this.render.y, this.y, 0.08 * dt / 16.66);
            this.selfAngle = interpolateDirection(this.selfAngle, this.render.selfAngle, 0.08 * dt / 16.66);
            return;
        }

        // stuff that isn't sent in the updatepack
        this.angle = parent.petalRotation + this.angleOffset//this.id / parent.petals.length * Math.PI * 2;

        let offsetAngle = this.offset.angle;
        if (this.stickParentRotation) {
            offsetAngle += this.angle;
        }

        this.x = parent.baseX + Math.cos(this.angle) * (this.distance) + Math.cos(offsetAngle) * this.offset.distance;
        this.y = parent.baseY + Math.sin(this.angle) * (this.distance) + Math.sin(offsetAngle) * this.offset.distance;

        if (this.slowInterpolateDistance === true) {
            this.render.distance = interpolate(this.render.distance, this.distance, Math.max(0.01, this.render.distance / this.distance / 10) * dt / 16.66);
        } else {
            this.render.distance = interpolate(this.render.distance, this.distance, .64 * dt / 16.66)
        }

        this.render.angle = interpolateDirection(this.render.angle - parent.petalLag, this.angle, 0.08 * dt / 16.66) + parent.petalLag;

        if (this.dead === false && this.deadPosition !== undefined) {
            delete this.deadPosition;
        }
        if (this.deadPosition !== undefined) {
            this.render.x = interpolate(this.render.x, this.deadPosition.x, 0.13 * dt / 16.66);
            this.render.y = interpolate(this.render.y, this.deadPosition.y, 0.13 * dt / 16.66);
        } else {
            this.render.x = interpolate(this.render.x, parent.render.baseX + Math.cos(this.render.angle) * (this.render.distance) + Math.cos(offsetAngle) * this.offset.distance, 0.26 * dt / 16.66);
            this.render.y = interpolate(this.render.y, parent.render.baseY + Math.sin(this.render.angle) * (this.render.distance) + Math.sin(offsetAngle) * this.offset.distance, 0.26 * dt / 16.66);
        }
        this.render.reload = interpolate(this.render.reload, this.reload, 0.13 * dt / 16.66);
        this.render.hp = interpolate(this.render.hp, this.hp, 0.13 * dt / 16.66);

        if (petalRotationNaturalRotate[this.type]) {
            this.selfAngle += petalRotationNaturalRotate[this.type] * dt;
        }
        if (petalRotationStickToParent.includes(this.type)) {
            this.selfAngle = Math.atan2(this.render.y - parent.render.y, this.render.x - parent.render.x)
        }
        if (this.type === 'Custom') {
            this.selfAngle = Math.atan2(this.render.y - parent.render.y, this.render.x - parent.render.x);
        }
        if (this.type === "Compass" || this.type === "Dark Compass") {
            if (!this.lastCheckedTime) {
                this.lastCheckedTime = 0;
            }
            if (time > this.lastCheckedTime + 2000) {
                this.selfAngle = Math.random() * Math.PI * 2;
                this.lastCheckedTime = time;
            }
        }

    }
    // simulate(parent){
    //     // ANGLE
    //     this.angle = parent.petalRotation + this.angleOffset//this.id / parent.petals.length * Math.PI * 2;

    //     // // DISTANCE
    //     // // florr petals seem to behave like springs
    //     // // hookes law => just apply a force proportional to the distance
    //     // this.dv += (parent.petalDistance - this.distance) * dt / 1000 / 2;
    //     // this.dv *= 0.9 ** dt;

    //     // this.dv += (parent.petalDistance - this.distance) / 4.85;
    //     let petalDistance = parent.petalDistance;
    //     if(parent.attacking === true){
    //         if(this.attackDistanceMult !== undefined){
    //             petalDistance *= this.attackDistanceMult
    //         }
    //     } else if(parent.defending === true){
    //         if(this.defendDistanceMult !== undefined){
    //             petalDistance *= this.defendDistanceMult;
    //         }
    //     } else {
    //         if(this.neutralDistanceMult !== undefined){
    //             petalDistance *= this.neutralDistanceMult;
    //         }
    //     }

    //     this.dv += (petalDistance/*parent.petalDistance*/ - this.distance) / 4.85; 

    //     this.distance += this.dv;

    //     // this.dv += (parent.petalDistance - this.distance) * dt / 1000 / 2;
    //     // this.distance = parent.petalDistance;
    //     // this.dv *= 0.9 ** dt;

    //     // this.x = parent.x + Math.cos(this.angle + this.offset.angle) * (this.distance + this.offset.distance);
    //     // this.y = parent.y + Math.sin(this.angle + this.offset.angle) * (this.distance + this.offset.distance);

    //     this.x = parent.x + Math.cos(this.angle) * (this.distance) + Math.cos(this.offset.angle) * this.offset.distance;
    //     this.y = parent.y + Math.sin(this.angle) * (this.distance) + Math.sin(this.offset.angle) * this.offset.distance;

    //     this.dv *= 0.68;

    //     // this.render.x = this.renderX;
    //     // this.render.y = this.renderY;
    //     // consolp.log(parent.render.x, this.render.angle, this.render.distance, this.renderX)
    // }
    // petals dont transmit any data! its just intercepted by the parent
    // pack() {
    //     return;
    // }
    draw() {
        this.lastTicksSinceLastDamaged = this.ticksSinceLastDamaged;
        this.ticksSinceLastDamaged += dt;

        if (this.dead === true) {
            if (this.dying === true) {
                this.deadAnimationTimer += dt;
                if (this.deadAnimationTimer > 166) {
                    this.deadAnimationTimer = 0;
                    this.dead = true;
                    this.dying = false;
                    delete this.deadPosition;
                }
            }
            return;
        }

        ctx.translate(this.render.x, this.render.y);
        if (this.dying === true) {
            // if(this.deadAnimationTimer >= 0 && this.deadAnimationTimer <= 1){
            //     this.updateRenderDamage(this.hp);
            // }
            var scalar = 1 + Math.cbrt(Math.log10(Math.max(1, this.deadAnimationTimer / 16.6))) * 0.6;
            ctx.globalAlpha = Math.max(0, 1 - this.deadAnimationTimer / 166);
            if (this.type === "Custom") {
                window.alphaMult = ctx.globalAlpha;
            }
            ctx.scale(scalar, scalar);
        } else if (this.scaleMult !== undefined) {// else if because petals will never be dying while in their container
            ctx.scale(this.scaleMult, this.scaleMult);
        }

        ctx.rotate(this.selfAngle);

        if (petalRenderMap[this.type]) petalRenderMap[this.type](this);
        else console.log(this.type);

        ctx.rotate(-this.selfAngle);

        if (this.dying === true) {
            ctx.scale(1 / scalar, 1 / scalar);
            ctx.globalAlpha = 1;
            if (this.deadAnimationTimer > 166) {
                this.deadAnimationTimer = 0;
                this.dead = true;
                this.dying = false;
                delete this.deadPosition;
            }
        } else if (this.scaleMult !== undefined) {
            ctx.scale(1 / this.scaleMult, 1 / this.scaleMult);
        }
        ctx.translate(-this.render.x, -this.render.y);

        if (window.alphaMult !== undefined) {
            delete window.alphaMult;
        }

        if (this.insidePetalContainer === false) {
            /*renderHitbox({ x: this.render.x, y: this.render.y, radius: this.radius, rarity: this.rarity })*/
            if (this.rarity > 6 && flowrMod.superGlow === true && this.type !== "WebProjectileWeb") {

                // tech particle
                // triangle with arc at the end
                // tip of triangle gets "dragged" as the petal moves

                if (Object.keys(this.particles).length < 10) {
                    this.particles[Object.keys(this.particles).length] = {
                        x: this.render.x + (Math.floor(Math.random()) === 1 ? Math.random() * this.radius : -Math.random() * this.radius),
                        y: this.render.y + (Math.floor(Math.random()) === 1 ? Math.random() * this.radius : -Math.random() * this.radius),
                        yVel: Math.floor(Math.random() * 2) === 1 ? Math.random() : -Math.random(),
                        xVel: Math.floor(Math.random() * 2) === 1 ? Math.random() : -Math.random(),
                        initialRadius: (Math.random() + 1) * 2,
                        radius: (Math.random() + 1) * 2
                    }
                }
                for (let i of Object.keys(this.particles)) {
                    ctx.beginPath();
                    ctx.fillStyle = "#ffffff"
                    ctx.globalAlpha *= 0.75 * (this.particles[i].radius / (this.particles[i].initialRadius * 2))
                    ctx.arc(this.particles[i].x, this.particles[i].y, this.particles[i].radius, 0, Math.PI * 2)
                    ctx.fill();
                    ctx.closePath();
                    ctx.globalAlpha *= 1 / (0.75 * (this.particles[i].radius / (this.particles[i].initialRadius * 2)))
                    this.particles[i].x += this.particles[i].xVel
                    this.particles[i].y += this.particles[i].yVel
                    if (this.particles[i].radius / this.particles[i].initialRadius < 0.5) {
                        this.particles[i] = {
                            x: this.render.x + (Math.floor(Math.random()) === 1 ? Math.random() * this.radius : -Math.random() * this.radius),
                            y: this.render.y + (Math.floor(Math.random()) === 1 ? Math.random() * this.radius : -Math.random() * this.radius),
                            yVel: Math.floor(Math.random() * 2) === 1 ? Math.random() : -Math.random(),
                            xVel: Math.floor(Math.random() * 2) === 1 ? Math.random() : -Math.random(),
                            initialRadius: (Math.random() + 1) * 2,
                            radius: (Math.random() + 1) * 2
                        }
                    } else {
                        this.particles[i].radius -= 0.1
                    }
                }
            }
        }
    }
    updateTimer() {
        if (this.dying === true) {
            this.deadAnimationTimer += dt;
        }
    }
}

class SquadUI {
    constructor() {
        this.clients = [];
        this.w = 446;
        this.h = 0;
        this.minimizedHeight = 46;
        this.baseHeight = this.h;//this.h;
        this.minimized = true;

        this.initRenderTimer = 0;

        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverQuickJoin = false;

        this.public = true;

        this.selfId = null;

        this.startingWaveSlider = 1;
        this.desiredSWS = 1;
        this.draggingSlider = false;
        this.maxStartingWave = 1;
        this.startingWave = this.maxStartingWave;

        this.is1v1 = false
    }
    reset() {
        this.clients = [];
        this.is1v1 = false;
        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverQuickJoin = false;
        this.hoveringOverJoinMainPvp = false;

        this.public = true;

        delete this.lastUnMinimizedTimer;
        delete window.squadUICloseTime;
        delete this.selfIdSentFlag;

        this.h = 0;
    }
    removeAllClients() {
        this.clients = [];
    }
    startGame() {
        this.hoveringOverX = false;
        this.hoveringOverPublic = false;
        this.hoveringOverNew = false;
        this.hoveringOverPrivate = false;
        this.hoveringOverQuickJoin = false;

        this.clients = [];
        this.h = 0;
        this.minimized = true;
        window.squadUIEnabled = false;
    }
    recieveData(init) {
        this.selfId = init.selfId;
        // console.log(init);
        // ss
        // return {
        //     clients: this.clients.map(c => {
        //         return {name: c.name, id: c.id};
        //     })
        // }
        // for(let i = 0; i < init.clients.length; i++){
        //     if(this.clients[i] === undefined){
        //         this.clients[i] = {};
        //     }
        //     this.clients[i].name = init.clients[i].name;
        //     this.clients[i].id = init.clients[i].id;
        // }
        // this.clients = init.clients;
        for (let i = 0; i < init.clients.length; i++) {
            this.addClient(init.clients[i]);
            // if(this.clients[i] === undefined){
            //     this.clients[i] = this.createClient();
            // }
            // if(this.clients[i].ready !== init.clients[i].ready){
            //     if(this.clients[i].ready === true){
            //         // fade out
            //         this.clients[i].lastReadyDisableTime = performance.now();
            //     } else {
            //         // fade in
            //         this.clients[i].lastReadyEnableTime = performance.now();
            //     }
            // }
            // for(let key in init.clients[i]){
            //     this.clients[i][key] = init.clients[i][key];
            // }
            // // console.log(init.clients[i]);
            // if(init.clients[i].petals){
            //     this.updateFlowerPetals(init.clients[i].petals, this.clients[i].id);
            // }

            // console.log({[i]:this.clients[i].petals});
        }

        if (this.clients.length > init.clients.length) {
            for (let i = 0; i < this.clients.length; i++) {
                if (init.clients[i] === undefined) {
                    this.clients[i].removed = true;
                }
            }
            this.clients = this.clients.filter(c => c.removed !== true);
        }

        if (init.public === false) {
            this.public = false;
            biomeManager.switchToBiome(init.biome);
        } else {
            this.public = true;
        }

        // update
        if (savedStartingWave !== null) {
            this.desiredSWS = savedStartingWave / this.maxStartingWave;
        }

    }
    updateFlowerPetals(data, id) {
        if (id === this.selfId) {
            if (this.selfIdSentFlag === true) {
                return;
            }
            if (data.length > 0) {
                this.selfIdSentFlag = true;
            }
        }
        let cid;
        let client;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === id) {
                client = this.clients[i];
                cid = i;
            }
        }
        if (client === undefined) {
            return;
        }
        const f = client.flower;

        f.lastPetals = f.petals;
        f.petals = [];
        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;
        f.render.headX = canvas.w / 2 - this.w / 2 + outsidePadding + cid * (playerWidth + playerPadding) + playerWidth / 2;
        f.render.headY = canvas.h / 2 + this.h / 2 + 35 - 9;
        f.headX = f.render.headX;
        f.headY = f.render.headY;
        f.x = f.render.headX;
        f.y = f.render.headY;
        f.render.x = f.x;
        f.render.y = f.y;
        f.render.baseX = f.x;
        f.render.baseY = f.y;
        f.baseX = f.x;
        f.baseY = f.y;
        // f.fastAngleInitTimer = performance.now();

        for (let i = 0; i < data.length; i++) {
            const petal = f.petals[i] = new Petal(data[i]);
            petal.distance = neutralPetalDistance;
            petal.render.distance = 0;
            petal.updateInterpolate(f);
            petal.x = f.baseX;
            petal.y = f.baseY;
            petal.render.x = petal.x;
            petal.render.y = petal.y;
            petal.slowInterpolateDistance = true;
            if (f.lastPetals[i] !== undefined) {
                // petal.render.angle = f.lastPetals[i].render.angle;
                // petal.render.distance = f.lastPetals[i].render.distance;
                for (let key in f.lastPetals[i].render) {
                    petal.render[key] = f.lastPetals[i].render[key];
                }
                petal.angle = petal.render.angle;
            }
        }

        this.updateFlowerPetalContainers(f);

        delete f.lastPetals;
    }
    updateFlowerPetalContainers(f) {
        f.petalContainers = []//f.petalContainers.filter(pc => pc.toPreserve === true);
        let petalsInContainer = [];
        for (let i = 0; i < f.petals.length; i++) {
            //petals, {x,y,w,h,originalX,originalY,radius,toOscillate,isDragging,lastSlot}, id, amount, attempt
            // console.log(f.petals[i].subStackedId, f.petalContainers);
            if (f.petals[i].subId > 0 && f.petals[i].subStackedId === 0) {
                f.petalContainers[f.petalContainers.length - 1].petals.push(new Petal(f.petals[i]));
                continue;
            }
            petalsInContainer.push(f.petals[i]);
            if (f.petals[i].subStackedId === 0) {
                f.petalContainers.push(new PetalContainer(petalsInContainer.map(p => new Petal(p)), { x: 0, y: 0, w: 20, h: 20, originalX: 0, originalY: 0, radius: 100, toRenderText: false, toOscillate: false }, Math.random(), 1));
                petalsInContainer = [];

                const lastPC = f.petalContainers[f.petalContainers.length - 1];
                for (let i = 0; i < lastPC.petals.length; i++) {
                    lastPC.petals[i].angle = 0;
                    lastPC.petals[i].selfAngle = 0;
                }
                // if(!(i > lastPetalContainerLen)){
                //     lastPC.spawnAnimation = 1;
                // }
            }
        }
    }
    updateSelfFlowerPetals(menuInvPack/*= menuInventory.pack()*/) {
        // for selfId
        const client = this.findClient(this.selfId);
        const f = client.flower;
        if (client === undefined || f === undefined) return;
        f.petals = [];

        // plan: recreate server petal id system (stuff with like parentPetalId, petalContainerId, etc.)
        // and add those petals to the flower and then position petal slots the same way we do server side (crude implementation)

        for (let key in menuInvPack.top) {
            const pc = menuInvPack.top[key];
            for (let i = 0; i < pc.petals.length; i++) {
                const data = { ...pc.petals[i] };
                delete data.insidePetalContainer;
                data.petalContainerId = key;
                if (multiPetals[data.type] !== undefined) {// if this is a petal like light which has separated petals
                    data.subId = i;
                } else if (pc.petals.length > 1) {// if this is a petal like stinger which has connected petals
                    data.subStackedId = i;
                    data.subId = i;

                    data.offset = {};
                    data.offset.angle = data.subStackedId / pc.petals.length * Math.PI * 2;
                    data.offset.distance = data.radius;
                }
                f.petals.push(new Petal(data));
                const petal = f.petals[f.petals.length - 1];
                petal.distance = neutralPetalDistance;
                petal.render.distance = 0;
                petal.updateInterpolate(f);
                petal.x = f.baseX;
                petal.y = f.baseY;
                petal.render.x = petal.x;
                petal.render.y = petal.y;
                petal.slowInterpolateDistance = true;
            }
        }

        for (let key in menuInvPack.bottom) {
            const pc = menuInvPack.bottom[key];
            for (let i = 0; i < pc.petals.length; i++) {
                const data = { ...pc.petals[i] };
                delete data.insidePetalContainer;
                data.petalContainerId = key;
                if (multiPetals[data.type] !== undefined) {// if this is a petal like light which has separated petals
                    data.subId = i;
                } else if (pc.petals.length > 1) {// if this is a petal like stinger which has connected petals
                    data.subStackedId = i;
                    data.subId = i;

                    data.offset = {};
                    data.offset.angle = data.subStackedId / pc.petals.length * Math.PI * 2;
                    data.offset.distance = data.radius;
                }
                f.petals.push(new Petal(data));
                const petal = f.petals[f.petals.length - 1];
                petal.distance = neutralPetalDistance;
                petal.render.distance = 0;
                petal.updateInterpolate(f);
                petal.x = f.baseX;
                petal.y = f.baseY;
                petal.render.x = petal.x;
                petal.render.y = petal.y;
                petal.slowInterpolateDistance = true;
            }
        }

        // positioning petal slots
        const totalGroupedPetalsLength = f.petals.filter(p => p.subStackedId === 0).length;

        const randomAngle = Math.random() * Math.PI * 2;
        let index = 0;
        for (let i = 0; i < f.petals.length; i++) {
            if (f.petals[i].subStackedId === 0) {
                index++;
            }
            f.petals[i].id = i;
            f.petals[i].angle = index / totalGroupedPetalsLength * Math.PI * 2;
            f.petals[i].render.angle = randomAngle;
            f.petals[i].angleOffset = f.petals[i].angle;
        }

        this.updateSelfFlowerPetalContainers(f);
    }
    updateSelfFlowerPetalContainers(f) {
        const pcs = Object.values(menuInventory.topPetalContainers).concat(Object.values(menuInventory.bottomPetalContainers));

        f.petalContainers = pcs.map(p => new PetalContainer(p.petals, { x: 0, y: 0, w: 20, h: 20, originalX: 0, originalY: 0, radius: 100, toRenderText: false, toOscillate: false }, Math.random(), 1, 0));
    }
    startSliderDrag(x) {
        this.draggingSlider = true;
        this.updateSliderDrag(x);
    }
    intersectingSlider({ x, y }) {
        let ind = 0;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === this.selfId) {
                ind = i;
                break;
            }
        }
        ind = Math.min(3, ind);

        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;

        const sbounds = {
            x: canvas.w / 2 - this.w / 2 + outsidePadding + ind * (playerWidth + playerPadding) + 5,
            y: canvas.h / 2 + 35 + this.h * 0.15 + Math.max(0, this.h * 0.65 - 22),
            w: playerWidth - 5 * 2,
            h: (this.h * 0.03 + 34) * 2 + 6
        }

        const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);

        const sliderPos = {
            x: sliderX,
            y: sbounds.y + sbounds.h / 2
        }

        return (x - sliderPos.x) ** 2 + (y - sliderPos.y) ** 2 < 15 ** 2;
    }
    intersectingSliderBound({ x, y }) {
        let ind = 0;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === this.selfId) {
                ind = i;
                break;
            }
        }
        ind = Math.min(3, ind);


        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;

        const sbounds = {
            x: canvas.w / 2 - this.w / 2 + outsidePadding + ind * (playerWidth + playerPadding) + 5,
            y: canvas.h / 2 + 35 + this.h * 0.15 + Math.max(0, this.h * 0.65 - 22),
            w: playerWidth - 5 * 2,
            h: (this.h * 0.03 + 34) * 2 + 6
        }

        const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);

        const sliderPos = {
            x: sliderX,
            y: sbounds.y + sbounds.h / 2
        }

        let closestSliderX = x;
        if (closestSliderX < sbounds.x) closestSliderX = sbounds.x;
        if (closestSliderX > sbounds.x + sbounds.w) closestSliderX = sbounds.x + sbounds.w;

        return (x - closestSliderX) ** 2 + (y - sliderPos.y) ** 2 < 15 ** 2;
    }
    updateSliderDrag(x) {
        let ind = 0;
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === this.selfId) {
                ind = i;
                break;
            }
        }
        ind = Math.min(3, ind);


        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;
        const sbounds = {
            x: canvas.w / 2 - this.w / 2 + outsidePadding + ind * (playerWidth + playerPadding) + 5,
            w: playerWidth - 5 * 2,
        };

        let difX = x - sbounds.x;
        if (difX < 0) {
            difX = 0;
        } else if (difX > sbounds.w) {
            difX = sbounds.w;
        }

        this.desiredSWS = difX / sbounds.w;
    }
    endSliderDrag(x) {
        if (this.draggingSlider === false) return;
        this.updateSliderDrag(x);
        // send msg
        const startingWave = Math.max(1, Math.ceil(this.desiredSWS * this.maxStartingWave));
        send({ sw: startingWave });
        this.draggingSlider = false;

        if (startingWave !== this.maxStartingWave) {
            localStorage.setItem('startingWave', startingWave);
            savedStartingWave = startingWave;
        } else {
            localStorage.removeItem('startingWave');
            savedStartingWave = null;
        }
    }
    sendSavedStartingWave() {
        if (savedStartingWave === null) return;
        send({ sw: savedStartingWave });
    }
    render(dt) {
        this.is1v1 = (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1');
        let offset = window.usernames === true ? 20 : 0
        if (this.clients.length === 0) {
            this.minimized = true;
            this.baseHeight = this.minimizedHeight;
        } else {
            if (this.minimized === true) {
                this.lastUnMinimizedTimer = performance.now();
            }
            this.baseHeight = 280 + offset;
            // this.h = this.minimizedHeight;
            this.minimized = false;
        }
        this.buttonAlpha = 1;
        if (this.initRenderTimer < 180) {
            this.initRenderTimer += dt;
            this.h = Math.max(0.01, this.baseHeight * easeOutCubic(this.initRenderTimer / 180));
        }
        if (performance.now() - this.lastUnMinimizedTimer < 160) {
            this.h = this.minimizedHeight + offset + (280 - this.minimizedHeight) * easeOutCubic((performance.now() - this.lastUnMinimizedTimer) / 160);
            this.baseHeight = this.h;
        }
        if (window.squadUICloseTime !== undefined) {
            if (performance.now() - window.squadUICloseTime < 180) {
                this.buttonAlpha = Math.max(0, this.h / this.baseHeight);
                this.h = (1 - easeOutCubic((performance.now() - window.squadUICloseTime) / 180)) * this.baseHeight;
            } else {
                this.buttonAlpha = 0;
                delete window.squadUICloseTime;
                this.initRenderTimer = 0;
                window.squadUIEnabled = false;
            }
        }

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.roundRect(canvas.w / 2 - this.w / 2, canvas.h / 2 + 30, this.w, this.h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;

        const now = performance.now();
        const ratio = Math.max(0, Math.min(1, this.h / this.baseHeight));

        ctx.globalAlpha = this.buttonAlpha;

        // drawing bg
        for (let i = 0; i < Math.max(4, this.clients.length); i++) {
            if (this.minimized === true) continue;
            ctx.fillStyle = '#689ed6';
            ctx.strokeStyle = '#537fac';
            ctx.lineWidth = 5;// tbd

            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding), canvas.h / 2 + 35 + this.h * 0.15, playerWidth, Math.max(0, this.h * 0.65 - 22));
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            if (this.clients[i] !== undefined) {
                if (now - this.clients[i].creationTime < 400) {
                    ctx.globalAlpha = this.buttonAlpha * easeOutCubic((now - this.clients[i].creationTime) / 400);
                    ctx.translate(0, -(1 - easeOutCubic((now - this.clients[i].creationTime) / 400)) * this.h * 0.1);
                }
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.letterSpacing = "-.05px";
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = `900 ${18 * ratio}px 'Ubuntu'`;

                const clientName = this.clients[i].name === '' ? 'Unnamed' : this.clients[i].name;
                let clientUser = this.clients[i].username === '' ? 'undefined' : this.clients[i].username

                let textWidth = ctx.measureText(clientName).width;
                if (textWidth > playerWidth - playerPadding * 2) {
                    ctx.font = `900 ${18 * ratio * (playerWidth - playerPadding * 2) / textWidth}px 'Ubuntu'`;
                    ctx.lineWidth = 4 * (playerWidth - playerPadding * 2) / textWidth
                }

                ctx.globalAlpha = this.buttonAlpha * 0.8;
                ctx.strokeText(clientName, canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.05);
                ctx.globalAlpha = this.buttonAlpha * 1;
                ctx.fillText(clientName, canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.05);

                if (window.usernames === true) {
                    textWidth = ctx.measureText(clientUser).width;
                    if (textWidth > playerWidth - playerPadding * 2) {
                        ctx.font = `900 ${14 * ratio * (playerWidth - playerPadding * 2) / textWidth}px 'Ubuntu'`;
                        ctx.lineWidth = 4 * (playerWidth - playerPadding * 2) / textWidth
                    }
                    ctx.fillStyle = "#cccccc"

                    ctx.globalAlpha = this.buttonAlpha * 0.8;
                    ctx.strokeText(clientUser, canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.05 + 18);
                    ctx.globalAlpha = this.buttonAlpha * 1;
                    ctx.fillText(clientUser, canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.05 + 18);
                }

                ctx.globalAlpha = this.buttonAlpha * 1;
                if (now - this.clients[i].creationTime < 400) {
                    ctx.translate(0, (1 - easeOutCubic((now - this.clients[i].creationTime) / 400)) * this.h * 0.1);
                }
            }
        }

        ctx.globalAlpha = 1;

        window.camera.disableCulling = true;

        // drawing flowers after in a sep loop
        for (let i = 0; i < Math.max(4, this.clients.length); i++) {
            if (this.minimized === true || this.clients[i] === undefined) continue;
            const f = this.clients[i].flower;

            // petal boxes
            const bounds = {
                x: canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding),
                y: canvas.h / 2 + 35 + this.h * 0.15 + 22 + offset,
                w: playerWidth,
                h: this.h * 0.6 - 22
            }
            const petalContainersPerRow = 4;

            const petalContainerSize = 20;
            const petalContainerPadding = 2;
            const XEdgePadding = 5;
            const totalVertical = Math.floor((f.petalContainers.length - 1) / 4);
            // const lastHorizontalLength = f.petalContainers[i].length - Math.floor(f.petalContainers[i].length / 4) * 4;
            let renderIndex = 0;
            for (let i = 0; i < f.petalContainers.length; i++) {
                // not rendering stuff directly under the flower
                while ([9, 10, 13, 14,/*17,18*/].includes(renderIndex)) {
                    renderIndex++;
                }
                const pc = f.petalContainers[i];

                const verticalIndex = Math.floor(renderIndex / 4);

                pc.y = bounds.y + petalContainerSize / 2 + petalContainerPadding + (petalContainerSize + petalContainerPadding) * verticalIndex;
                pc.x = XEdgePadding + petalContainerSize / 2 + bounds.x + (renderIndex % petalContainersPerRow) * (petalContainerSize + petalContainerPadding);
                pc.render.x = pc.x;
                pc.render.y = pc.y;
                pc.spawnAnimation = 1;

                pc.draw();

                renderIndex++;
            }



            f.petalContainers = f.petalContainers.filter(p => p.collectTime === null || performance.now() - p.collectTime < 300);

            // flower
            f.render.headX = canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2;
            f.render.headY = canvas.h / 2 + this.h / 2 + 35 - 9 + offset - (window.usernames === true ? 7.5 : 0);;
            f.headX = f.render.headX;
            f.headY = f.render.headY;
            f.x = f.render.headX;
            f.y = f.render.headY;
            f.render.x = f.x;
            f.render.y = f.y;
            f.render.baseX = f.x;
            f.render.baseY = f.y;
            f.baseX = f.x;
            f.baseY = f.y;
            f.petalRotation += petalRotateSpeed / 40 * dt;

            ctx.translate(f.render.headX, f.render.headY);
            ctx.scale(.8, .8);
            ctx.translate(-f.render.headX, -f.render.headY);
            f.angle = Math.atan2(mouse.canvasY - f.render.headY, mouse.canvasX - f.render.headX);
            if (mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, bounds)) {
                // f.petalAlpha = .2;
                if (f.petalAlpha === undefined) {
                    f.petalAlpha = 1;
                }
                f.petalAlpha -= dt / 300;
                if (flowrMod.transparentPetals === true) {
                    if (f.petalAlpha < 0) {
                        f.petalAlpha = 0;
                    }
                } else {
                    if (f.petalAlpha < 0.37) {
                        f.petalAlpha = 0.37;
                    }
                }
            } else if (f.petalAlpha !== undefined) {
                f.petalAlpha += dt / 300;
                if (f.petalAlpha > 1) {
                    delete f.petalAlpha;
                }
            }

            f.draw();
            // delete f.petalAlpha;
            ctx.translate(f.render.headX, f.render.headY);
            ctx.scale(1.25, 1.25);
            ctx.translate(-f.render.headX, -f.render.headY);

            // starting waves
            if (this.clients[i].id !== this.selfId) {
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.letterSpacing = "-.05px";
                ctx.lineWidth = 3;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = `900 10px 'Ubuntu'`;
                const startingWave = Math.max(1, Math.ceil(this.clients[i].startingWave));
                const swTextPos = {
                    x: canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth / 2,
                    y: canvas.h / 2 + 35 + this.h * 0.15 + Math.max(0, this.h * 0.65 - 22) - 12
                }
                ctx.strokeText('Starting Wave: ' + startingWave, swTextPos.x, swTextPos.y);
                ctx.fillText('Starting Wave: ' + startingWave, swTextPos.x, swTextPos.y);
            }


            // drawing check / ready signal
            if (this.clients[i].ready === true || (now - this.clients[i].lastReadyDisableTime < 600)) {
                ctx.beginPath();
                ctx.translate(canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 15 - 7.5, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 15 - 7.5 - 12);
                ctx.translate(7.5, 7.5);
                if (now - this.clients[i].lastReadyEnableTime < 600) {
                    const animationTime = easeOutCubic((now - this.clients[i].lastReadyEnableTime) / 600);
                    ctx.rotate(Math.PI * 2 * animationTime);
                    ctx.globalAlpha = this.buttonAlpha * animationTime;
                }
                if (now - this.clients[i].lastReadyDisableTime < 600) {
                    const animationTime = 1 - easeOutCubic((now - this.clients[i].lastReadyDisableTime) / 600);
                    ctx.rotate(-Math.PI * 2 * animationTime);
                    ctx.globalAlpha = this.buttonAlpha * animationTime;
                }

                ctx.moveTo(-7.5, .5);
                ctx.lineTo(-3.5, 7.5);
                ctx.lineTo(7.5, -7.5);

                ctx.strokeStyle = 'black';
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.strokeStyle = '#1dd129';
                ctx.lineWidth = 2;
                ctx.stroke();

                if (now - this.clients[i].lastReadyDisableTime < 600) {
                    const animationTime = 1 - easeOutCubic((now - this.clients[i].lastReadyDisableTime) / 600);
                    ctx.rotate(Math.PI * 2 * animationTime);
                    ctx.globalAlpha = this.buttonAlpha * 1;
                }
                if (now - this.clients[i].lastReadyEnableTime < 600) {
                    const animationTime = easeOutCubic((now - this.clients[i].lastReadyEnableTime) / 600);
                    ctx.rotate(-Math.PI * 2 * animationTime);
                    ctx.globalAlpha = this.buttonAlpha * 1;
                }
                ctx.translate(-7.5, -7.5);
                // ctx.moveTo(canvas.w / 2 - this.w/2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 30 - 7.5, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 30 - 7.5 + 15);
                // ctx.lineTo(canvas.w / 2 - this.w/2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 30 - 7.5 + 15, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 30 - 7.5 + 30);
                // ctx.lineTo(canvas.w / 2 - this.w/2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 30 - 7.5 - 15, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 30 - 7.5);

                // ctx.roundRect(canvas.w / 2 - this.w/2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 30 - 7.5, canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 30 - 7.5, 30, 30);
                ctx.translate(-(canvas.w / 2 - this.w / 2 + outsidePadding + i * (playerWidth + playerPadding) + playerWidth - 15 - 7.5), -(canvas.h / 2 + 35 + this.h * 0.15 + this.h * 0.6 - 15 - 7.5 - 12));
                ctx.closePath();
            }
        }

        delete window.camera.disableCulling;

        ctx.globalAlpha = this.buttonAlpha;

        // starting wave
        if (this.minimized !== true) {
            this.startingWaveSlider = interpolate(this.startingWaveSlider, this.desiredSWS, 0.22);
            // ctx.fillStyle = '#689ed6';
            // ctx.strokeStyle = '#537fac';
            ctx.lineWidth = 5;

            // const sbounds = {
            //     x: canvas.w / 2 - this.w / 2 * 0.8,
            //     y: canvas.h / 2 + this.h - 18 * this.h / 280,
            //     w: this.w * 0.8,
            //     h: this.h * 0.1
            // };

            let ind = 0;
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].id === this.selfId) {
                    ind = i;
                    break;
                }
            }
            ind = Math.min(3, ind);


            const sbounds = {
                x: canvas.w / 2 - this.w / 2 + outsidePadding + ind * (playerWidth + playerPadding) + 5,
                y: canvas.h / 2 + 35 + this.h * 0.15 + Math.max(0, this.h * 0.65 - 22),
                w: playerWidth - 5 * 2,
                h: (this.h * 0.03 + 34) * 2 + 6
            }

            const sliderX = interpolate(sbounds.x, sbounds.x + sbounds.w, this.startingWaveSlider);

            const sliderPos = {
                x: sliderX,
                y: sbounds.y + sbounds.h / 2
            }

            ctx.fillStyle = '#689ed6';
            ctx.strokeStyle = '#537fac';
            ctx.beginPath();
            ctx.moveTo(sbounds.x, sbounds.y + sbounds.h / 2);
            ctx.lineTo(sbounds.x + sbounds.w, sbounds.y + sbounds.h / 2);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // hover effect
            if ((mouse.canvasX - sliderPos.x) ** 2 + (mouse.canvasY - sliderPos.y) ** 2 < 15 ** 2) {
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 0.1;
                ctx.beginPath();
                ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 12 + ctx.lineWidth / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;

                this.hoveringOverSlider = true;
            } else if (this.draggingSlider === true) {
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 0.1;
                ctx.beginPath();
                ctx.arc(sliderX, sbounds.y + sbounds.h / 2, 12 + ctx.lineWidth / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;
            }

            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.letterSpacing = "-.05px";
            ctx.lineWidth = 3;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = `900 14px 'Ubuntu'`;
            this.startingWave = Math.max(1, Math.ceil(this.maxStartingWave * this.startingWaveSlider));
            ctx.strokeText('Starting Wave: ' + this.startingWave, sbounds.x + sbounds.w / 2, sbounds.y + 17)
            ctx.fillText('Starting Wave: ' + this.startingWave, sbounds.x + sbounds.w / 2, sbounds.y + 17)

            // ctx.beginPath();
            // ctx.roundRect(canvas.w / 2 - this.w/2 * 0.8, canvas.h / 2 + this.h - 18 * this.h / 280, this.w * 0.8, this.h * 0.1);
            // ctx.fill();
            // ctx.stroke();
            // ctx.closePath();
        }

        // x in the corner - rectangle edition
        ctx.fillStyle = '#c1565e';
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30, canvas.h / 2 + 30 + 7.5, 30, 30 * ratio, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // the actual x
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(canvas.w / 2 + this.w / 2 - 7.5 - 30 + 7.5, canvas.h / 2 + 30 + 7.5 * ratio + 7.5);
        ctx.lineTo(canvas.w / 2 + this.w / 2 - 7.5 - 7.5, canvas.h / 2 + 30 + 7.5 * ratio - 7.5 + 15 + 15 * ratio);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(canvas.w / 2 + this.w / 2 - 7.5 - 7.5, canvas.h / 2 + 30 + 7.5 * ratio + 7.5);
        ctx.lineTo(canvas.w / 2 + this.w / 2 - 7.5 - 30 + 7.5, canvas.h / 2 + 7.5 * ratio - 7.5 + 15 + 30 + 15 * ratio);
        ctx.stroke();
        ctx.closePath();

        // hover effect
        this.hoveringOverX = false;
        if (mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 && mouse.canvasY > canvas.h / 2 + 30 + 7.5 && mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 && mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.1;
            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - ctx.lineWidth / 2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth / 2, 30 + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;

            this.hoveringOverX = true;
        }

        // buttons
        ctx.letterSpacing = "-.05px";
        ctx.font = `900 ${16 * ratio}px 'Ubuntu'`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const newButtonWidth = ctx.measureText('New').width;

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        // create new room
        ctx.beginPath();
        ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5, canvas.h / 2 + 30 + 7.5, 30 + newButtonWidth, 30 * ratio, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // ctx.fillStyle = '#f0f0f0';
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 4;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = newButtonWidth * 0.08866826452;// 3 at max

        // ctx.globalAlpha = 0.8;
        ctx.strokeText('New', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 7.5 - 30 + (30 + newButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);
        // ctx.globalAlpha = 1;
        ctx.fillText('New', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 7.5 - 30 + (30 + newButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        // hover
        // console.log(mouse.canvasX, canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5);
        if (
            mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 &&
            mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
            mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 + 30 + newButtonWidth &&
            mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio
        ) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha *= 0.1;
            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - ctx.lineWidth / 2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth / 2, 30 + newButtonWidth + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = this.buttonAlpha * 1;

            this.hoveringOverNew = true;
        } else {
            this.hoveringOverNew = false;
        }

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        // find public
        const publicButtonWidth = ctx.measureText('Find Public').width;
        ctx.beginPath();
        ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5, canvas.h / 2 + 30 + 7.5, 30 + publicButtonWidth, 30 * ratio, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // ctx.fillStyle = '#f0f0f0';
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 4;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.03603260836 * publicButtonWidth;// 3 at max

        // ctx.globalAlpha = 0.8;
        ctx.strokeText('Find Public', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + (30 + publicButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);
        // ctx.globalAlpha = 1;
        ctx.fillText('Find Public', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + (30 + publicButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);

        // hovering effect
        ctx.lineWidth = 5;
        if (
            mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 &&
            mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
            mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + 30 + publicButtonWidth &&
            mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio
        ) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha *= 0.1;
            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - ctx.lineWidth / 2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth / 2, 30 + publicButtonWidth + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = this.buttonAlpha * 1;

            this.hoveringOverPublic = true;
        } else {
            this.hoveringOverPublic = false;
        }

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;

        // TODO: get quickjoin and find private working

        // find private
        const privateButtonWidth = ctx.measureText('Private').width;
        ctx.beginPath();
        ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5, canvas.h / 2 + 30 + 7.5, 30 + privateButtonWidth, 30 * ratio, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // ctx.fillStyle = '#f0f0f0';
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 4;
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;

        // ctx.globalAlpha = 0.8;
        ctx.strokeText('Private', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 + (30 + privateButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);
        // ctx.globalAlpha = 1;
        ctx.fillText('Private', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 + (30 + privateButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);

        // hovering effect
        ctx.lineWidth = 5;
        if (
            mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) &&
            mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
            mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + 30 + privateButtonWidth - (30 + privateButtonWidth) &&
            mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio
        ) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.1;
            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - ctx.lineWidth / 2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth / 2, 30 + privateButtonWidth + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;

            this.hoveringOverPrivate = true;
        } else {
            this.hoveringOverPrivate = false;
        }

        if (this.is1v1 === true) {
            ctx.fillStyle = '#689ed6';
            ctx.strokeStyle = '#537fac';
            ctx.lineWidth = 5;
            // JOIN MAIN -- only for pvp
            // find private
            const joinMainBtnWidth = ctx.measureText('Join Main').width;
            ctx.beginPath();
            ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + joinMainBtnWidth) - 7.5, canvas.h / 2 + 30 + 7.5, 30 + joinMainBtnWidth, 30 * ratio, 3);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            // ctx.fillStyle = '#f0f0f0';
            // ctx.strokeStyle = 'black';
            // ctx.lineWidth = 4;
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;
            // ctx.globalAlpha = 0.8;
            ctx.strokeText('Join Main', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - (30 + joinMainBtnWidth) - 7.5 - 7.5 + (30 + joinMainBtnWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);
            // ctx.globalAlpha = 1;
            ctx.fillText('Join Main', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - (30 + joinMainBtnWidth) - 7.5 - 7.5 + (30 + joinMainBtnWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio) / 2);
            // hovering effect
            ctx.lineWidth = 5;
            if (
                mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - (30 + joinMainBtnWidth) - 7.5 &&
                mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
                mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + 30 + joinMainBtnWidth - (30 + privateButtonWidth) - (30 + joinMainBtnWidth) - 7.5 &&
                mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio
            ) {
                ctx.fillStyle = 'white';
                ctx.globalAlpha = 0.1;
                ctx.beginPath();
                ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + joinMainBtnWidth) - 7.5, canvas.h / 2 + 30 + 7.5, 30 + joinMainBtnWidth, 30 * ratio, 3);
                ctx.fill();
                ctx.closePath();
                ctx.globalAlpha = 1;
                this.hoveringOverJoinMainPvp = true;
            } else {
                this.hoveringOverJoinMainPvp = false;
            }
        }


        // ctx.fillStyle = "#bf8940"//`hsl(${performance.now()/300},50%,50%)`;//"#1dd129"//'#bf3434' //'#34a82a'//"#37612f"//"#79d669"//"#5D750C";//'#689ed6';
        // ctx.strokeStyle = "#9a6e33"//blendColor(ctx.fillStyle, "#000000", 0.19)//'#942828' //'#25751e'//"#0D5514"//'#537fac';
        // // console.log(ctx.fillStyle, ctx.strokeStyle);
        // ctx.lineWidth = 5;

        // // quick join
        // const quickJoinButtonWidth = ctx.measureText('Quick Join').width;
        // ctx.beginPath();
        // ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) - 7.5, canvas.h / 2 + 30 + 7.5, 30 + quickJoinButtonWidth, 30 * ratio, 3);
        // ctx.fill();
        // ctx.stroke();
        // ctx.closePath();

        // ctx.fillStyle = '#f0f0f0';
        // // ctx.strokeStyle = 'black';
        // // ctx.lineWidth = 4;
        // ctx.fillStyle = 'white';
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 3;

        // // ctx.globalAlpha = 0.8;
        // ctx.strokeText('Quick Join', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) - 7.5 + (30 + quickJoinButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio)/2);
        // // ctx.globalAlpha = 1;
        // ctx.fillText('Quick Join', canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) - 7.5 + (30 + quickJoinButtonWidth) / 2, canvas.h / 2 + 30 + 7.5 + (30 * ratio)/2);

        // // hovering effect
        // ctx.lineWidth = 5;
        // if(
        //     mouse.canvasX > canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) &&
        //     mouse.canvasY > canvas.h / 2 + 30 + 7.5 &&
        //     mouse.canvasX < canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 + 30 + publicButtonWidth - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) &&
        //     mouse.canvasY < canvas.h / 2 + 30 + 7.5 + 30 * ratio
        //     ){
        //     ctx.fillStyle = 'white';
        //     ctx.globalAlpha = 0.1;
        //     ctx.beginPath();
        //     ctx.roundRect(canvas.w / 2 + this.w / 2 - 7.5 - 30 - newButtonWidth - 30 - 7.5 - (30 + publicButtonWidth) - 7.5 - (30 + privateButtonWidth) - 7.5 - (30 + quickJoinButtonWidth) - 7.5 - ctx.lineWidth/2, canvas.h / 2 + 30 + 7.5 - ctx.lineWidth / 2, 30 + quickJoinButtonWidth + ctx.lineWidth, 30 * ratio + ctx.lineWidth, 3);
        //     ctx.fill();
        //     ctx.closePath();
        //     ctx.globalAlpha = 1;

        //     this.hoveringOverQuickJoin = true;
        // } else {
        //     this.hoveringOverQuickJoin = false;
        // }

        if (this.public === false) {
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 3;

            // (public)
            ctx.textAlign = 'right';
            ctx.textBaseline = 'bottom';
            ctx.strokeText('(Private)', canvas.w / 2 + this.w / 2 - 7.5, canvas.h / 2 + this.h - 7.5 + 30);
            ctx.fillText('(Private)', canvas.w / 2 + this.w / 2 - 7.5, canvas.h / 2 + this.h - 7.5 + 30);
            ctx.textAlign = 'middle';
            ctx.textBaseline = 'center';
        }

        if (flowrMod.clientCount === true) {
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            ctx.font = `900 14px 'Ubuntu'`;
            ctx.lineWidth = 3;
            ctx.strokeText(`Clients: ${this.clients.length}`, canvas.w / 2 - this.w / 2 + 7.5, canvas.h / 2 - 7.5 + 60);
            ctx.fillText(`Clients: ${this.clients.length}`, canvas.w / 2 - this.w / 2 + 7.5, canvas.h / 2 - 7.5 + 60);
            ctx.textAlign = 'middle';
            ctx.textBaseline = 'center';
        }

        ctx.fillStyle = '#689ed6';
        ctx.strokeStyle = '#537fac';
        ctx.lineWidth = 5;
        ctx.globalAlpha = 1;
    }
    createClient(id) {
        const c = { creationTime: performance.now(), flower: new Flower(id) };

        const f = c.flower;
        const playerWidth = (this.w - playerPadding * 3 - outsidePadding * 2) / 4;

        f.petalContainers = [];
        f.render.headX = canvas.w / 2 - this.w / 2 + outsidePadding + (this.clients.length) * (playerWidth + playerPadding) + playerWidth / 2;
        f.render.headY = canvas.h / 2 + this.h / 2 + 35 - 9;
        f.headX = f.render.headX;
        f.headY = f.render.headY;
        f.x = f.render.headX;
        f.y = f.render.headY;
        f.render.x = f.x;
        f.render.y = f.y;
        f.render.baseX = f.x;
        f.render.baseY = f.y;
        f.baseX = f.x;
        f.baseY = f.y;

        return c;
    }
    addClient(data) {
        this.clients.push(this.createClient(data.id));
        const client = this.clients[this.clients.length - 1];

        for (let key in data) {
            client[key] = data[key];
        }

        client.startingWave = data.sw;
        delete client.sw;

        if (data.petals) {
            this.updateFlowerPetals(data.petals, client.id);
        }

        if (data.id === this.selfId) {
            this.maxStartingWave = data.maxSW;
            this.desiredSWS = 1;
        }
    }
    updateStartingWave(id, sw, serverSaidSo = false) {
        if (id === this.selfId) {
            if (serverSaidSo) {
                this.maxStartingWave = sw;
                this.desiredSWS = 1;
            } else {
                this.startingWave = sw;
            }
        } else {
            const f = this.findClient(id);
            f.startingWave = sw;
        }
    }
    removeClient(id) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === id) {
                this.clients.splice(i, 1);
                return;
            }
        }
    }
    findClient(id) {
        for (let i = 0; i < this.clients.length; i++) {
            if (this.clients[i].id === id) {
                return this.clients[i];
            }
        }
        return {};
    }
}

squadUI = new SquadUI()

CollectedMenu = class CollectedMenu {
    constructor() {
        //this.calculateDimensions();

        this.petalContainers = {/*rarity: [petalName: PetalContainer]*/ };// same as globalInventory
    }
    addPetalContainer(p) {
        // this whole function is really inefficient lol. If you're ever bored then refactor ig.
        if (this.petalContainers[p.rarity] === undefined) {
            this.petalContainers[p.rarity] = [];
        }

        let previousStack = this.petalContainers[p.rarity].find(p2 => p2.type === p.type);
        if (previousStack !== undefined) {
            // console.log("omg op")
            previousStack.amount += p.amount;
            previousStack.lastAmountChangedTime = time;
        }
        else {
            p.w = 52;
            p.h = 52;
            p.collectedAnimation = 0;
            this.petalContainers[p.rarity].unshift(p);
        }

        this.petalContainers[p.rarity].sort();
    }
    calculateDimensions(mini) {
        const petalContainersPerRow = 4;
        const padding = 15;
        const offsetFromText = 40;
        const petalContainerSize = 50//(this.petalContainers[0] ?? {w: 0}).w;
        let totalPetalContainers = 0;

        for (let i = numberOfRarities - 1; i >= 0; i--) {
            if (this.petalContainers[i] === undefined) {
                continue;
            }
            totalPetalContainers += this.petalContainers[i].length;
        }

        if (!mini) {
            this.dimensions = {
                x: canvas.w - 340,
                y: 20,
                w: 320,
                h: 20 + 2 * padding + offsetFromText + petalContainerSize + Math.floor((totalPetalContainers - 1) / petalContainersPerRow) * (petalContainerSize + 12)
                //h: canvas.h * .94 - 40// levelbar is at canvas.h * .94. 20px of margin looks good
            }
        } else {
            this.dimensions = {
                x: canvas.w - 340,
                y: 20,
                w: 320,
                h: 20 + 2 * padding + offsetFromText + petalContainerSize + Math.floor((16 - 1) / petalContainersPerRow) * (petalContainerSize + 12)
                //h: canvas.h * .94 - 40// levelbar is at canvas.h * .94. 20px of margin looks good
            }
        }
        this.w = this.dimensions.w;
        this.h = this.dimensions.h;
    }
    draw(mini) {
        this.calculateDimensions(mini);

        ctx.fillStyle = 'black';
        ctx.lineWidth = 8;

        ctx.translate(this.dimensions.x, this.dimensions.y);

        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 5);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.closePath();

        const offsetFromText = 40;
        const petalContainersPerRow = 4;
        const padding = 15;
        const rightPadding = 15;// scroll bar is here so we need more
        const petalContainerSize = 50//(this.petalContainers[0] ?? {w: 0}).w;
        const sidePadding = 20;

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 24px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("Collected this run", this.w / 2, (padding + offsetFromText) / 2);
        ctx.fillText("Collected this run", this.w / 2, (padding + offsetFromText) / 2);

        if (!mini) {
            let renderIndex = 0;
            for (let i = numberOfRarities - 1; i >= 0; i--) {
                if (this.petalContainers[i] === undefined) {
                    continue;
                }
                for (let j = 0; j < this.petalContainers[i].length; j++) {
                    const petalContainer = this.petalContainers[i][j];
                    petalContainer.x = petalContainerSize / 2 + padding + sidePadding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow - 1) * (this.w - petalContainerSize - padding - rightPadding - 2 * sidePadding);
                    petalContainer.y = offsetFromText + padding + petalContainerSize / 2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12);
                    petalContainer.render.x = petalContainer.x;
                    petalContainer.render.y = petalContainer.y;
                    // petalContainer.x = canvas.w/2;
                    // petalContainer.y = canvas.h/2;
                    // console.log(petalContainer.x, petalContainer.y);

                    petalContainer.draw();
                    renderIndex++;
                }
            }
        } else {
            let containers = 0
            let renderIndex = 0;
            for (let i = numberOfRarities - 1; i >= 0; i--) {
                if (this.petalContainers[i] === undefined) {
                    continue;
                }
                for (let j = 0; j < this.petalContainers[i].length; j++) {
                    if (containers >= 16) {
                        continue;
                    }
                    const petalContainer = this.petalContainers[i][j];
                    petalContainer.x = petalContainerSize / 2 + padding + sidePadding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow - 1) * (this.w - petalContainerSize - padding - rightPadding - 2 * sidePadding);
                    petalContainer.y = offsetFromText + padding + petalContainerSize / 2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12);
                    petalContainer.render.x = petalContainer.x;
                    petalContainer.render.y = petalContainer.y;
                    // petalContainer.x = canvas.w/2;
                    // petalContainer.y = canvas.h/2;
                    // console.log(petalContainer.x, petalContainer.y);

                    petalContainer.draw();
                    renderIndex++;
                    containers++;
                    //console.log(containers)
                }
            }
        }

        // ctx.restore();
        ctx.translate(-this.dimensions.x, -this.dimensions.y);
    }
}

collectedMenu = new CollectedMenu();

Flower = class Flower {
    constructor(id) {
        this.id = id;

        // idea: since in florr there's kinda a separate position for the petals and camera and then the player, we need 
        this.x = 0;
        this.y = 0;

        this.baseX = 0;
        this.baseY = 0;

        // headX will be the thing that's actually moving, the normal x and y will interpolate towards it
        this.headX = 0;
        this.headY = 0;
        this.radius = 25;

        this.xv = 0;
        this.yv = 0;

        this.friction = 0.3;

        this.movementType = 'mouse';
        this.angle = 0;
        this.magnitude = 0;

        this.maxHp = 100;
        this.hp = 100;
        this.shield = 0;
        this.isPoisoned = 0; //false

        this.name = '';

        this.beforeStreakHp = this.maxHp;// if enemies hit the flower over and over again, we want to be able to render the red in the hp bar. This is the damage stored before the flower gets a "streak" of hits dealt to it
        this.ticksSinceLastDamaged = 1001;// set to 0 when damaged. 

        // kb
        this.input = { up: false, down: false, right: false, left: false };

        this.eyeOffsetX = 0;
        this.eyeOffsetY = 0;

        this.petals = [];

        this.petalRotateSpeed = petalRotateSpeed;
        this.petalRotation = 0;
        this.petalLag = 0;

        this.petalDistance = neutralPetalDistance;

        this.attacking = false;
        this.defending = false;

        // this.renderX = this.x;
        // this.renderY = this.y;

        this.render = {};
        for (let i = 0; i < flowerInterpolateKeys.length; i++) {
            this.render[flowerInterpolateKeys[i]] = this[flowerInterpolateKeys[i]];
        }
        this.render.angle = this.angle;
        this.render.fastPetalDistance = this.petalDistance;
        this.render.x = this.render.baseX;
        this.render.y = this.render.baseY;

        this.projectiles = [];
        this.pets = [];
        this.deadProjectiles = [];
        this.deadPets = [];

        // this.level = 0;
        // this.petalSlots = 0;
    }
    init(data) {
        for (let key in data) {
            if (key === 'petals') {
                // TODO add separate addPetal and removePetal messages
                for (let petalId in data.petals) {
                    this.petals[petalId] = new Petal(data.petals[petalId]);
                }
                continue;
            } else if (key === "projectiles") {
                for (let i = 0; i < data.projectiles.length; i++) {
                    this.projectiles[i] = new Petal(data.projectiles[i]);
                    this.projectiles[i].isProjectile = true;
                }
            } else if (key === "pets") {
                for (let i = 0; i < data.pets.length; i++) {
                    this.pets[i] = new Enemy(data.pets[i]);
                }
            } else {
                this[key] = data[key];
            }

        }
    }
    update(data, startInd) {
        if (data[startInd + 1/*hp*/] < this.hp) {
            this.updateRenderDamage(data.hp);
        }
        // console.log(startInd);
        // console.log(data);
        for (let i = startInd; i < flowerPackKeys.length + startInd; i++) {
            if (i === startInd + 5 && this.id === window.selfId) {
                continue;// we dont want to change the angle on player by the server becasue then it looks bad (snapping back). Thus, continue.
            }
            this[flowerPackKeys[i - startInd]] = data[i];
        }

        // // console.log(this.headX - data.headX);
        // if (data.maxHp){
        //     this.hp = data.hp;
        //     this.render.hp = this.hp;
        //     this.ticksSinceLastDamaged = 99999;
        //     this.beforeStreakHp = this.hp;
        //     this.render.beforeStreakHp = this.hp;
        // }
        // if(data.petalRotateSpeed){
        //     this.petalLag = this.calculatePetalLag();
        // }

        // for(let key in data){
        //     if(key === 'petals'){
        //         // console.log(data.petals);
        //         // TODO add separate addPetal and removePetal messages
        //         for(let petalId in data.petals){
        //             this.petals[data.petals[petalId].id].update(data.petals[petalId], this);
        //         }
        //         continue;
        //     } else if(key === "projectiles"){
        //         for(let i = 0; i < data.projectiles.length; i++){
        //             this.projectiles[data.projectiles[i].projectileId].update(data.projectiles[i], this);
        //         }
        //         continue;
        //     } else if(key === "pets"){
        //         for(let i = 0; i < data.pets.length; i++){
        //             this.pets[i].update(data.pets[i], this);
        //         }
        //         continue;
        //     }
        //     this[key] = data[key];
        // }// some sort of lastState system as well?
        // // this.predictMovement();
        // // if(data.petalRotateSpeed){
        // //     console.log(this.petalRotateSpeed);
        // // }
        this.x = this.headX;
        this.y = this.headY;

        // we don't send baseX or baseY. But, we send everything once per tick right after the update.
        // so just performing the same simulation that the server does will be 100% accurate all the time
        this.baseX = interpolate(this.baseX, this.headX, 0.4);
        this.baseY = interpolate(this.baseY, this.headY, 0.4);

        // the same sort of "client rebuilding" with exact data is here
        if (this.attacking === true) {
            this.petalDistance = attackPetalDistance;
        } else if (this.defending === true) {
            this.petalDistance = defendPetalDistance;
        } else {
            this.petalDistance = neutralPetalDistance;
        }


        for (let i = 0; i < this.petals.length; i++) {
            const petalData = data[startInd + flowerPackKeys.length + i];
            //console.log(petalData);
            //get 3rd decimal digit
            let encodedData = Math.floor(petalData * 100) / 100;
            let encodedType = Math.round(1000 * (petalData - encodedData));
            //console.log(encodedType);
            if (petalData <= 0) {
                // petal is damaged!!

                this.petals[i].update({ takeDamage: true, hp: -encodedData }, this);

                continue;
            } else if (encodedType === 1) {
                // special number indicating it's alive
                if (this.petals[i].dead !== false) {
                    this.petals[i].update({ dead: false }, this);
                }
                continue;
            } else if (encodedType === 3) {
                this.petals[i].update({ distance: encodedData }, this);
                continue;
            } else if (encodedType === 4) {
                if (this.petals[i].dying !== true && this.petals[i].dead !== true) {
                    this.petals[i].update({ dead: true, reload: encodedData }, this);
                }
                else {
                    this.petals[i].update({ reload: encodedData }, this);
                }
                continue;
            }

        }

        if (this.projectiles.length !== 0) {
            const projectileStartIndex = startInd + flowerPackKeys.length + this.petals.length;
            for (let i = 0; i < this.projectiles.length; i++) {
                const projectileData = [data[projectileStartIndex + i * 2], data[projectileStartIndex + i * 2 + 1]];
                if (projectileData[0] === -6.5) {
                    this.projectiles[i].update({ dead: true }, this);
                } else {
                    this.projectiles[i].update({ x: projectileData[0], y: projectileData[1] }, this);
                }
            }
        }

        if (this.pets.length !== 0) {
            const petStartIndex = startInd + flowerPackKeys.length + this.petals.length + this.projectiles.length * 2;
            for (let i = 0; i < this.pets.length; i++) {
                // const projectileData = [data[petStartIndex + i * 2], data[petStartIndex + i * 2 + 1]];
                const thisPetStartIndex = petStartIndex + i * enemyPackKeys.length;
                this.pets[i].update(data, thisPetStartIndex);
                // if(projectileData[0] === -6.5){
                //     this.projectiles[i].update({dead: true}, this);
                // } else {
                //     this.projectiles[i].update({x: projectileData[0], y: projectileData[1]}, this);
                // }
            }
        }
    }
    updateRenderDamage() {
        this.ticksSinceLastDamaged = 0;
    }
    updatePetsAndProjectiles() {
        for (let i = 0; i < this.deadProjectiles.length; i++) {
            if (this.deadProjectiles[i].deadAnimationTimer > 166) {
                this.deadProjectiles[i].toRemove = true;
            }
        }
        this.deadProjectiles = this.deadProjectiles.filter(p => p.toRemove !== true);

        for (let i = 0; i < this.deadPets.length; i++) {
            if (this.deadPets[i].deadAnimationTimer > 166) {
                this.deadPets[i].toRemove = true;
            }
        }
        this.deadPets = this.deadPets.filter(p => p.toRemove !== true);

        // this.petalRotation += this.petalRotateSpeed * dt / 30;
    }
    // simulate(room){
    //     if(this.movementType === 'mouse'){
    //         this.xv += Math.cos(this.angle) * this.magnitude /** dt*/ * flowerSpeed;
    //         this.yv += Math.sin(this.angle) * this.magnitude /** dt*/ * flowerSpeed;
    //     } else {

    //     }

    //     this.xv *= this.friction;
    //     this.yv *= this.friction;

    //     this.headX += this.xv;
    //     this.headY += this.yv;

    //     if(Math.sqrt(this.headX ** 2 + this.headY ** 2) + this.radius > room.radius){
    //         const angle = Math.atan2(this.headY, this.headX);
    //         this.headX = Math.cos(angle) * (room.radius - this.radius);
    //         this.headY = Math.sin(angle) * (room.radius - this.radius);
    //     }

    //     this.x = interpolate(this.x, this.headX, .4 * dt/16.66);
    //     this.y = interpolate(this.y, this.headY, .4 * dt/16.66);
    //     // const angle = Math.atan2(this.headY - this.y, this.headX - this.x);
    //     // // const magnitude = Math.min(1, Math.sqrt((this.x - this.headX) ** 2 + (this.y - this.headY) ** 2) / 3);
    //     // const magnitude = Math.sqrt(this.xv ** 2 + this.yv ** 2);

    //     // this.x = this.headX - Math.cos(angle) * magnitude;//+= Math.cos(angle) * magnitude;
    //     // this.y = this.headY - Math.sin(angle) * magnitude;//+= Math.sin(angle) * magnitude;

    //     this.petalRotation += this.petalRotateSpeed;

    //     if(this.attacking === true){
    //         this.petalDistance = attackPetalDistance;
    //     } else if(this.defending === true){
    //         this.petalDistance = defendPetalDistance;
    //     } else {
    //         this.petalDistance = neutralPetalDistance;
    //     }

    //     for(let i = 0; i < this.petals.length; i++){
    //         this.petals[i].simulate(this);
    //     }
    //     for(let i = 0; i < this.deadProjectiles.length; i++){
    //         if(this.deadProjectiles[i].deadAnimationTimer > 166){
    //             this.deadProjectiles[i].toRemove = true;
    //         }
    //     }
    //     this.deadProjectiles = this.deadProjectiles.filter(p => p.toRemove !== true);
    //     for(let i = 0; i < this.deadPets.length; i++){
    //         if(this.deadPets[i].deadAnimationTimer > 166){
    //             this.deadPets[i].toRemove = true;
    //         }
    //     }
    //     this.deadPets = this.deadPets.filter(p => p.toRemove !== true);
    //     // return;
    //     // if(this.movementType === 'mouse'){
    //     //     this.xv += Math.cos(this.angle) * this.magnitude /** dt*/ * flowerSpeed / 2;
    //     //     this.yv += Math.sin(this.angle) * this.magnitude /** dt*/ * flowerSpeed / 2;
    //     //     this.xv *= Math.sqrt(this.friction ** (dt/12));
    //     //     this.yv *= Math.sqrt(this.friction ** (dt/12));
    //     // } else {

    //     // }

    //     // this.headX += this.xv / 10 * dt//* dt/1000;
    //     // this.headY += this.yv / 10 * dt//* dt/1000;

    //     // // this.xv *= this.friction ** (dt/12);
    //     // // this.yv *= this.friction ** (dt/12);

    //     // if(Math.sqrt(this.headX ** 2 + this.headY ** 2) + this.radius > room.radius){
    //     //     const angle = Math.atan2(this.headY, this.headX);
    //     //     this.headX = Math.cos(angle) * (room.radius - this.radius);
    //     //     this.headY = Math.sin(angle) * (room.radius - this.radius);
    //     //     // this.x = this.headX;
    //     //     // this.y = this.headY;
    //     // }

    //     // if(this.movementType === 'mouse'){
    //     //     this.xv += Math.cos(this.angle) * this.magnitude /** dt*/ * flowerSpeed / 2;
    //     //     this.yv += Math.sin(this.angle) * this.magnitude /** dt*/ * flowerSpeed / 2;
    //     //     this.xv *= Math.sqrt(this.friction ** (dt/12));
    //     //     this.yv *= Math.sqrt(this.friction ** (dt/12));
    //     // } else {

    //     // }

    //     // // TODO: make this account for movement delta over the frame. How florr does it is if you ram into a rock then magnitude of lead is decreased and if you slow down as well. We can't just base this off of velocity, we need a delta position every frame system
    //     // this.x = interpolate(this.x, this.headX, 0.4 ** (dt/30));
    //     // this.y = interpolate(this.y, this.headY, 0.4 ** (dt/30));

    //     // this.petalRotation += this.petalRotateSpeed * dt;

    //     // for(let i = 0; i < this.petals.length; i++){
    //     //     this.petals[i].simulate(this, dt);
    //     // }
    // }
    calculatePetalLag() {
        return /*1 / (1 - .08)*/1.08695652174 * this.petalRotateSpeed;
    }
    // predictMovement(){
    //     // if(this.movementType === 'mouse'){
    //     //     this.xv += Math.cos(this.angle) * this.magnitude * dt * flowerSpeed;
    //     //     this.yv += Math.sin(this.angle) * this.magnitude * dt * flowerSpeed;
    //     // } else {

    //     // }

    //     // this.headX += this.xv * dt/1000;
    //     // this.headY += this.yv * dt/1000;

    //     // this.xv *= this.friction ** (dt/8);
    //     // this.yv *= this.friction ** (dt/8);

    //     // if(Math.sqrt(this.headX ** 2 + this.headY ** 2) + this.radius > room.radius){
    //     //     const angle = Math.atan2(this.y, this.x);
    //     //     this.headX = Math.cos(angle) * (room.radius - this.radius);
    //     //     this.headY = Math.sin(angle) * (room.radius - this.radius);
    //     // }

    //     // this.x = interpolate(this.headX, this.x, 0.5 ** (dt / 8));
    //     // this.y = interpolate(this.headY, this.y, 0.5 ** (dt / 8));
    //     // const interpRatio = (time - this.lastState.time) / serverTickLength;
    //     // const interpRatio = /*Math.min(2,*/(this.latestUpdateTime-this.lastState.time)/serverTickLength/*)*/;
    //     // // console.log(interpRatio);

    //     // for(let i = 0; i < this.interpolateKeys.length; i++){
    //     //     const key = this.interpolateKeys[i];
    //     //     // this.x = interpolate(this.lastState.x, this.x, interpRatio)
    //     //     this.render[key] = interpolate(this.lastState[key], this[key], interpRatio);
    //     // }
    // }
    // updateRenderPos(){
    //     // this.render.x = interpolate(this.render.x, this.render.headX - Math.cos(this.angle) * (this.magnitude/220) * this.render.radius/2, 0.75);
    //     // this.render.y = interpolate(this.render.headY - Math.sin(this.angle) * (this.magnitude/220) * this.render.radius/2);
    //     // this.updateInterpolate();
    //     this.renderX = this.x//interpolate(this.renderX, this.render.headX, 0.04);
    //     this.renderY = this.y//interpolate(this.renderY, this.render.headY, 0.04);
    //     this.render.x = this.renderX//interpolate(this.renderX, this.x, 0.06);
    //     this.render.y = this.renderY//interpolate(this.renderY, this.y, 0.06);

    //     for(let i = 0; i < this.petals.length; i++){
    //         this.petals[i].updateRenderPos(this);
    //     }
    // }
    updateInterpolate() {
        if (window.isEditor && this.extraRange !== undefined && this.petalDistance > neutralPetalDistance) {
            var lastPetalDistance = this.petalDistance;
            this.petalDistance /= this.extraRange;
        }
        for (let i = 0; i < flowerInterpolateKeys.length; i++) {
            this.render[flowerInterpolateKeys[i]] = interpolate(this.render[flowerInterpolateKeys[i]], this[flowerInterpolateKeys[i]], flowerInterpolateMagnitudes[i] * dt / 16.66);//this[flowerInterpolateKeys[i]];
        }
        this.render.angle = interpolateDirection(this.render.angle, this.angle, 0.2 * dt / 16.66);
        this.render.fastPetalDistance = interpolate(this.render.fastPetalDistance, this.petalDistance, 0.4 * dt / 16.66);

        // this.render.headX = this.render.x;
        // this.render.headY = this.render.y;
        // this.updateRenderPos();

        for (let i = 0; i < this.petals.length; i++) {
            this.petals[i].updateInterpolate(this);
        }

        for (let i = 0; i < this.projectiles.length; i++) {
            if (this.projectiles[i].updateInterpolate !== undefined) {
                this.projectiles[i].updateInterpolate(this);
            } else {
                // console.log('PROJECTILE BUG FOUND', this.projectiles[i]);
                this.projectiles[i] = new Petal(this.projectiles[i]);
            }
        }

        this.render.x = this.render.baseX;
        this.render.y = this.render.baseY;

        if (window.isEditor && this.extraRange !== undefined && this.petalDistance > neutralPetalDistance) {
            this.petalDistance = lastPetalDistance;
        }
    }
    drawProjectiles() {
        if (this.projectiles.length === 0) {
            return;
        }
        for (let i = 0; i < this.projectiles.length; i++) {
            if (toRender({ x: this.projectiles[i].render.x, y: this.projectiles[i].render.y, radius: this.projectiles[i].radius }, window.camera) === true) {
                if (room.flowers[window.selfId]) if (this.username !== room.flowers[window.selfId].username && flowrMod.noPeasGrapes == true && (this.projectiles[i].type == "PeasProjectile" || this.projectiles[i].type == "GrapesProjectile")) {
                    continue
                }
                this.projectiles[i].draw();
            }
            this.projectiles[i].updateTimer();
        }
    }
    drawPets() {
        for (let i = 0; i < this.pets.length; i++) {
            if (this.pets[i]?.render?.x === undefined) {
                continue;
            }
            if (toRender({ x: this.pets[i].render.x, y: this.pets[i].render.y, radius: this.pets[i].render.radius * 4 }, window.camera) === true) {
                this.pets[i].draw();
            }
        }

        for (let i = 0; i < this.deadPets.length; i++) {
            if (this.deadPets[i]?.render?.x === undefined) {
                continue;
            }
            if (toRender({ x: this.deadPets[i].render.x, y: this.deadPets[i].render.y, radius: this.deadPets[i].render.radius * 4 }, window.camera) === true) {
                this.deadPets[i].draw();
            }
        }

    }
    draw() {
        if (this.id !== window.selfId) {
            this.updateInterpolate();
        }
        // this.updateRenderPos();
        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.headX, this.headY, 30, 0, Math.PI*2);
        // ctx.fill();
        // ctx.closePath();

        // // rendering hp
        // ctx.fillStyle = '#333333';
        // ctx.beginPath();
        // ctx.roundRect(this.render.headX - this.radius*1.6, this.render.headY + this.radius*1.775, this.radius*3.2, this.radius*0.39, this.radius*0.25);
        // ctx.fill();
        // ctx.closePath();

        // ctx.fillStyle = '#73de36'
        // ctx.beginPath();
        // if(this.hp < this.maxHp / 10){
        //     ctx.globalAlpha = this.hp * .95 / (this.maxHp / 10) + 0.05;
        // }
        // ctx.roundRect(this.render.headX - this.radius*1.6+1.75, this.render.headY + this.radius*1.775+1.75, (this.radius*3.2-this.radius*0.25-3.5)*this.hp/this.maxHp+this.radius*0.25, Math.max(0,this.radius*0.39-3.5), this.radius*0.25);
        // // ctx.roundRect(this.render.headX - this.radius*1.5+1.5, this.render.headY + this.radius*1.7+1.5, (this.radius*3-3)*this.hp/this.maxHp, Math.max(0,this.radius*0.35-3), this.radius*0.25, (this.radius*3-3));
        // ctx.fill();
        // ctx.closePath();
        // ctx.globalAlpha = 1;

        this.updatePetsAndProjectiles();

        for (let i = 0; i < this.deadProjectiles.length; i++) {
            if (toRender({ x: this.deadProjectiles[i].render.x, y: this.deadProjectiles[i].render.y, radius: this.deadProjectiles[i].radius }, window.camera) === true) {
                this.deadProjectiles[i].draw();
            }
            this.deadProjectiles[i].updateTimer();
        }



        this.ticksSinceLastDamaged += dt;
        if (this.ticksSinceLastDamaged > 666) {
            this.beforeStreakHp = this.hp;
        }

        renderHpBar({
            x: this.render.headX,
            y: this.render.headY - this.render.radius / 3,
            radius: this.render.radius,
            hp: this.render.hp,
            maxHp: this.maxHp,
            shield: this.render.shield,
            beforeStreakHp: this.render.beforeStreakHp,
            flowerName: this.name,
            flowerUsername: this.username
        }, this);

        // ctx.lastFlowerTransform = ctx.getTransform();
        if (this.petalAlpha !== undefined) {
            ctx.globalAlpha = this.petalAlpha;
        }

        if (this.id == window.selfId) {
            petalReloadData = {};
            petalHpData = {};
        }
        for (let i = 0; i < this.petals.length; i++) {
            let petal = this.petals[i];
            if (toRender({ x: petal.render.x, y: petal.render.y, radius: petal.radius }, window.camera) === true) {
                petal.draw();
            }
            if (this.id == window.selfId) {
                let containerId = petal.petalContainerId;
                if (!petalReloadData[containerId]) {
                    if (petal.dead) {
                        petalReloadData[containerId] = {
                            reload: petal.render.reload / petal.maxReload
                        }
                    }
                }
                else {
                    if (petalReloadData[containerId].reload < petal.render.reload / petal.maxReload && petal.dead) {
                        petalReloadData[containerId].reload = petal.render.reload / petal.maxReload;
                    }
                }

                if (!petalHpData[containerId]) {
                    if (!petal.dead) {
                        petalHpData[containerId] = {
                            hp: petal.render.hp / petal.maxHp,
                            count: 1
                        }
                    }
                }
                else {
                    //average
                    if (!petal.dead) {
                        petalHpData[containerId].hp = (petalHpData[containerId].count * petalHpData[containerId].hp + petal.render.hp / petal.maxHp) / (petalHpData[containerId].count + 1);
                        petalHpData[containerId].count++;
                    }


                }
            }
            petal.updateTimer();
        }
        ctx.globalAlpha = 1;
        // ctx.restore();
        // ctx.setTransform(ctx.lastPlayerTransform);
        // delete ctx.lastFlowerTransform;

        //borderRadius: (radius/25)**1.2*25*0.25,
        // const barDimensions = {
        //     w: (radius/25)**1.2*25*3.2+.33,
        //     h: (radius/25)**1.2*25*0.39+.33,
        //     borderRadius: (radius/25)**1.2*25*0.25,
        //     innerPadding: (radius/25)**1.05*1.8-.1
        // }
        // ctx.globalAlpha = fadeAlphaMult;
        // hp = Math.max(hp, 0);
        // beforeStreakHp = Math.max(beforeStreakHp, 0);
        // ctx.fillStyle = /*isEnemy ? '#131315' : */'#333333';
        // ctx.beginPath();
        // ctx.roundRect(x - barDimensions.w/2, y + radius*1.775, barDimensions.w, barDimensions.h, barDimensions.borderRadius);
        // ---

        // this.x = this.x//interpolate(this.x, this.x, .2);
        // this.y = this.y//interpolate(this.y, this.y, .2);
        // this.renderAngle = this.angle;
        // this.hp = this.hp;

        // this.x = this.headX - Math.cos(this.angle) * (this.magnitude/220) * this.radius/2;
        // this.y = this.headY - Math.sin(this.angle) * (this.magnitude/220) * this.radius/2;

        // this.render.x = interpolate(this.render.x, this.renderX, 0.22);
        // this.render.y = interpolate(this.render.y, this.renderY, 0.22);

        // this.updateRenderPos();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.render.x, this.render.y, 30, 0, Math.PI*2);
        // ctx.fill();
        // ctx.closePath();

        if (toRender({ x: this.render.headX, y: this.render.headY, radius: this.render.radius }, window.camera) === true) {
            this.drawFlower(this.render.headX, this.render.headY, this.radius);
        }

        //LIGHTNING
        if (this.lightnings) {
            if (this.lightnings.length > 0) {
                this.lightnings = this.lightnings.filter((e) => time < (e.time + 600)) //600ms time
                ctx.strokeStyle = "#97f0ea";
                ctx.lineWidth = 3;
                for (let i of this.lightnings) {
                    ctx.globalAlpha = (1 - (time - i.time) / 700);
                    ctx.beginPath();
                    for (let j = 0; j < i.renderData.length; j++) {
                        ctx.lineTo(i.renderData[j].x, i.renderData[j].y);
                    }
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }


        // const hashDistance = 500;
        // ctx.globalAlpha = 0.5;
        // if(this.hashData !== undefined){
        //     // console.log(this.hashData);
        //     for(let x = this.hashData.top.x; x <= this.hashData.bottom.x; x++){
        //         for(let y = this.hashData.top.y; y <= this.hashData.bottom.y; y++){
        //             ctx.fillStyle = 'red';
        //             ctx.beginPath();
        //             ctx.arc(x*hashDistance-4000,y*hashDistance-4000,8,0,Math.PI * 2);
        //             ctx.fill();
        //             ctx.closePath();
        //             ctx.globalAlpha = 0.2;
        //             ctx.fillRect(x*hashDistance-4000,y*hashDistance-4000,hashDistance,hashDistance);
        //             ctx.globalAlpha = 0.5;
        //         }
        //     }
        // }
        // ctx.globalAlpha = 1;
    }
    drawFlower(x, y, radius) {
        if (this.dev) {
            ctx.fillStyle = blendColor('#ffe763', '#FF0000', Math.max(0, 1 - this.ticksSinceLastDamaged / 166));
            ctx.strokeStyle = blendColor('#cebb50', '#FF0000', Math.max(0, 1 - this.ticksSinceLastDamaged / 166));
            ctx.fillStyle = blendColor(ctx.fillStyle, '#ce76da', Math.max(0, this.render.isPoisoned));
            ctx.strokeStyle = blendColor(ctx.strokeStyle, '#ab63b3', Math.max(0, this.render.isPoisoned));

            // we shouldn't do interpolation like this btw because it doesnt match natural behavior. TODO make linear interpolation sys between last recieved state and this one
            // this.x = interpolate(this.x, this.x, 0.1);
            // this.y = interpolate(this.y, this.y, 0.1);

            // this.renderAngle = interpolateDirection(this.renderAngle, this.angle, 1/3);
            // this.hp = interpolate(this.hp, this.hp, 0.1);

            // HEAD - use HEADX instead of X
            ctx.lineWidth = radius / 8;

            ctx.beginPath();
            ctx.lineTo(x + radius * 1.03, y + radius * -0.02);
            ctx.quadraticCurveTo(x + radius * 0.78, y + radius * 1.06, x + radius * 0.27, y + radius * 1.14)
            ctx.quadraticCurveTo(x + radius * -0.8, y + radius * 0.75, x + radius * -0.94, y + radius * 0.36)
            ctx.quadraticCurveTo(x + radius * -1.18, y + radius * -0.29, x + radius * -0.83, y + radius * -0.95)
            ctx.quadraticCurveTo(x + radius * -0.45, y + radius * -1.3, x + radius * -0.06, y + radius * -1.06)
            ctx.quadraticCurveTo(x + radius * 0.85, y + radius * -1.04, x + radius * 1.03, y + radius * -0.02)
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // eyes
            ctx.fillStyle = '#212219';
            ctx.beginPath();
            ctx.ellipse(x + radius / 2.5 + radius * 0.05, y + radius * 5 / 13.5, radius * 3 / 23.5 * 1.1, radius * 5.85 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.ellipse(x - radius / 2.5, y - radius * 5 / 23.5 + radius * -0.15, radius * 3 / 23.5 * 1.1, radius * 5.85 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

            // mouth
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = radius / 15;
            ctx.lineCap = 'round';

            let expressionOffset;// 0 to 1
            if (this.render.fastPetalDistance > neutralPetalDistance) {
                // we're attacking
                // petalDistance = 1 at this.petalDistance = petalDistance * 1.91;
                // petalDistance = 0 at this.petalDistance = petalDistance;
                expressionOffset = (this.render.fastPetalDistance - neutralPetalDistance) / 0.91 / neutralPetalDistance;
            } else {
                // we're defending; divide by 0.4
                // petalDistance = 1 at this.petalDistance = petalDistance * 0.6;
                // petalDistance = 0 at this.petalDistance = petalDistance
                expressionOffset = (neutralPetalDistance - this.render.fastPetalDistance) / 0.4 / neutralPetalDistance;
            }

            if (this.render.isPoisoned) {
                //"defending"
                expressionOffset = this.render.isPoisoned;

            }

            ctx.beginPath();
            ctx.moveTo(x - radius * 0.3 + radius / 4, y + radius * 0.025 + radius * 9.5 / 23.5);
            ctx.quadraticCurveTo(x - radius * 0.4, y - radius * 0.1 + 1.07 * radius * (5.5 + 9.5 * (1 - expressionOffset)) / 23.5 * 61.1 / 70, x - radius * 0.275 - radius / 4, y - radius * 0.25 + radius * 9.5 / 23.5);
            ctx.stroke();

            // eyes: we have a path oval and then white circle and we ctx.clip

            ctx.save();
            // oval clipping path
            ctx.beginPath();
            ctx.ellipse(x + radius / 2.5 + radius * 0.05, y + radius * 5 / 13.5, radius * 2.5 / 23.5 * 1.1, radius * 5 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.clip();
            // ctx.closePath();

            // circle
            const eyeOffset = {
                x: Math.cos(this.render.angle) * radius * 2 / 23,
                y: Math.sin(this.render.angle) * radius * 3.5 / 23
            }
            ctx.fillStyle = '#eeeeee';
            ctx.beginPath();
            ctx.ellipse(x + radius / 2.5 + eyeOffset.x + radius * 0.05, y + radius * 5 / 13.5 + eyeOffset.y, radius * 2.92 / 23.5 * 1.1, radius * 2.92 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.restore();

            ctx.save();
            // oval clipping path
            ctx.beginPath();
            ctx.ellipse(x - radius / 2.5, y - radius * 5 / 23.5 + radius * -0.15, + radius * 2.5 / 23.5 * 1.1, radius * 5 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.clip();

            ctx.fillStyle = '#eeeeee';
            ctx.beginPath();
            ctx.ellipse(x - radius / 2.5 + eyeOffset.x, y - radius * 5 / 23.5 + -eyeOffset.y + radius * -0.15, radius * 3 / 23.5 * 1.1, radius * 3 / 23.5 * 1.1, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }
        else {
            ctx.fillStyle = blendColor('#ffe763', '#FF0000', Math.max(0, 1 - this.ticksSinceLastDamaged / 166));
            ctx.strokeStyle = blendColor('#cebb50', '#FF0000', Math.max(0, 1 - this.ticksSinceLastDamaged / 166));
            ctx.fillStyle = blendColor(ctx.fillStyle, '#ce76da', Math.max(0, this.render.isPoisoned));
            ctx.strokeStyle = blendColor(ctx.strokeStyle, '#ab63b3', Math.max(0, this.render.isPoisoned));
            // we shouldn't do interpolation like this btw because it doesnt match natural behavior. TODO make linear interpolation sys between last recieved state and this one
            // this.x = interpolate(this.x, this.x, 0.1);
            // this.y = interpolate(this.y, this.y, 0.1);

            // this.renderAngle = interpolateDirection(this.renderAngle, this.angle, 1/3);
            // this.hp = interpolate(this.hp, this.hp, 0.1);

            // HEAD - use HEADX instead of X
            ctx.lineWidth = radius / 8;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            // eyes
            ctx.fillStyle = '#212219';
            ctx.beginPath();
            ctx.ellipse(x - radius / 3.5, y - radius * 5 / 23.5, radius * 3 / 23.5, radius * 5.85 / 23.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.ellipse(x + radius / 3.5, y - radius * 5 / 23.5, radius * 3 / 23.5, radius * 5.85 / 23.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

            // mouth
            ctx.strokeStyle = ctx.fillStyle;
            ctx.lineWidth = radius / 15;
            ctx.lineCap = 'round';

            let expressionOffset;// 0 to 1
            if (this.render.fastPetalDistance > neutralPetalDistance) {
                // we're attacking
                // petalDistance = 1 at this.petalDistance = petalDistance * 1.91;
                // petalDistance = 0 at this.petalDistance = petalDistance;
                expressionOffset = (this.render.fastPetalDistance - neutralPetalDistance) / 0.91 / neutralPetalDistance;
            } else {
                // we're defending; divide by 0.4
                // petalDistance = 1 at this.petalDistance = petalDistance * 0.6;
                // petalDistance = 0 at this.petalDistance = petalDistance
                expressionOffset = (neutralPetalDistance - this.render.fastPetalDistance) / 0.4 / neutralPetalDistance;
            }

            if (this.render.isPoisoned > 0.001) {
                //"defending"
                expressionOffset = Math.max(this.render.isPoisoned, expressionOffset);

            }

            ctx.beginPath();
            ctx.moveTo(x + radius / 4, y + radius * 9.5 / 23.5);
            ctx.quadraticCurveTo(x, y + 1.07 * radius * (5.5 + 9.5 * (1 - expressionOffset)) / 23.5 * 61.1 / 70, x - radius / 4, y + radius * 9.5 / 23.5);
            ctx.stroke();

            // eyes: we have a path oval and then white circle and we ctx.clip

            ctx.save();
            // oval clipping path
            ctx.beginPath();
            ctx.ellipse(x + radius / 3.5, y - radius * 5 / 23.5, radius * 2.5 / 23.5, radius * 5 / 23.5, 0, 0, Math.PI * 2);
            ctx.clip();
            // ctx.closePath();

            // circle
            const eyeOffset = {
                x: Math.cos(this.render.angle) * radius * 2 / 23,
                y: Math.sin(this.render.angle) * radius * 3.5 / 23
            }
            ctx.fillStyle = '#eeeeee';
            ctx.beginPath();
            ctx.ellipse(x + radius / 3.5 + eyeOffset.x, y - radius * 5 / 23.5 + eyeOffset.y, radius * 2.92 / 23.5, radius * 2.92 / 23.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.restore();

            ctx.save();
            // oval clipping path
            ctx.beginPath();
            ctx.ellipse(x - radius / 3.5, y - radius * 5 / 23.5, radius * 2.5 / 23.5, radius * 5 / 23.5, 0, 0, Math.PI * 2);
            ctx.clip();

            ctx.fillStyle = '#eeeeee';
            ctx.beginPath();
            ctx.ellipse(x - radius / 3.5 + eyeOffset.x, y - radius * 5 / 23.5 + eyeOffset.y, radius * 3 / 23.5, radius * 3 / 23.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();

            ctx.restore();

            // triangle that makes the player look angry
            const offset = (this.render.petalDistance - 7 - neutralPetalDistance * 1.8) / 35 * radius / 25;
            ctx.fillStyle = blendColor('#ffe763', '#FF0000', Math.max(0, 1 - this.ticksSinceLastDamaged / 166));
            ctx.fillStyle = blendColor(ctx.fillStyle, '#ce76da', Math.max(0, this.render.isPoisoned));
            ctx.beginPath();
            ctx.moveTo(x - radius / 3.5 * 2, y - radius * 14 / 23.5 + offset);
            ctx.lineTo(x + radius / 3.5 * 2, y - radius * 14 / 23.5 + offset);
            ctx.lineTo(x, y - radius * 5 / 23.5 + offset);
            ctx.fill();
            ctx.closePath();
        }
    }
    static drawDeadFlower(x, y, radius) {
        ctx.fillStyle = '#ffe763';
        ctx.strokeStyle = '#cebb50';


        ctx.lineWidth = radius / 8;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // dead eyes
        ctx.fillStyle = '#212219';
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius / 8;
        ctx.lineCap = 'round';

        let eyecenter = { x: x - radius / 3.5, y: y - radius * 5 / 23.5 };

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius * 4 / 23.5, eyecenter.y + radius * 4 / 23.5);
        ctx.lineTo(eyecenter.x - radius * 4 / 23.5, eyecenter.y - radius * 4 / 23.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius * 4 / 23.5, eyecenter.y - radius * 4 / 23.5);
        ctx.lineTo(eyecenter.x - radius * 4 / 23.5, eyecenter.y + radius * 4 / 23.5);
        ctx.stroke();
        ctx.closePath();

        eyecenter = { x: x + radius / 3.5, y: y - radius * 5 / 23.5 };

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius * 4 / 23.5, eyecenter.y + radius * 4 / 23.5);
        ctx.lineTo(eyecenter.x - radius * 4 / 23.5, eyecenter.y - radius * 4 / 23.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius * 4 / 23.5, eyecenter.y - radius * 4 / 23.5);
        ctx.lineTo(eyecenter.x - radius * 4 / 23.5, eyecenter.y + radius * 4 / 23.5);
        ctx.stroke();
        ctx.closePath();


        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

        // mouth
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius / 15;
        ctx.lineCap = 'round';

        let expressionOffset = 1;// 0 to 1


        ctx.beginPath();
        ctx.moveTo(x + radius / 4, y + radius * 9.5 / 23.5);
        ctx.quadraticCurveTo(x, y + 1.07 * radius * (5.5 + 9.5 * (1 - expressionOffset)) / 23.5 * 61.1 / 70, x - radius / 4, y + radius * 9.5 / 23.5);
        ctx.stroke();





    }
    pack() {
        return {
            // angle: this.angle,
            movementType: this.movementType,
            // magnitude: this.magnitude,
            input: this.input
        }
    }
}

PetalContainer = class PetalContainer {
    constructor(petals, { x, y, w, h, originalX, originalY, radius, toOscillate, isDragging, lastSlot, toRenderText, petalStats, customBiome }, id, amount, attempt) {
        // this.petals has to be an array because of stuff like tringers
        this.petals = petals;
        this.petalStats = petalStats;
        for (let i = 0; i < this.petals.length; i++) {
            this.petals[i].insidePetalContainer = true;
        }
        this.rarity = (this.petals[0] ?? { rarity: 0 }).rarity;
        this.type = (this.petals[0] ?? { type: 'Basic' }).type;
        if (this.type === "Custom" || this.type === "CustomProjectile") {
            this.type = this.petals[0].customType;
        }

        // for reload animation not looking the same for every petal
        this.randomAngle = Math.random() * Math.PI * 2;

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.radius = radius;

        this.render = { x: originalX ?? this.x, y: originalY ?? this.y, w: this.w/*w should be the same as height, idk why i wrote it this way*/ };

        this.amount = amount;// when dragged and dropped, amount will be 1. Amount 1 (x1) doesn't render the x[number] (x2, x3, etc.) in the corner but the same class does if amount != 1;

        this.attempt = attempt;

        this.id = id;

        this.spawnAnimation = 0;

        this.lastAmountChangedTime = -1000;
        this.collectTime = null;

        this.toOscillate = toOscillate !== false;
        if (this.toOscillate === true) {
            this.angleOffset = Math.PI * .05 * (Math.random() * 2 - 1);
        }

        this.creationTime = performance.now();

        this.isDraggingPetalContainer = isDragging ?? false;
        if (this.isDraggingPetalContainer === true) {
            this.lastPetalSlot = lastSlot ?? { index: -1, top: true };
        }

        if (toRenderText !== undefined) {
            this.toRenderText = false;
        }

        this.isHovered = false;
        this.statsBoxAlpha = 0;
        this.statsBox = null;

        if (customBiome !== undefined) {
            this.customBiome = customBiome;
            this.greyed = false;
        }

        this.generatedIn1v1 = false

        // this.renderImageSize = 0;
        // if(window.loaded === true){
        //     this.generateRenderImage(60 * canvas.zoom);
        // } else {
        //     onLoadFunctions.push(() => {
        //         this.generateRenderImage(60 * canvas.zoom);
        //     })
        // }
    }
    // generateRenderImage(size=60){
    //     this.renderImageSize = size;

    //     window.oldCanvas = canvas;
    //     window.oldCtx = ctx;

    //     canvas = document.createElement('canvas');
    //     ctx = canvas.getContext('2d');//new C2S(60, 60);
    //     ctx.imageSmoothingEnabled = false;
    //     canvas.width = size;
    //     canvas.height = size;// TODO: remove this because its unnecesary (and oldCanvas and canvas = doc.createelement)
    //     ctx.lineJoin = 'round';
    //     ctx.lineCap = 'round';
    //     ctx.translate(size/2, size/2);
    //     ctx.scale(size/60, size/60);
    //     if(this.toOscillate === true && this.isDisplayPetalContainer !== true){
    //         // bigger grey border
    //         ctx.globalAlpha *= 0.3;
    //         ctx.fillStyle = 'black';
    //         ctx.beginPath();
    //         ctx.roundRect(-30, -30, 60, 60, 5);
    //         ctx.fill();
    //         ctx.closePath();
    //         ctx.globalAlpha = 1;
    //     }

    //     // draw rect
    //     ctx.lineWidth = 4.5;
    //     ctx.fillStyle = Colors.rarities[this.rarity].color;
    //     ctx.strokeStyle = Colors.rarities[this.rarity].border;
    //     // if (this.rarity == 8){
    //     //     ctx.fillStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 60%)`
    //     //     ctx.strokeStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 45%)`

    //     // }
    //     ctx.beginPath();
    //     ctx.roundRect(-25, -25, 50, 50, .25);
    //     ctx.fill();
    //     ctx.stroke();
    //     ctx.closePath();

    //     // // no need for an arc, just draw the petal
    //     if(this.petals.length === 1){
    //         this.petals[0].render.x = 0//this.x;
    //         this.petals[0].render.y = 0//this.y - this.h / 10;

    //         let scaleMult = .8;
    //         if(this.petals[0].radius * .8 > 13.25/2){
    //             scaleMult = 13.25/(this.petals[0].radius*.8)/2;
    //         }
    //         if(petalContainerRenderSizeMultsMap[this.petals[0].type] !== undefined){
    //             if (typeof petalContainerRenderSizeMultsMap[this.petals[0].type] == "object"){
    //                 if (petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity]){
    //                     scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity];
    //                 }
    //             }
    //             else{
    //                 scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type];
    //             }
    //         }

    //         let individualRotate = false;
    //         if(petalContainerIndividualRotate[this.petals[0].type] !== undefined){
    //             if (typeof petalContainerIndividualRotate[this.petals[0].type] == "object"){
    //                 if (petalContainerIndividualRotate[this.petals[0].type][this.petals[0].rarity]){
    //                     individualRotate = petalContainerIndividualRotate[this.petals[0].type][this.petals[0].rarity];
    //                 }
    //             }
    //             else{
    //                 individualRotate = petalContainerIndividualRotate[this.petals[0].type];
    //             }
    //         }

    //         ctx.translate(0, -4);
    //         ctx.scale(scaleMult, scaleMult);
    //         if (individualRotate !== false)ctx.rotate(individualRotate)
    //         this.petals[0].draw();
    //         if (individualRotate !== false)ctx.rotate(-individualRotate)
    //         ctx.scale(1/scaleMult,1/scaleMult);
    //         ctx.translate(0, 4);
    //         // console.log(this.petals[0], ctx.getTransform());
    //     } else {
    //         // todo: generate positions in init instead of recalcing every frame, its not like we're gonna be adding more petals to an existing petal slot
    //         let petalRadius = (this.petals[0] ?? {radius: 0}).radius;
    //         let radius = Math.min(petalRadius * 1.16, 25 - petalRadius);
    //         // if(this.petals.length === 3){
    //         //     // odd
    //         //     ctx.translate(-1, 0);
    //         // }

    //         let greaterThanMargin = petalRadius * .8 + radius - 13.25;
    //         if(greaterThanMargin > 0){
    //             radius -= greaterThanMargin;
    //             if(radius < 8){
    //                 greaterThanMargin = 8-radius;
    //                 radius = 8;

    //                 // radius *= 1 / (greaterThanMargin/(13.25)+1); 
    //                 petalRadius *= 1 / (greaterThanMargin/13.25+1); 
    //                 // petalRadius = Math.max(8, petalRadius);
    //                 for(let i = 0; i < this.petals.length; i++){
    //                     this.petals[i].radius = petalRadius;
    //                 }
    //             }
    //         }
    //         if (petalContainerMultPetalRadiusMap[this.petals[0].type] !== undefined){
    //             if (typeof petalContainerMultPetalRadiusMap[this.petals[0].type] == "object"){
    //                 if (petalContainerMultPetalRadiusMap[this.petals[0].type][this.petals[0].rarity]){
    //                     radius *= petalContainerMultPetalRadiusMap[this.petals[0].type][this.petals[0].rarity];
    //                 }
    //             }
    //             else{
    //                 radius *= petalContainerMultPetalRadiusMap[this.petals[0].type];
    //             }
    //         }
    //         let toPointToCenter = ['Stinger'].includes((this.petals[0] ?? {type: "Basic"}).type) && (this.petals[0] ?? {rarity: 0}).rarity > 5;
    //         if (toPointToCenter == true){
    //             toPointToCenter = 0;
    //         }
    //         if (pointToCenterPetals[this.petals[0].type] !== undefined){
    //             if (typeof pointToCenterPetals[this.petals[0].type] == "object"){
    //                 if (pointToCenterPetals[this.petals[0].type][this.petals[0].rarity]){
    //                     toPointToCenter = pointToCenterPetals[this.petals[0].type][this.petals[0].rarity];
    //                 }
    //             }
    //             else{
    //                 toPointToCenter = pointToCenterPetals[this.petals[0].type];
    //             }
    //         }
    //         for(let i = 0; i < this.petals.length; i++){
    //             let rotateOffset = 0;
    //             if (petalContainerRotateMap[this.petals[0].type]){
    //                 rotateOffset = petalContainerRotateMap[this.petals[0].type];
    //             }
    //             const angle = Math.PI * 2 * i / this.petals.length + rotateOffset;
    //             this.petals[i].render.x = 0//this.x + Math.cos(angle) * radius;
    //             this.petals[i].render.y = 0//this.y + Math.sin(angle) * radius - this.h / 10;

    //             let scaleMult = .8;
    //             if(petalContainerRenderSizeMultsMap[this.petals[0].type] !== undefined){
    //                 if (typeof petalContainerRenderSizeMultsMap[this.petals[0].type] == "object"){
    //                     if (petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity]){
    //                         scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity];
    //                     }
    //                 }
    //                 else{
    //                     scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type];
    //                 }
    //             }

    //             ctx.translate(Math.cos(angle) * radius * scaleMult/.8, Math.sin(angle) * radius * scaleMult/.8 - 4);
    //             ctx.scale(scaleMult, scaleMult);
    //             if(toPointToCenter !== false)ctx.rotate(angle+Math.PI+toPointToCenter);
    //             this.petals[i].draw();
    //             if(toPointToCenter !== false)ctx.rotate(-angle-Math.PI-toPointToCenter);
    //             ctx.scale(1/scaleMult, 1/scaleMult);
    //             ctx.translate(-Math.cos(angle) * radius * scaleMult/.8, -Math.sin(angle) * radius * scaleMult/.8 + 4);
    //         }

    //         // if(this.petals.length === 3){
    //         //     // odd
    //         //     ctx.translate(1, 0);
    //         // }
    //     }

    //     if(this.toRenderText === undefined){
    //         ctx.font = '900 11px Ubuntu';
    //         ctx.letterSpacing = "-.05px";
    //         ctx.textBaseline = 'middle';
    //         ctx.textAlign = 'center';
    //         ctx.fillStyle = 'white';
    //         ctx.strokeStyle = 'black';

    //         // const canvasScale = ctx.getTransform().m11;
    //         ctx.lineWidth = 1.35;//5//Math.ceil(1.25 / canvasScale);

    //         ctx.fontKerning = "none";

    //         ctx.strokeText(this.type, 0, 13.25);
    //         ctx.fillText(this.type, 0, 13.25);
    //     }


    //     // ctx.translate(-30, -30);

    //     const img = new Image();
    //     img.src = canvas.toDataURL("image/png");// no lossy compression, supported by all browsers
    //     img.onload = () => {
    //         this.renderImage = img;
    //         this.renderImageSize = size;
    //     }

    //     canvas.remove();

    //     // const svg = ctx.getSerializedSvg();

    //     // // const serializer = new XMLSerializer();
    //     // // const svgString = serializer.serializeToString(svg);

    //     // // console.log(svg);

    //     // const img = new Image();
    //     // img.src = "data:image/svg+xml;base64," + btoa(svg);

    //     // canvas = oldCanvas;
    //     // ctx = oldCtx;

    //     // const parser = new DOMParser();
    //     // const doc = parser.parseFromString(svg, "image/svg+xml");

    //     // console.log(doc);

    //     // const parser = new DOMParser();
    //     // const svgDoc = parser.parseFromString(svg, 'image/svg+xml');

    //     // console.log(svgDoc.documentElement);

    //     canvas = window.oldCanvas;
    //     ctx = window.oldCtx;
    // }
    // TODO: polish animations! Have some flag for if the petal container is on the ground. If it is then render that oscillation animation and draw that semi opaq black border around it.
    updateInterpolate() {
        this.render.x = interpolate(this.render.x, this.x, 0.00672 * dt);
        this.render.y = interpolate(this.render.y, this.y, 0.00672 * dt);
        this.render.w = interpolate(this.render.w, this.w, 0.00672 * dt);
        if (this.collectTime) {
            this.spawnAnimation = interpolate(this.spawnAnimation, 0, 0.00672 * dt);
        } else {
            this.spawnAnimation = interpolate(this.spawnAnimation, 1, 0.00672 * dt);
        }
    }
    drawStatsBox(drawBelow = false) {
        if (window.statBoxes === false) {
            return;
        }
        if (this.isHovered === true) {
            if (this.statsBox === null) {
                let lastOscillating = this.toOscillate;
                let lastDimensions = { w: this.w, h: this.h };
                this.w = 58;
                this.h = 58;
                this.toOscillate = false;
                this.statsBox = generateStatsBox(this, true,
                    {
                        x: this.x,
                        y: this.y
                    }
                )
                this.w = lastDimensions.w;
                this.h = lastDimensions.h;
                this.toOscillate = lastOscillating;
            }
            this.statsBoxAlpha += 0.15 * dt / 18;
            if (this.statsBoxAlpha > 1) {
                this.statsBoxAlpha = 1;
            }

            ctx.globalAlpha = this.statsBoxAlpha;
        } else {
            this.statsBoxAlpha -= 0.15 * dt / 18;
            if (this.statsBoxAlpha < 0) {
                this.statsBoxAlpha = 0;
            }
        }
        if (this.statsBoxAlpha !== 0) {
            this.statsBox.x = this.render.x - this.statsBox.w / 2
            this.statsBox.y = drawBelow
                ? this.render.y + this.h / 2 + 11.5
                : this.render.y - this.statsBox.h - this.h / 2 - 11.5;
            ctx.globalAlpha = this.statsBoxAlpha;
            this.statsBox.pc.amount = this.amount;
            this.statsBox.draw();
            ctx.globalAlpha = 1;
        }
        this.isHovered = false;
    }
    draw(inGame, number) {
        this.updateInterpolate();

        if (this.toOscillate === true && toRender({ x: this.render.x, y: this.render.y, radius: this.radius }, window.camera) === false && this.toSkipCulling !== true) {
            return;
        }

        const renderAnimationTimer = smoothstep(this.spawnAnimation);

        let scale = 1;
        let rotation = 0;

        ctx.lastTransform = ctx.getTransform();
        // ctx.save();
        ctx.translate(this.render.x, this.render.y);
        scale *= renderAnimationTimer * this.render.w / 50;

        // ctx.scale(renderAnimationTimer * this.render.w / 50, renderAnimationTimer * this.render.w / 50);
        // ctx.rotate(-(1 - renderAnimationTimer) * Math.PI * 3);
        rotation -= (1 - renderAnimationTimer) * Math.PI * 3;
        if (this.isDraggingPetalContainer === true) {
            if (this.draggingTimer === undefined) this.draggingTimer = 0;
            this.draggingTimer += 1000 / 30 * dt / 16.66;
            // ctx.rotate(Math.sin(this.draggingTimer / 280) * 0.28);
            rotation += Math.sin(this.draggingTimer / 280) * 0.28;
            if (this !== draggingPetalContainer) {
                this.isDraggingPetalContainer = false;
                this.undraggingPetalContainerTimer = 30;
                // this.lastDraggingTimer = this.draggingTimer;
                this.lastDraggingAngle = Math.sin(this.draggingTimer / 280) * 0.28;
                // this.draggingTimer = Math.sin(this.draggingTimer / 300) * 0.3;
            }
        } else if (this.undraggingPetalContainerTimer !== undefined) {
            if (this.interval === undefined) {
                // this.lastDraggingTimer += 1000 / 30;
                // if(Math.abs(Math.sin(this.lastDraggingTimer / 300) * 0.3) < Math.abs(this.draggingTimer)){
                //     this.draggingTimer = Math.sin(this.lastDraggingTimer / 300) * 0.3;
                // }
                this.lastDraggingAngle = interpolate(this.lastDraggingAngle, 0, 0.15);
                // ctx.rotate(this.lastDraggingAngle);
                rotation += this.lastDraggingAngle;
                this.undraggingPetalContainerTimer--;
                if (this.undraggingPetalContainerTimer < 0) {
                    delete this.undraggingPetalContainerTimer;
                    // delete this.lastDraggingTimer;
                    delete this.lastDraggingAngle;
                    delete this.draggingTimer;
                }

                // this.undraggingPetalContainerTimer = 30;
                // // this.draggingTimer /= 300;
                // // this.draggingTimer = this.draggingTimer % (Math.PI * 2);
                // // this.draggingTimer *= 300;
                // this.draggingTimer = Math.sin(this.draggingTimer / 300) * 0.3;// it becomes an angle now
                // this.interval = setInterval(() => {
                //     this.draggingTimer = interpolateDirection(this.draggingTimer, Math.PI / 2, 0.1);
                //     this.undraggingPetalContainerTimer--;
                //     if(this.undraggingPetalContainerTimer < 0){
                //         clearInterval(this.interval);
                //         delete this.undraggingPetalContainerTimer;
                //     }
                // }, 1000 / 30);
            }
        }

        if (this.toOscillate === true) {
            scale *= 1 + Math.sin(performance.now() / 1000 / .076) / 52;
            // ctx.scale(1+Math.sin(performance.now()/ 1000 / .076)/52,1+Math.sin(performance.now()/ 1000 / .076)/52);
            // ctx.rotate(this.angleOffset);
            rotation += this.angleOffset;
        }

        // if(Math.abs(scale * 60 - this.renderImageSize) > 10){
        //     this.generateRenderImage(scale * 60 * canvas.zoom);
        // }
        // ctx.drawImage(this.renderImage, -this.renderImageSize/2/canvas.zoom, -this.renderImageSize/2/canvas.zoom, this.renderImageSize/canvas.zoom, this.renderImageSize/canvas.zoom/*, -30 * scale, -30 * scale, 60 * scale, 60 * scale*/);
        // ctx.scale(8,8);

        // ___ start ___ 
        if (rotation !== 0) ctx.rotate(rotation);
        if (scale !== 1) ctx.scale(scale, scale);
        if (this.toOscillate === true && this.isDisplayPetalContainer !== true) {
            // bigger grey border
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.roundRect(-30, -30, 60, 60, 5);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }

        // draw rect
        ctx.lineWidth = 4.5;

        currentBiome = biomeManager.getCurrentBiome();
        this.greyed = (this.customBiome !== undefined && window.officialBiomes.includes(biomeManager.getCurrentBiome()) === true);
        if (this.type === 'soccer petal' && biomeManager.getCurrentBiome() !== 'Soccer!') this.greyed = true;
        if (this.greyed) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "#525252";
            ctx.strokeStyle = "#404040";
        } else {
            ctx.fillStyle = Colors.rarities[this.rarity].color;
            ctx.strokeStyle = Colors.rarities[this.rarity].border;
        }

        if ((currentBiome === '1v1' && this.generatedIn1v1 === false) || (currentBiome !== '1v1' && this.generatedIn1v1 === true)) {
            if (pregeneratedPvpStats === undefined) generatePvpStats();
            let statsToTake;
            if (currentBiome === '1v1') {
                statsToTake = pregeneratedPvpStats;
            } else {
                statsToTake = Stats;
            }

            if (this.petals.length !== 0 && this.petals[0].team !== undefined) {
                statsToTake = statsToTake.enemies;
            } else {
                statsToTake = statsToTake.petals;
            }

            let petalAmount = 0;
            if (statsToTake[this.type] !== undefined && statsToTake[this.type][this.rarity] !== undefined) {
                const petalLayout = statsToTake[this.type][this.rarity].petalLayout;
                if (petalLayout === undefined) petalAmount = 1;
                else {
                    for (let i = 0; i < petalLayout.length; i++) {
                        for (let j = 0; j < petalLayout[i].length; j++) {
                            petalAmount++;
                        }
                    }
                }
            } else {
                petalAmount = 1;
            }

            if (petalAmount < this.petals.length) {
                this.petals.length = petalAmount;
            } else {
                while (this.petals.length < petalAmount) {
                    this.petals.push(new Petal(this.petals[Math.floor(Math.random() * this.petals.length)]));
                }
            }
            this.generatedIn1v1 = !this.generatedIn1v1;
            delete this.imageType
        }

        // if (this.rarity == 8){
        //     ctx.fillStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 60%)`
        //     ctx.strokeStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 45%)`

        // }

        if (Colors.rarities[this.rarity].fancy !== undefined) {
            const gradientFill = ctx.createLinearGradient(-30, -30, 30, 30);
            createFancyGradient(gradientFill, this.rarity);
            //ctx.fillStyle = `hsl(${Math.cos(Date.now()/400)*35 + 285}, 100%, 15%)`
            ctx.fillStyle = gradientFill;
            ctx.strokeStyle = Colors.rarities[this.rarity].fancy.border;
        }

        ctx.beginPath();
        ctx.roundRect(-25, -25, 50, 50, .25);
        ctx.fill();
        ctx.closePath();

        if (Colors.rarities[this.rarity].fancy !== undefined && Colors.rarities[this.rarity].fancy.stars !== undefined) {
            ctx.save();
            //shiny stars & stuff
            if (!this.stars) {
                this.stars = [];
                for (let starnum = 0; starnum < Colors.rarities[this.rarity].fancy.stars; starnum++) {
                    this.stars.push({ x: Math.random() * 50 - 25, y: Math.random() * 50 - 25 })
                }
            }
            ctx.shadowBlur = 20;
            ctx.shadowColor = "white";
            ctx.fillStyle = "#ffffff";
            for (let star of this.stars) {
                star.x += 0.1;
                star.y += 0.1;
                if (star.x > 25 || star.y > 25) {
                    star.x = Math.random() * 800 - 20 - 30;
                    star.y = -30;

                }

                if (star.x < 25 && star.x > -25 && star.y < 25 && star.y > -25) {
                    ctx.beginPath();

                    var grad = ctx.createRadialGradient(star.x, star.y, 15, star.x, star.y, 0);
                    grad.addColorStop(0, "transparent");
                    grad.addColorStop(0.8, `rgba(255,255,255,${(Math.cos(Date.now() / 600 + star.x / 30 + star.y / 30) + 1) * 0.8})`);
                    grad.addColorStop(1, "white");

                    ctx.fillStyle = grad;
                    ctx.globalAlpha = 0.3;

                    ctx.fillRect(-25, -25, 50, 50);
                    ctx.globalAlpha = 1;

                    ctx.fillStyle = "#fff";

                    ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                }
            }
            ctx.restore();
        }

        //draw reload stuff
        if (inGame) {
            if (petalReloadData[number]) {
                //console.log("drawing reload data");
                if (petalReloadData[number].reload > 0.001 && petalReloadData[number].reload < 0.999) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.roundRect(-25, -25, 50, 50, .25);
                    ctx.clip();

                    ctx.globalAlpha = 0.3;
                    ctx.lineCap = "butt";

                    let offset = (1 - Math.pow(petalReloadData[number].reload, 0.7)) * Math.PI * 6/* + this.randomAngle*/;

                    ctx.strokeStyle = "#000000";
                    ctx.lineWidth = 50;
                    ctx.beginPath();
                    ctx.arc(0, 0, 25, offset - Math.PI * 2 * smoothstep(petalReloadData[number].reload), offset);
                    ctx.stroke();
                    ctx.closePath();

                    ctx.restore();
                }
            } else if (petalHpData[number]) {
                //console.log("hp data exists", petalHpData[number].hp);
                if (petalHpData[number].hp > 0.001 && petalHpData[number].hp < 0.999) {
                    //from 1 -> hp overlay pc
                    ctx.save();
                    ctx.beginPath();
                    ctx.roundRect(-23, -23, 46, 46, .25);
                    ctx.clip();

                    ctx.globalAlpha = 0.6;
                    ctx.lineCap = "butt";

                    ctx.fillStyle = "#000000";
                    ctx.beginPath();
                    ctx.rect(-25, -25, 50, 50 * (1 - petalHpData[number].hp));
                    ctx.fill();
                    ctx.closePath();

                    ctx.restore();
                }

            }
        }

        if (flowrMod.pcTrans === true && !Colors.rarities[this.rarity].fancy) {
            ctx.fillStyle = Colors.rarities[this.color]
            ctx.beginPath();
            ctx.globalAlpha = .5
            ctx.roundRect(-25 - (flowrMod.pcTrans === true ? 4.5 : 2.25), -25 - (flowrMod.pcTrans === true ? 4.5 : 2.25), 50 + (flowrMod.pcTrans === true ? 9 : 4.5), 50 + (flowrMod.pcTrans === true ? 9 : 4.5), flowrMod.pcTrans === true ? 2.5 : 1);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1
        }

        ctx.beginPath();
        ctx.roundRect(-25, -25, 50, 50, .25);
        ctx.stroke();
        ctx.closePath();

        if (Colors.rarities[this.rarity].fancy !== undefined) {
            const gradientFill = ctx.createLinearGradient(-30, -30, 30, 30);
            createFancyGradient(gradientFill, this.rarity);
            ctx.fillStyle = gradientFill

            ctx.beginPath();
            ctx.globalAlpha = .5
            ctx.roundRect(-25 - (flowrMod.pcTrans === true ? 4.5 : 2.25), -25 - (flowrMod.pcTrans === true ? 4.5 : 2.25), 50 + (flowrMod.pcTrans === true ? 9 : 4.5), 50 + (flowrMod.pcTrans === true ? 9 : 4.5), flowrMod.pcTrans === true ? 2.5 : 1);
            ctx.fill();
            ctx.closePath();
            ctx.globalAlpha = 1
        }

        let renderIcons = false
        let type = 'normal'
        let renderMode = 'normal'
        if (biomeManager.getCurrentBiome() == '1v1' || room.biome == '1v1') type = 'pvp'
        if (flowrMod.rrolf == true || this.toRenderText == false) renderMode = 'rrolf'
        if (flowrMod.images.pcs && flowrMod.images.ecs) if (flowrMod.images.pcs[renderMode][type][`${this.type}0`] || flowrMod.images.ecs[this.type]) renderIcons = true

        if (renderIcons == false) {

            if (this.greyed) ctx.globalAlpha = 1;

            if (this.toRenderText === false || flowrMod.rrolf === true) {
                ctx.translate(0, 3.5);
            }

            // // no need for an arc, just draw the petal
            if (this.petals.length === 1) {
                this.petals[0].render.x = 0//this.x;
                this.petals[0].render.y = 0//this.y - this.h / 10;

                let scaleMult = flowrMod.rrolf === true ? 1 : 0.8;
                if (this.petals[0].radius * .8 > 13.25 / 2) {
                    scaleMult = 13.25 / (this.petals[0].radius * .8) / 2;
                }
                if (petalContainerRenderSizeMultsMap[this.petals[0].type] !== undefined) {
                    if (typeof petalContainerRenderSizeMultsMap[this.petals[0].type] == "object") {
                        if (petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity]) {
                            scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity];
                        }
                    }
                    else {
                        scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type];
                    }
                }

                let individualRotate = false;
                if (petalContainerIndividualRotate[this.petals[0].type] !== undefined) {
                    if (typeof petalContainerIndividualRotate[this.petals[0].type] == "object") {
                        if (petalContainerIndividualRotate[this.petals[0].type][this.petals[0].rarity]) {
                            individualRotate = petalContainerIndividualRotate[this.petals[0].type][this.petals[0].rarity];
                        }
                    }
                    else {
                        individualRotate = petalContainerIndividualRotate[this.petals[0].type];
                    }
                }

                // ctx.translate(0, -4);
                // ctx.scale(scaleMult, scaleMult);
                // if (individualRotate !== false)ctx.rotate(individualRotate)
                let last = { y: this.petals[0].render.y, selfAngle: this.petals[0].selfAngle };
                this.petals[0].render.y -= 4;
                this.petals[0].scaleMult = scaleMult;
                if (individualRotate !== false) this.petals[0].selfAngle += individualRotate;

                if (this.greyed === true) window.alphaMult = 0.4;
                this.petals[0].draw();
                // if (individualRotate !== false)ctx.rotate(-individualRotate)
                // ctx.scale(1/scaleMult,1/scaleMult);
                // ctx.translate(0, 4);
                this.petals[0].render.y = last.y;
                delete this.petals[0].scaleMult;
                this.petals[0].selfAngle = last.selfAngle;
                // console.log(this.petals[0], ctx.getTransform());
            } else {
                // todo: generate positions in init instead of recalcing every frame, its not like we're gonna be adding more petals to an existing petal slot
                let petalRadius = (this.petals[0] ?? { radius: 0 }).radius;
                if ((this.petals[0] ?? { type: 'not peas' }).type === 'Peas') {
                    petalRadius -= 0.2;
                }
                let radius = Math.min(petalRadius * 1.16, 25 - petalRadius);
                // if(this.petals.length === 3){
                //     // odd
                //     ctx.translate(-1, 0);
                // }

                let greaterThanMargin = petalRadius * .8 + radius - 13.25;
                if (greaterThanMargin > 0) {
                    radius -= greaterThanMargin;
                    if (radius < 8) {
                        greaterThanMargin = 8 - radius;
                        radius = 8;

                        // radius *= 1 / (greaterThanMargin/(13.25)+1); 
                        petalRadius *= 1 / (greaterThanMargin / 13.25 + 1);
                        // petalRadius = Math.max(8, petalRadius);
                        for (let i = 0; i < this.petals.length; i++) {
                            this.petals[i].radius = petalRadius;
                        }
                    }
                }
                if (petalContainerMultPetalRadiusMap[this.petals[0].type] !== undefined) {
                    if (typeof petalContainerMultPetalRadiusMap[this.petals[0].type] == "object") {
                        if (petalContainerMultPetalRadiusMap[this.petals[0].type][this.petals[0].rarity]) {
                            radius *= petalContainerMultPetalRadiusMap[this.petals[0].type][this.petals[0].rarity];
                        }
                    }
                    else {
                        radius *= petalContainerMultPetalRadiusMap[this.petals[0].type];
                    }
                }
                let toPointToCenter = ['Stinger'].includes((this.petals[0] ?? { type: "Basic" }).type) && (this.petals[0] ?? { rarity: 0 }).rarity > 5;
                if (toPointToCenter == true) {
                    toPointToCenter = 0;
                }
                if (pointToCenterPetals[this.petals[0].type] !== undefined) {
                    if (typeof pointToCenterPetals[this.petals[0].type] == "object") {
                        if (pointToCenterPetals[this.petals[0].type][this.petals[0].rarity]) {
                            toPointToCenter = pointToCenterPetals[this.petals[0].type][this.petals[0].rarity];
                        }
                    }
                    else {
                        toPointToCenter = pointToCenterPetals[this.petals[0].type];
                    }
                }
                for (let i = 0; i < this.petals.length; i++) {
                    let rotateOffset = 0;
                    if (petalContainerRotateMap[this.petals[0].type]) {
                        rotateOffset = petalContainerRotateMap[this.petals[0].type];
                    }
                    const angle = Math.PI * 2 * i / this.petals.length + rotateOffset;
                    this.petals[i].render.x = 0//this.x + Math.cos(angle) * radius;
                    this.petals[i].render.y = 0//this.y + Math.sin(angle) * radius - this.h / 10;

                    let scaleMult = flowrMod.rrolf === true ? 0.85 : 0.8;
                    if (petalContainerRenderSizeMultsMap[this.petals[0].type] !== undefined) {
                        if (typeof petalContainerRenderSizeMultsMap[this.petals[0].type] == "object") {
                            if (petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity]) {
                                scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type][this.petals[0].rarity];
                            }
                        }
                        else {
                            scaleMult *= petalContainerRenderSizeMultsMap[this.petals[0].type];
                        }
                    }

                    let last = { x: this.petals[i].render.x, y: this.petals[i].render.y, selfAngle: this.petals[i].selfAngle };
                    this.petals[i].render.x += Math.cos(angle) * radius * scaleMult / .8;
                    this.petals[i].render.y += Math.sin(angle) * radius * scaleMult / .8 - 4;
                    this.petals[i].scaleMult = scaleMult;
                    if (toPointToCenter !== false) this.petals[i].selfAngle += angle + Math.PI + toPointToCenter;
                    // ctx.translate(Math.cos(angle) * radius * scaleMult/.8, Math.sin(angle) * radius * scaleMult/.8 - 4);
                    // ctx.scale(scaleMult, scaleMult);
                    // if(toPointToCenter !== false)ctx.rotate(angle+Math.PI+toPointToCenter);
                    if (this.greyed === true) window.alphaMult = 0.4;
                    this.petals[i].draw();
                    this.petals[i].render.x = last.x;
                    this.petals[i].render.y = last.y;
                    delete this.petals[i].scaleMult;
                    this.petals[i].selfAngle = last.selfAngle;
                    // if(toPointToCenter !== false)ctx.rotate(-angle-Math.PI-toPointToCenter);
                    // ctx.scale(1/scaleMult, 1/scaleMult);
                    // ctx.translate(-Math.cos(angle) * radius * scaleMult/.8, -Math.sin(angle) * radius * scaleMult/.8 + 4);
                }

                // if(this.petals.length === 3){
                //     // odd
                //     ctx.translate(1, 0);
                // }
            }

            if (this.toRenderText === false || flowrMod.rrolf === true) {
                ctx.translate(0, -3.5);
            }

            if (this.toRenderText === undefined) {
                if (this.type === "Dandelion") {
                    ctx.font = '900 8.5px Ubuntu';
                    ctx.letterSpacing = "-.1px";
                } else if (this.type === "Lightning" || this.type === "Pentagon") {
                    ctx.font = '900 9.5px Ubuntu';
                    ctx.letterSpacing = "-.1px";
                } else {
                    ctx.font = '900 11px Ubuntu';
                    ctx.letterSpacing = "-.05px";
                }
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';

                // const canvasScale = ctx.getTransform().m11;
                ctx.lineWidth = 1.35;//5//Math.ceil(1.25 / canvasScale);

                ctx.fontKerning = "none";

                let type = this.type;
                if (type == "Fire Missile") {
                    type = "Missile";
                }
                if (type == "Waterlogged Compass") {
                    type = "Compass";
                }
                if (type == "Dark Compass") {
                    type = "Compass";
                }
                if (type == "Plastic Egg") {
                    type = "Egg";
                }
                if (type == "Jellyfish Egg") {
                    type = "Egg";
                }
                if (type == "Oranges" && this.rarity >= 12) {
                    type = "Orange";
                }
                if (type == "Bud" && flowrMod.YGGPLZ === true) {
                    type = "Yggdrasil";
                }
                if (this.greyed) ctx.globalAlpha = 0.3;
                if (flowrMod.rrolf !== true) ctx.strokeText(type, 0, 13.25);
                if (flowrMod.rrolf !== true) ctx.fillText(type, 0, 13.25);
                ctx.globalAlpha = 1;
            }
        } else {
            const ratio = this.render.w * (62 / this.render.w)

            ctx.beginPath()
            ctx.save()
            ctx.rect(-(ratio / 2 - ratio / 2 / 4.5), -(ratio / 2 - ratio / 2 / 4.5), ratio - ratio / 4.5, ratio - ratio / 4.5)
            ctx.clip()
            ctx.closePath()
            if (this.petals[0].constructor === Petal) {
                if (!this.imageType) {
                    for (let i = 0; i >= 0; i++) {
                        if (flowrMod.images.pcs[renderMode][type][`${this.type}${i}`] && flowrMod.images.pcs[renderMode][type][`${this.type}${i}`].rarity <= this.rarity) {
                            this.imageType = `${this.type}${i}`
                        } else {
                            break;
                        }
                    }
                }
                const img = flowrMod.images.pcs[renderMode][type][this.imageType].image
                const imgSc = this.render.w * (62 / this.render.w) / (img.width * 1.1)

                ctx.scale(imgSc, imgSc)
                ctx.drawImage(flowrMod.images.pcs[renderMode][type][this.imageType].image, -img.width / 2, -img.width / 2)
                ctx.scale(1 / imgSc, 1 / imgSc)
            } else if (this.petals[0].constructor === Enemy) {
                if (!this.imageType) {
                    if (flowrMod.images.ecs[`${this.type}`]) {
                        this.imageType = `${this.type}`
                    }
                }
                const img = flowrMod.images.ecs[this.imageType].image
                const imgSc = this.render.w * (62 / this.render.w) / (img.width * 1.1)

                ctx.scale(imgSc, imgSc)
                ctx.drawImage(flowrMod.images.ecs[this.imageType].image, -img.width / 2, -img.width / 2)
                ctx.scale(1 / imgSc, 1 / imgSc)
            }
            ctx.restore()
        }

        if (scale !== 1) ctx.scale(1 / scale, 1 / scale);
        if (rotation !== 0) ctx.rotate(-rotation);
        // ___ end ___

        if (this.amount !== 1 || (performance.now() - this.lastAmountChangedTime < 240)) {
            if (performance.now() - this.lastAmountChangedTime < 240) {
                ctx.globalAlpha = smoothstep((performance.now() - this.lastAmountChangedTime) / 240);
            }
            if (this.amount === 1) {
                ctx.globalAlpha = 1 - ctx.globalAlpha;
            }
            ctx.font = `600 ${13 * scale}px Ubuntu`;
            ctx.letterSpacing = "1px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'right';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.translate((70 / (2.5) + .5) * scale, (-42 / (2.5) + .5) * scale);
            ctx.rotate(Math.PI / 9.1);
            if (this.greyed) ctx.globalAlpha *= 0.3;
            ctx.strokeText('x' + (this.amount === 1 ? 2 : formatAmountHighPrecision(this.amount)), 0, 0);
            ctx.fillText('x' + (this.amount === 1 ? 2 : formatAmountHighPrecision(this.amount)), 0, 0);
            ctx.globalAlpha = 1;
        }

        // ctx.rotate((1 - renderAnimationTimer) * Math.PI * 3);
        // ctx.scale(1 / renderAnimationTimer * 50 / this.render.w, 1 / renderAnimationTimer * 50 / this.render.w);
        // ctx.translate(-this.render.x, -this.render.y);
        // ctx.restore();// This is needed because otherwise compounding floating point prescision errors actually noticably impact the game
        ctx.setTransform(ctx.lastTransform);
        delete ctx.lastTransform;
    }
}

StatsBox = class StatsBox {
    constructor(fields = [{}], { x, y, w, h }, regenData) {
        this.fields = fields;

        this.x = x;
        this.y = y;
        this.w = w;

        if (h === undefined) {
            this.h = 1000;
            ctx.globalAlpha = 0;
            this.draw();
            this.h = this.currentHeight + 10;
            ctx.globalAlpha = 1;
        } else {
            this.h = h;
        }

        this.pc = {};

        this.is1v1Stats = false;//biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1';
        this.regenData = regenData;
    }
    draw() {

        if (this.regenData !== undefined && this.is1v1Stats !== (biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1')) {
            const new1v1Stats = this.is1v1Stats = !this.is1v1Stats;
            if (this.is1v1Stats === true) {
                if (hasGeneratedPVPStats === false) generatePvpStats();
            }
            if (this.regenData[0] !== undefined && (pregeneratedPvpStats.petals[this.regenData[0].type] !== undefined || pregeneratedPvpStats.enemies[this.regenData[0].type] !== undefined)) {
                if (pregeneratedPvpStats.petals[this.regenData[0].type] !== undefined) this.regenData[0].petalStats = pregeneratedPvpStats.petals[this.regenData[0].type][this.regenData[0].rarity];
                else this.regenData[0].petalStats = pregeneratedPvpStats.enemies[this.regenData[0].type][this.regenData[0].rarity];

                if (this.regenData[0].type == "Dandelion") {
                    console.log(this)
                }

                this.regenData[0].petalStats = structuredClone(this.regenData[0].petalStats);

                const petalStats = this.regenData[0].petalStats;
                delete petalStats.override;
                delete petalStats.pvpOverride;



                delete petalStats.petalLayout;
                delete petalStats.damageScalers;
                delete petalStats.healthScalers;
                delete petalStats.healScalers;
                delete petalStats.stickParentRotation;
                delete petalStats.attackDistanceMult;
                delete petalStats.defendDistanceMult;
                delete petalStats.neutralDistanceMult;
                delete petalStats.radius;
                delete petalStats.spawnSystem;
                delete petalStats.petalType;
                delete petalStats.killOnShoot;
                delete petalStats.homingCorrection;
                delete petalStats.killOnSummon;
                delete petalStats.raritiesBelow;
                delete petalStats.killPetsOnDie;
                delete petalStats.customBiome;
                delete petalStats.poisonDamage;
                delete petalStats.poisonTime;

                delete petalStats.detectionDistance;
                delete petalStats.personality;
                if (petalStats.knockback === 0.1) delete petalStats.knockback;
            }
            const statsBox = generateStatsBox(...this.regenData);
            for (let key in statsBox) {
                this[key] = statsBox[key];
            }
            this.is1v1Stats = new1v1Stats;
            this.shouldRegenPC = true;
        }
        ctx.textAlign = 'left';
        ctx.textBaseline = 'center';
        ctx.fontKerning = "none";
        ctx.letterSpacing = "-.1px";
        ctx.font = '900 16px Ubuntu';
        ctx.translate(this.x, this.y);

        this.drawBackground();

        this.currentHeight = 0;
        for (let i = 0; i < this.fields.length; i++) {
            this.drawField(this.fields[i]);
        }

        ctx.translate(-this.x, -this.y);
    }
    drawBackground() {
        const lastGA = ctx.globalAlpha;
        ctx.globalAlpha *= 0.55;
        ctx.fillStyle = 'black';

        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 6);
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha = lastGA;
    }
    drawField(field) {
        if (this['draw' + field.type] === undefined) return;
        this['draw' + field.type](field);
    }
    drawTitle(field) {
        ctx.font = '900 28px Ubuntu';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;

        if (field.value === 'Bud' && flowrMod.YGGPLZ === true) field.value = 'Yggdrasil';
        if (field.value === 'Queen Ant' && flowrMod.fatass === true) field.value = 'Fatass';

        ctx.strokeText(field.value, 16, this.currentHeight + 28);
        ctx.fillText(field.value, 16, this.currentHeight + 28);

        this.currentHeight += 40;
    }
    drawMargin(field) {
        this.currentHeight += field.value;
    }
    drawRarity(field) {
        ctx.font = '900 16px Ubuntu';
        ctx.fillStyle = Colors.rarities[field.value].color;

        if (Colors.rarities[field.value].fancy !== undefined) {
            const gradientFill = ctx.createLinearGradient(-ctx.measureText(field.value).width * Colors.rarities[field.value].fancy.spread, -16, ctx.measureText(field.value).width * Colors.rarities[field.value].fancy.spread, 16);
            createFancyGradient(gradientFill, field.value);
            ctx.fillStyle = gradientFill;
        }

        ctx.strokeStyle = 'black';//rarityToColor[field.value].border;
        ctx.lineWidth = 2;

        ctx.strokeText(Colors.rarities[field.value].name, 16, this.currentHeight + 20);
        ctx.fillText(Colors.rarities[field.value].name, 16, this.currentHeight + 20);

        this.currentHeight += 40;
    }
    drawDescription(field) {
        ctx.font = '900 14px Ubuntu';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        const wrappedText = wrapText(field.value, 16, this.currentHeight + 10, this.w - 20 - 10, 15);
        for (let i = 0; i < wrappedText.length; i++) {
            ctx.strokeText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
            ctx.fillText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
        }
        this.currentHeight = wrappedText[wrappedText.length - 1][2] + 10;
    }
    drawStat(field) {
        ctx.font = '900 13px Ubuntu';
        ctx.fillStyle = field.color;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        if (Array.isArray(field.value)) {
            let statValue = field.value.join(", ");
            if (field.name == "poison") {
                statValue = formatAmountHighPrecision(field.value[0]) + " total, " + formatAmountHighPrecision(field.value[1]) + "/s";
            }
            const wrappedText = wrapText(`${this.formatName(field.name)}: ${statValue}`, 12, this.currentHeight + 10, this.w - 20 - 10, 15);

            for (let i = 0; i < wrappedText.length; i++) {
                ctx.strokeText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
                ctx.fillText(wrappedText[i][0], wrappedText[i][1], wrappedText[i][2]);
            }
            this.currentHeight = wrappedText[wrappedText.length - 1][2] + 10;
            return;
        }

        const statText = `${this.formatName(field.name)}: ${Number.isFinite(field.value) ? Math.round(field.value * 100) / 100 : field.value}`;
        ctx.strokeText(statText, 12, this.currentHeight + 9);
        ctx.fillText(statText, 12, this.currentHeight + 9);


        this.currentHeight += 16;
    }
    formatName(name) {
        if (name.length > 1) {
            name = name[0].toUpperCase() + name.slice(1);
        }

        for (let i = 0; i < name.length; i++) {
            if (name[i].toUpperCase() === name[i]) {
                name = name.slice(0, i) + ' ' + name[i].toUpperCase() + name.slice(i + 1);
                i += 2;
            }
        }
        return name;
    }
    drawPetalContainer({ pc }) {
        this.pc = pc;
        pc.x = pc.render.x = this.w - 18 - pc.w / 2;
        pc.y = pc.render.y = 13 + pc.h / 2;

        const ga = ctx.globalAlpha;
        pc.draw();
        ctx.globalAlpha = ga;
    }
    drawDropsPetalContainer(field) {
        let { data, rarity } = field;
        if (data === null) return;

        // generate petal containers
        if (field.pcs === undefined) {
            // get our rarity out of all rarities
            data = data[rarity];
            // console.log(data);

            field.pcs = [];
            for (let key in data) {
                const type = key;
                const rarities = data[key];
                for (let i = 0; i < rarities.length; i++) {
                    if (rarities[i] !== 0) {
                        const petalStats = Stats.petals[type][i];

                        // console.log(Stats.petals[type]);

                        let petalAmount = 0;

                        const petalLayout = petalStats.petalLayout;
                        for (let j = 0; j < petalLayout.length; j++) {
                            for (let k = 0; k < petalLayout[j].length; k++) {
                                petalAmount++;
                            }
                        }
                        if (i === 8 && type === 'Bubble') petalAmount = 2

                        const petalArray = [];
                        for (let j = 0; j < petalAmount; j++) {
                            let p = petalArray.push(new Petal({
                                x: 0,
                                y: 0,
                                angle: 0,
                                radius: petalStats.radius,
                                type: type,
                                rarity: i,
                                damage: 0,
                                offset: 0,
                                distance: 0,
                                dv: 0,
                                id: Math.random(),
                                subId: 0,
                                subStackedId: 0,
                                dead: false,
                                hp: 1,
                                maxHp: 1,
                                reload: 1,
                                maxReload: 1,
                                angleOffset: 0,
                                petalContainerId: -1
                            }));
                            if (type === 'Stinger' && i > 5) {
                                petalArray[p - 1].offset = { angle: 5.026548245743669, offset: 15 }
                            }
                        }

                        field.pcs.push(new PetalContainer(petalArray, { x: 0, y: 0, w: 50, h: 50, toOscillate: false, radius: 0 }, Math.random(), 1, 0));
                        if (rarities[i] > 10) {
                            field.pcs[field.pcs.length - 1].dropPercent = Math.ceil(rarities[i] * 10) / 10;
                        }
                        else {
                            field.pcs[field.pcs.length - 1].dropPercent = Math.ceil(rarities[i] * 100) / 100;
                        }
                    }
                }
            }
        }

        this.currentHeight += 36;

        let wOffset = 0;

        for (let i = 0; i < field.pcs.length; i++) {
            const pc = field.pcs[i];

            pc.render.x = pc.x = 18 + pc.w / 2 + wOffset;
            pc.render.y = pc.y = this.currentHeight;

            const ga = ctx.globalAlpha;
            pc.draw();
            ctx.globalAlpha = ga;

            // if(wOffset + pc.w / 2 > this.w) {console.log('xd'); this.w = wOffset + pc.w / 2;}
            this.w = Math.max(pc.w + 16 + pc.w / 2 + wOffset, this.w);

            const lastLetterSpacing = ctx.letterSpacing;
            ctx.font = '900 11px Ubuntu';
            ctx.letterSpacing = "-.05px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;

            ctx.strokeText(pc.dropPercent + '%', pc.render.x, pc.render.y + pc.h / 2 + 11);
            ctx.fillText(pc.dropPercent + '%', pc.render.x, pc.render.y + pc.h / 2 + 11);
            // mk
            ctx.letterSpacing = lastLetterSpacing;

            if (field.pcs[i + 1] === undefined || field.pcs[i + 1].type !== pc.type) {
                this.currentHeight += pc.h + 24;
                wOffset = 0;
            } else {
                wOffset += pc.w + 16;
            }
        }

        this.currentHeight -= 38;
    }
}

CraftingMenu = class CraftingMenu {
    constructor() {
        this.state = 'crafting';

        this.icon = new Image();
        if (location.origin === 'https://flowrclient.serum0017.repl.co') {
            this.icon.src = 'https://flowr.fun/gfx/okbutthisoneisoriginal.png';
        } else {
            this.icon.src = 'gfx/okbutthisoneisoriginal.png';
        }

        this.hoveringOverButton = false;

        this.hoveringOverX = false;

        this.menuActive = false;

        this.petalContainers = {/*type: {rarity: petalContainer}*/ };
        this.petalContainers2 = { /*set: false*/ }

        this.fillerPetalSlots = {}// same as petalContainers except there's slots for stuff that isnt rendered

        this.w = 445;//510;
        this.h = 665;//740;

        this.scroll = 0;
        this.horizontalScroll = 0;
        this.render = { scroll: this.scroll, horizontalScroll: this.horizontalScroll };

        this.totalPetalHeight = 0;

        // relative to this.x, this.y
        this.craftingPetalSlotsDimensions = {
            x: this.w * .30,
            y: this.h * .24,
            maxRadius: 88,
            radius: 88,
            angleOffset: 0
        }
        this.craftingPetalSlots = [];
        for (let i = 0; i < 5; i++) {
            const angle = Math.PI * 2 * i / 5 - Math.PI / 2;
            this.craftingPetalSlots.push({
                x: this.craftingPetalSlotsDimensions.x + Math.cos(angle) * this.craftingPetalSlotsDimensions.radius,
                y: this.craftingPetalSlotsDimensions.y + Math.sin(angle) * this.craftingPetalSlotsDimensions.radius,
                w: 65,
                h: 65
            })
        }
        this.craftingPetalContainers = [];

        this.craftingAnimationState = false;// false, true, "display" <- displays the collected petalSlots
        this.craftingAnimationTimer = 0;
        this.craftingAnimationData = {/*successAmount, lostAmount, pc*/ };

        this.hoveringOverCraftButton = false;
        this.craftingButton = {
            x: this.w * .83,
            y: this.h * .28,
            w: this.w * .16,
            h: this.w * .11
        }

        this.inventorySpace = {
            x: 6,
            y: this.h * .48,
            w: this.w - 10 - 24,
            h: this.h * .52 - 4
            // h: this.h * .52 - 4 - 24
        }

        this.scrollbar = { top: 0, bottom: 0, renderTop: 0, renderBottom: 0, length: 75, start: this.inventorySpace.y + 105 / 2, end: this.inventorySpace.y + this.inventorySpace.h - 105 / 2 };
        this.horizontalScrollBar = { left: 0, right: 0, renderLeft: 0, renderRight: 0, length: 75, start: this.inventorySpace.x + 105 / 2, end: this.inventorySpace.x + this.inventorySpace.w - 105 / 2 };

        this.draggingScrollBar = false;
        this.draggingHorizontalScrollBar = false;

        this.typeIndex = 0;
        this.typeIndexes = {/*[type]: typeIndex*/ };

        this.petalContainerSize = 57.4;

        this.maxRarity = 0;

        this.fadingPetalContainers = [];

        this.rainingPetalSlots = [];
        this.isRainingPetalSlots = false;

        this.hoveringOverScrollBar = false;
        this.hoveringOverHorizontalScrollBar = false;
    }
    enterGame() {
        this.craftingPetalContainers = [];

        this.craftingAnimationState = false;// false, true, "display" <- displays the collected petalSlots
        this.craftingAnimationTimer = 0;
        this.craftingAnimationData = {/*successAmount, lostAmount, pc*/ };
    }
    addPetalContainer(p) {
        // this whole function is really inefficient lol. If you're ever bored then refactor ig.
        if (this.petalContainers[p.type] === undefined) {
            this.petalContainers[p.type] = {};
            this.typeIndexes[p.type] = this.typeIndex++;
        }

        if (this.petalContainers[p.type][p.rarity] !== undefined) {
            this.petalContainers[p.type][p.rarity].amount += p.amount;
            this.petalContainers[p.type][p.rarity].lastAmountChangedTime = time;
            if (p.attempt != undefined) {
                this.petalContainers[p.type][p.rarity].attempt = p.attempt;
            }
        } else {
            this.petalContainers[p.type][p.rarity] = p;
            this.petalContainers[p.type][p.rarity].w = this.petalContainerSize;
            this.petalContainers[p.type][p.rarity].h = this.petalContainerSize;
            if (p.attempt != undefined) {
                this.petalContainers[p.type][p.rarity].attempt = p.attempt;
            }
        }

        if (p.rarity > this.maxRarity) {
            this.maxRarity = p.rarity;
            if (this.maxRarity > 5) {
                this.inventorySpace.h = this.h * .52 - 4 - 24
            }
        }
        this.recalculateTypeIndexes()
    }
    removePetalContainer(type, rarity) {
        if (this.petalContainers[type][rarity] !== undefined && this.petalContainers[type][rarity].amount >= 2) {
            this.petalContainers[type][rarity].amount--;
            this.petalContainers[type][rarity].lastAmountChangedTime = time;
        } else {
            delete this.petalContainers[type][rarity];
            // if(Object.keys(this.petalContainers[type]).length === 0){
            //     delete this.petalContainers[type];
            //     this.recalculateTypeIndexes();
            // }
        }
    }
    removePetalContainerAmount(type, rarity, amount) {
        if (this.petalContainers[type][rarity] !== undefined && this.petalContainers[type][rarity].amount >= amount + 1) {
            this.petalContainers[type][rarity].amount -= amount;
            this.petalContainers[type][rarity].lastAmountChangedTime = time;
        } else {
            delete this.petalContainers[type][rarity];
            // if(Object.keys(this.petalContainers[type]).length === 0){
            //     delete this.petalContainers[type];
            //     this.recalculateTypeIndexes();
            // }
        }
    }
    recalculateTypeIndexes() {
        if (flowrMod.noCustom === true) {
            Object.keys(this.petalContainers).forEach(petal => {
                let officialList = Object.keys(Descriptions.petals)
                if (!officialList.includes(petal)) {
                    delete this.petalContainers[petal]
                }
            })
        }
        if (flowrMod.alphabet === false) {
            this.typeIndexes = {};
            this.typeIndex = 0;
            for (let typeKey in this.petalContainers) {
                this.typeIndexes[typeKey] = this.typeIndex++;
            }
        } else {
            if (Object.keys(this.petalContainers).length > 0) {
                let refPC = {}
                for (let i of Object.keys(this.petalContainers).sort()) {
                    refPC[i] = this.petalContainers[i]
                }
                this.petalContainers = refPC

                this.typeIndexes = {};
                let index = 0
                for (let i of Object.keys(this.petalContainers)) {
                    this.typeIndexes[i] = index
                    index++
                }
            }
        }
    }
    draw() {
        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;

        this.drawIcon(alpha);

        // animation stuff here, calling drawInventory but possibly transforming beforehand
        if (this.menuActive === true || (time - this.lastCloseTime) < 160) {
            this.drawInventory(alpha);
        } else {
            this.hoveringOverX = false;
        }
    }
    getMainStroke() {
        return this.state === 'crafting' ? '#986c40' : '#603f99';
    }
    getMainFill() {
        return this.state === 'crafting' ? '#da9b5b' : '#895adb'
    }
    getHoverFill() {
        return this.state === 'crafting' ? '#dea56b' : '#956adf'
    }
    drawIcon() {
        ctx.lineWidth = 6;
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();

        if (mouse.canvasX + 6 > 20 && mouse.canvasY + 6 > canvas.h - 20 - 80 && mouse.canvasX - 6 < 20 + 80 && mouse.canvasY - 6 < canvas.h - 20 - 80 + 80) {
            ctx.fillStyle = this.getHoverFill();
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            // if(this.hoveringOverX === false){
            //     document.body.style.cursor = 'auto';
            // }
            this.hoveringOverButton = false;
        }

        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(this.icon, 20 + 15, canvas.h - 20 - 80 + 15, 80 - 15 * 2, 80 - 15 * 2);

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        ctx.strokeText("[C]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);
        ctx.fillText("[C]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);

        if (this.isRainingPetalSlots === true) {
            this.renderRainPetalSlots();
        }
    }
    toggleMenu() {
        if (this.menuActive === true) {
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if (globalInventory.menuActive === true) {
                globalInventory.toggleMenu();
            }
            if (flowrMod.petalGallery.menuActive === true) {
                flowrMod.petalGallery.toggleMenu();
            }
            if (mobGallery.menuActive === true) {
                mobGallery.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;
        // console.log(this.menuActive);
    }
    drawInventory(alpha = 1) {
        this.render.scroll = interpolate(this.render.scroll, this.scroll, 0.0070 * dt);

        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if (time - this.lastCloseTime < 160) {
            translation += this.h * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if (time - this.lastOpenTime < 160) {
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if (translation !== 0) {
            ctx.translate(0, translation);
        }

        ctx.translate(130, canvas.h - this.h - 20);

        // if(time - this.lastCloseTime < 500){
        //     ctx.translate()
        // }
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3.75;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 32px Ubuntu`;
        ctx.strokeText("Craft", this.w / 2, 29);
        ctx.fillText("Craft", this.w / 2, 29);

        if (this.craftingAnimationState === true) {
            this.runCraftingAnimation();
        }
        if (this.craftingAnimationState === "display") {
            this.displayPetalContainer.x = this.craftingPetalSlotsDimensions.x + this.displayPetalContainer.render.w * .35;
            this.displayPetalContainer.y = this.craftingPetalSlotsDimensions.y + this.displayPetalContainer.render.h * .35;
            this.displayPetalContainer.render.x = this.displayPetalContainer.x;
            this.displayPetalContainer.render.y = this.displayPetalContainer.y;
            this.displayPetalContainer.draw();
            // ctx.fillStyle = '#b17f49';
            // ctx.beginPath();
            // ctx.roundRect(this.displayPetalContainer.x, this.displayPetalContainer.y, this.displayPetalContainer.w, this.displayPetalContainer.h, 8);
            // ctx.fill();
            // ctx.closePath();
        } else {
            for (let i = 0; i < this.craftingPetalSlots.length; i++) {
                // this.craftingPetalSlots[i]
                ctx.fillStyle = '#b17f49';
                ctx.beginPath();
                ctx.roundRect(this.craftingPetalSlots[i].x, this.craftingPetalSlots[i].y, this.craftingPetalSlots[i].w, this.craftingPetalSlots[i].h, 8);
                ctx.fill();
                ctx.closePath();

                if (this.craftingPetalContainers[i] !== undefined) {
                    const pc = this.craftingPetalContainers[i];
                    pc.x = this.craftingPetalSlots[i].x + this.craftingPetalSlots[i].w / 2;
                    pc.y = this.craftingPetalSlots[i].y + this.craftingPetalSlots[i].h / 2;
                    pc.draw();
                }
            }
        }

        if (mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, { x: this.craftingButton.x - this.craftingButton.w / 2 + 130, y: this.craftingButton.y - this.craftingButton.h / 2 + canvas.h - this.h - 20, w: this.craftingButton.w, h: this.craftingButton.h }) === true && this.craftingAnimationState === false) {
            this.hoveringOverCraftButton = true;
        } else {
            this.hoveringOverCraftButton = false;
        }
        ctx.letterSpacing = "0px";
        let fillcolor = "#777777"
        let strokecolor = "#555555";
        if (this.craftingPetalContainers[0] !== undefined) {// in that case we should make stroke more thicc i think
            if (Colors.rarities[this.craftingPetalContainers[0].rarity + 1]) {
                fillcolor = Colors.rarities[this.craftingPetalContainers[0].rarity + 1].color;
                strokecolor = Colors.rarities[this.craftingPetalContainers[0].rarity + 1].border;

                if (this.hoveringOverCraftButton) {
                    fillcolor = blendColor(fillcolor, "#ffffff", 0.1);
                    strokecolor = blendColor(strokecolor, "#ffffff", 0.03)
                }
            }
        }
        ctx.lineWidth = 7;
        ctx.fillStyle = fillcolor;//this.hoveringOverCraftButton ? this.getHoverFill() : this.getMainFill();
        ctx.strokeStyle = strokecolor; //this.getMainStroke();
        ctx.beginPath();
        ctx.roundRect(this.craftingButton.x - this.craftingButton.w / 2, this.craftingButton.y - this.craftingButton.h / 2, this.craftingButton.w, this.craftingButton.h, 4);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 22px Ubuntu`;
        ctx.strokeText("Craft", this.craftingButton.x, this.craftingButton.y);
        ctx.fillText("Craft", this.craftingButton.x, this.craftingButton.y);
        if (this.craftingPetalContainers[0]) {
            ctx.fillStyle = '#f0f0f0';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2.25;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = `900 12px Ubuntu`;

            let attempt = this.craftingPetalContainers[0].attempt;
            if (attempt == undefined) {
                attempt = 0;
            }
            let chance = calculateChance(attempt, this.craftingPetalContainers[0].rarity)
            if (this.craftingAnimationTimer > 3000 && this.craftingAnimationData.successAmount > 0) {
                ctx.fillStyle = "#00ff00"
                ctx.strokeText("Success (-" + this.craftingAnimationData.lost + ")", this.craftingButton.x, this.craftingButton.y + 40);
                ctx.fillText("Success (-" + this.craftingAnimationData.lost + ")", this.craftingButton.x, this.craftingButton.y + 40);
            }
            else {
                ctx.strokeText("Attempt " + (attempt + 1), this.craftingButton.x, this.craftingButton.y + 60);
                ctx.fillText("Attempt " + (attempt + 1), this.craftingButton.x, this.craftingButton.y + 60);
                ctx.strokeText(Math.floor(chance * 10) / 10 + "% success chance", this.craftingButton.x, this.craftingButton.y + 40);
                ctx.fillText(Math.floor(chance * 10) / 10 + "% success chance", this.craftingButton.x, this.craftingButton.y + 40);
            }

        }

        if (this.hoveringOverCraftButton === true || this.draggingHorizontalScrollBar === true || this.draggingScrollBar === true || this.hoveringOverHorizontalScrollBar === true || this.hoveringOverScrollBar === true) {
            setCursor('pointer');
        }

        ctx.save();

        // drawing clipping rect
        ctx.beginPath();
        ctx.rect(this.inventorySpace.x, this.inventorySpace.y, this.fillingHorizontal ? this.inventorySpace.w + 24 : this.inventorySpace.w, this.inventorySpace.h);
        ctx.clip();
        ctx.closePath();

        this.firstPetalContainer = null;
        this.lastPetalContainer = null;

        const firstRarityX = this.petalContainerSize / 2 + this.inventorySpace.x + (this.petalContainerSize + 12) * 0 + 3;
        const lastRarityX = this.petalContainerSize / 2 + this.inventorySpace.x + (this.petalContainerSize + 12) * this.maxRarity - 6;
        this.totalPetalWidth = lastRarityX - firstRarityX;

        let maxTypeIndex = 0;
        for (let typeKey in this.petalContainers) {
            for (let i = 0; i <= Math.max(5, this.maxRarity); i++) {
                const rarityKey = i;
                const pcX = this.petalContainerSize / 2 + this.inventorySpace.x + (this.petalContainerSize + 12) * rarityKey + 3 - this.render.horizontalScroll * (this.totalPetalWidth - this.inventorySpace.h);
                const pcY = 5 + this.petalContainerSize / 2 + this.typeIndexes[typeKey] * (this.petalContainerSize + 12) + 5 + this.inventorySpace.y - this.render.scroll * (this.totalPetalHeight - this.inventorySpace.h);
                if (this.typeIndexes[typeKey] > maxTypeIndex) {
                    maxTypeIndex = this.typeIndexes[typeKey];
                }

                // always draw box because y not
                if (this.fillerPetalSlots[typeKey] === undefined) {
                    this.fillerPetalSlots[typeKey] = {};
                }
                if (this.fillerPetalSlots[typeKey][rarityKey] === undefined) {
                    this.fillerPetalSlots[typeKey][rarityKey] = { render: { x: pcX, y: pcY } };
                }

                const fpc = this.fillerPetalSlots[typeKey][rarityKey];
                fpc.x = pcX;
                fpc.y = pcY;
                fpc.render.x = interpolate(fpc.render.x, fpc.x, 0.00672 * dt);
                fpc.render.y = interpolate(fpc.render.y, fpc.y, 0.00672 * dt);
                ctx.fillStyle = '#b17f49';

                if (this.petalContainers[typeKey][rarityKey] === undefined && fpc.render.x + this.petalContainerSize / 2 > this.inventorySpace.x * 0.9 && fpc.render.x + this.petalContainerSize / 2 < (this.inventorySpace.x + this.inventorySpace.w) * 1.2 && fpc.render.y + this.petalContainerSize / 2 > this.inventorySpace.y * 0.9 && fpc.render.y + this.petalContainerSize / 2 < (this.inventorySpace.y + this.inventorySpace.h) * 1.1) {
                    ctx.beginPath();
                    ctx.roundRect(fpc.render.x - this.petalContainerSize / 2, fpc.render.y - this.petalContainerSize / 2, this.petalContainerSize, this.petalContainerSize, 8);
                    ctx.fill();
                    ctx.closePath();
                }

                if (this.petalContainers[typeKey] !== undefined && this.petalContainers[typeKey][rarityKey] !== undefined) {
                    const pc = this.petalContainers[typeKey][rarityKey];
                    pc.x = pcX;
                    pc.y = pcY;

                    if (pc.render.x + pc.w / 2 > this.inventorySpace.x * 0.9 && pc.render.x - pc.w / 2 < (this.inventorySpace.x + this.inventorySpace.w) * 1.1 && pc.render.y + pc.w / 2 > this.inventorySpace.y * 0.9 && pc.render.y - pc.w / 2 < (this.inventorySpace.y + this.inventorySpace.h) * 1.1) {
                        pc.draw();
                    } else {
                        pc.render.x = interpolate(pc.render.x, pc.x, 0.00672 * dt)
                        pc.render.y = interpolate(pc.render.y, pc.y, 0.00672 * dt)
                    }

                    if (this.firstPetalContainer === null) {
                        this.firstPetalContainer = pc;
                    }
                    this.lastPetalContainer = pc;
                } else {
                    if (this.firstPetalContainer === null) {
                        this.firstPetalContainer = fpc;
                    }
                    this.lastPetalContainer = fpc;
                }
                // else {
                //     if(this.fillerPetalSlots[typeKey] === undefined){
                //         this.fillerPetalSlots[typeKey] = {};
                //     }
                //     if(this.fillerPetalSlots[typeKey][rarityKey] === undefined){
                //         this.fillerPetalSlots[typeKey][rarityKey] = {render: {x: pcX, y: pcY}};
                //     }
                //     const fpc = this.fillerPetalSlots[typeKey][rarityKey];
                //     fpc.x = pcX;
                //     fpc.y = pcY;
                //     fpc.render.x = interpolate(fpc.render.x, fpc.x, 0.00672 * dt);
                //     fpc.render.y = interpolate(fpc.render.y, fpc.y, 0.00672 * dt);
                //     ctx.fillStyle = '#b17f49';
                //     ctx.beginPath();
                //     ctx.roundRect(fpc.render.x - this.petalContainerSize/2, fpc.render.y - this.petalContainerSize/2, this.petalContainerSize, this.petalContainerSize, 8);
                //     ctx.fill();
                //     ctx.closePath();
                // }
            }
        }

        // if we're drawing < 5 pcs then draw the extras as boxes
        if (Object.keys(this.petalContainers).length < 5) {
            this.fillingHorizontal = true;
            // const amountMore = 5 - Object.keys(this.petalContainers).length;
            for (let j = Object.keys(this.petalContainers).length; j < 5; j++) {
                const typeKey = "filler" + j;
                for (let i = 0; i <= Math.max(5, this.maxRarity); i++) {
                    const rarityKey = i;
                    const pcX = this.petalContainerSize / 2 + this.inventorySpace.x + (this.petalContainerSize + 12) * rarityKey + 3 - this.render.horizontalScroll * (this.totalPetalWidth - this.inventorySpace.h);
                    const pcY = 5 + this.petalContainerSize / 2 + (maxTypeIndex + j - Object.keys(this.petalContainers).length + 1) * (this.petalContainerSize + 12) + 5 + this.inventorySpace.y - this.render.scroll * (this.totalPetalHeight - this.inventorySpace.h);

                    // draw box
                    if (this.fillerPetalSlots[typeKey] === undefined) {
                        this.fillerPetalSlots[typeKey] = {};
                    }
                    if (this.fillerPetalSlots[typeKey][rarityKey] === undefined) {
                        this.fillerPetalSlots[typeKey][rarityKey] = { render: { x: pcX, y: pcY } };
                    }
                    const fpc = this.fillerPetalSlots[typeKey][rarityKey];
                    fpc.x = pcX;
                    fpc.y = pcY;
                    fpc.render.x = interpolate(fpc.render.x, fpc.x, 0.00672 * dt);
                    fpc.render.y = interpolate(fpc.render.y, fpc.y, 0.00672 * dt);
                    ctx.fillStyle = '#b17f49';
                    ctx.beginPath();
                    ctx.roundRect(fpc.render.x - this.petalContainerSize / 2, fpc.render.y - this.petalContainerSize / 2, this.petalContainerSize, this.petalContainerSize, 8);
                    ctx.fill();
                    ctx.closePath();
                }
            }
        } else {
            this.fillingHorizontal = false;
        }

        if (this.lastPetalContainer !== null) {
            const petalDimensions = {
                start: this.firstPetalContainer.y - this.petalContainerSize / 2 - 6,
                end: this.lastPetalContainer.y + this.petalContainerSize / 2 + 6
            }
            petalDimensions.length = petalDimensions.end - petalDimensions.start;
            this.totalPetalHeight = petalDimensions.length;
        }

        ctx.restore();

        let needsFilter = false;
        for (let i = 0; i < this.fadingPetalContainers.length; i++) {
            if (this.fadingPetalContainers[i].spawnTime < 0.001) {
                this.fadingPetalContainers[i].toRemove = true;
                needsFilter = true;
            }
            this.fadingPetalContainers[i].draw();
        }
        if (needsFilter === true) {
            this.fadingPetalContainers = this.fadingPetalContainers.filter(p => p.toRemove !== true);
        }

        // stroking the rect again so that hte stroke isn't halfway in
        // ctx.fillStyle = this.getMainFill();
        // ctx.strokeStyle = this.getMainStroke();
        // ctx.lineWidth = 8;

        // ctx.save();

        // ctx.beginPath()
        // ctx.roundRect(0, 0, this.w, this.h, 3);
        // ctx.stroke();
        // ctx.closePath();

        if (this.fillingHorizontal === false) {
            this.render.scroll = interpolate(this.render.scroll, this.scroll, 0.0070 * dt);
            if (this.render.scroll < -.1) {
                this.render.scroll = -.1;
            } else if (this.render.scroll > 1.1) {
                this.render.scroll = 1.1;
            }

            this.scrollbar.pos = interpolate(this.scrollbar.start, this.scrollbar.end, this.render.scroll);
            this.scrollbar.bottom = this.scrollbar.pos + this.scrollbar.length / 2;
            this.scrollbar.top = this.scrollbar.pos - this.scrollbar.length / 2;

            this.scrollbar.renderTop = interpolate(this.scrollbar.renderTop, this.scrollbar.top, this.draggingScrollBar ? 0.28 : 0.08);
            this.scrollbar.renderBottom = interpolate(this.scrollbar.renderBottom, this.scrollbar.bottom, this.draggingScrollBar ? 0.28 : 0.08);
        }

        if (this.maxRarity >= 5) {
            this.render.horizontalScroll = interpolate(this.render.horizontalScroll, this.horizontalScroll, 0.0070 * dt);

            this.horizontalScrollBar.pos = interpolate(this.horizontalScrollBar.start, this.horizontalScrollBar.end, this.render.horizontalScroll);
            this.horizontalScrollBar.right = this.horizontalScrollBar.pos + this.horizontalScrollBar.length / 2;
            this.horizontalScrollBar.left = this.horizontalScrollBar.pos - this.horizontalScrollBar.length / 2;

            this.horizontalScrollBar.renderRight = interpolate(this.horizontalScrollBar.renderRight, this.horizontalScrollBar.right, this.draggingHorizontalScrollBar ? 0.28 : 0.08);
            this.horizontalScrollBar.renderLeft = interpolate(this.horizontalScrollBar.renderLeft, this.horizontalScrollBar.left, this.draggingHorizontalScrollBar ? 0.28 : 0.08);
        }

        if (this.scroll < 0) {
            this.scroll = 0;
        } else if (this.scroll > 1) {
            this.scroll = 1;
        }

        // console.log(this.render.scroll);
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.w - 16, (this.scrollbar.renderTop) /** ((this.h - 82 - 16) / this.h) + 82*/);
        ctx.lineTo(this.w - 16, (this.scrollbar.renderBottom) /** ((this.h - 82 - 16) / this.h) + 82*/);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.horizontalScrollBar.renderRight, this.h - 16 /** ((this.h - 82 - 16) / this.h) + 82*/);
        ctx.lineTo(this.horizontalScrollBar.renderLeft, this.h - 16 /** ((this.h - 82 - 16) / this.h) + 82*/);
        ctx.stroke();
        ctx.closePath();

        if (this.menuActive === true && translation === 0) {
            if (mouse.canvasX > 130 + this.w - 7.5 - 30 - 3 && mouse.canvasY > canvas.h - this.h - 20 + 7.5 + 3 && mouse.canvasX < 130 + this.w - 7.5 - 3 && mouse.canvasY < canvas.h - this.h - 20 + 7.5 + 30 + 3) {
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                // if(this.hoveringOverButton === false){
                //     document.body.style.cursor = 'auto';
                // }
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        // X rendering
        ctx.translate(-3, 3);
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.w - 7.5 - 30, 7.5, 30, 30, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.w - 30, 30);
        ctx.lineTo(this.w - 7.5 * 2, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.w - 7.5 * 2, 30);
        ctx.lineTo(this.w - 30, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(3, -3);

        const mouseX = mouse.x * canvas.w / window.innerWidth;
        const mouseY = mouse.y * canvas.h / window.innerHeight;

        if (mouseX > 130 && mouseX < 130 + this.w - 20 && mouseY > canvas.h - this.h - 20 && mouseY < canvas.h - 20) {
            ctx.lastTransform5 = ctx.getTransform();
            for (let typeKey in this.petalContainers) {
                for (let i = 0; i <= this.maxRarity; i++) {
                    if (this.petalContainers[typeKey] === undefined) continue;
                    const rarityKey = i;
                    const pc = this.petalContainers[typeKey][rarityKey];
                    if (pc === undefined) continue;

                    if (pc.render.x + pc.w / 2 > this.inventorySpace.x * 0.9 && pc.render.x - pc.w / 2 < (this.inventorySpace.x + this.inventorySpace.w) * 1.1 && pc.render.y + pc.w / 2 > this.inventorySpace.y * 0.9 && pc.render.y - pc.w / 2 < (this.inventorySpace.y + this.inventorySpace.h) * 1.1) {
                        if (mouseInBox({ x: mouseX, y: mouseY }, { x: pc.render.x - pc.w / 2 + 130, y: pc.render.y - pc.h / 2 + canvas.h - this.h - 20, w: pc.w, h: pc.h }) === true) {
                            pc.isHovered = true;
                        }
                        pc.drawStatsBox();
                    }
                }
            }

            if (this.craftingAnimationState === "display") {
                const pc = this.displayPetalContainer;
                if (mouseInBox({ x: mouseX, y: mouseY }, { x: pc.render.x - pc.w / 2 + 130, y: pc.render.y - pc.h / 2 + canvas.h - this.h - 20, w: pc.w, h: pc.h }) === true) {
                    pc.isHovered = true;
                }
                pc.drawStatsBox();
            } else {
                for (let i = 0; i < this.craftingPetalSlots.length; i++) {
                    if (this.craftingPetalContainers[i] !== undefined) {
                        const pc = this.craftingPetalContainers[i];
                        if (mouseInBox({ x: mouseX, y: mouseY }, { x: pc.render.x - pc.w / 2 + 130, y: pc.render.y - pc.h / 2 + canvas.h - this.h - 20, w: pc.w, h: pc.h }) === true) {
                            pc.isHovered = true;
                        }
                        pc.drawStatsBox();
                    }
                }
            }
            ctx.setTransform(ctx.lastTransform5);
            delete ctx.lastTransform5;
        }

        ctx.translate(-130, -(canvas.h - this.h - 20));

        if (translation !== 0) {
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.mouse.x, this.mouse.y, 6, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.mouse2.x, this.mouse2.y, 6, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();

        // ctx.fillStyle = 'red';
        // ctx.beginPath();
        // ctx.arc(this.mouse3.x, this.mouse3.y, 6, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
    }
    updateScroll(/*delta*/{ x, y }, { mouseX, mouseY }) {
        if (this.menuActive !== true || Object.keys(this.petalContainers).length === 0 || this.fillingHorizontal === true) {
            return;
        }
        // console.log(mouseX);
        // if(mouseInBox({x: mouseX, y: mouseY}, {x: 130, y: canvas.h - this.h - 20, w: this.w * 1.12, h: this.h}) === false){
        //     return;
        // }
        if (mouseX < 130 || mouseY < canvas.h - this.h - 20 || mouseX > 130 + this.w || mouseY > canvas.h - 20) {
            return;
        }

        const petalDimensions = {
            start: this.firstPetalContainer.y - this.petalContainerSize / 2 - 6,
            end: this.lastPetalContainer.y + this.petalContainerSize / 2 + 6
        }
        petalDimensions.length = petalDimensions.end - petalDimensions.start;

        this.scroll += y / petalDimensions.length;

        // let counter = 0;
        // let intrvl = setInterval(() => {
        //     counter++;
        //     if(counter > 10){
        //         clearInterval(intrvl);
        //         return;
        //     }
        // for(let i = numberOfRarities-1; i >= 0; i--){
        //     if(this.petalContainers[i] === undefined){
        //         continue;
        //     }
        //     for(let j = 0; j < this.petalContainers[i].length; j++){
        //         const petalContainer = this.petalContainers[i][j];
        //         if(petalContainer.lastInTime !== undefined){
        //             petalContainer.lastInTime -= Math.abs(y) * 3;
        //         }
        //         if(petalContainer.lastOutTime !== undefined){
        //             petalContainer.lastOutTime -= Math.abs(y) * 3;
        //         }
        //     }
        // }
        // }, 100)
    }
    mouseDown({ mouseX, mouseY }, evt) {
        // ctx.translate(130, canvas.h - this.h - 20);
        // ctx.moveTo(this.w - 16, (this.scrollbar.renderTop) /** ((this.h - 82 - 16) / this.h) + 82*/);
        // ctx.lineTo(this.w - 16, (this.scrollbar.renderBottom) /** ((this.h - 82 - 16) / this.h) + 82*/);
        // this.mouse = {x: 130 + this.w - 24, y: this.scrollbar.renderTop + canvas.h - this.h - 20}//{x: mouseX, y: mouseY};
        // this.mouse2 = {x: this.mouse.x + 16, y: this.mouse.y + this.scrollbar.length};
        // this.mouse3 = {x: mouseX, y: mouseY};
        if (mouseX > 130 + this.w - 24 && mouseX < 130 + this.w - 24 + 16 && mouseY > this.scrollbar.top + canvas.h - this.h - 20 && mouseY < this.scrollbar.top + canvas.h - this.h - 20 + this.scrollbar.length) {
            // console.log('drag');
            this.draggingScrollBar = true;
        } else if (this.maxRarity >= 5 && mouseX > 130 + this.horizontalScrollBar.left && mouseX < 130 + this.horizontalScrollBar.left + this.horizontalScrollBar.length && mouseY > canvas.h - this.h - 20 + this.h - 16 - 16 && mouseY < canvas.h - this.h - 20 + this.h - 16 + 16) {
            this.draggingHorizontalScrollBar = true;
        }

        if (this.craftingAnimationState === "display") {
            if (mouseInBox({ x: this.mouseX, y: this.mouseY }, { x: this.displayPetalContainer.x - this.displayPetalContainer.w / 2 + 130, y: this.displayPetalContainer.y - this.displayPetalContainer.h / 2 + canvas.h - this.h - 20, w: this.displayPetalContainer.w, h: this.displayPetalContainer.h }) === true) {
                this.displayPetalContainer.isDisplayPetalContainer = false;
                this.displayPetalContainer.toOscillate = false;
                this.displayPetalContainer.angleOffset = 0;
                globalInventory.addPetalContainer(this.displayPetalContainer);
                this.addFadingPetalContainer(this.displayPetalContainer);
                delete this.displayPetalContainer;
                this.craftingAnimationState = false;
                this.craftingAnimationData = {};
            }
            return;
        }

        if (this.craftingAnimationState === true) {
            return;
        }

        if (this.hoveringOverCraftButton === true && this.craftingPetalContainers.length === 5) {
            let amount = 0;
            for (let i of this.craftingPetalContainers) {
                amount += i.amount;
            }
            send({ craft: true, type: this.craftingPetalContainers[4].type, rarity: this.craftingPetalContainers[4].rarity, amount: amount });
            // this.craftingPetalContainers = [];
            this.startCraftingAnimation();
            return;
        }

        for (let i = 0; i < this.craftingPetalContainers.length; i++) {
            const pc = this.craftingPetalContainers[i];
            if (mouseInBox({ x: mouseX, y: mouseY }, { x: pc.x - pc.w / 2 + 130, y: pc.y - pc.h / 2 + canvas.h - this.h - 20, w: pc.w, h: pc.h }) === true) {
                this.removeCraftingPetalContainers();
            }
        }

        if (mouseInBox({ x: mouseX, y: mouseY }, { x: this.inventorySpace.x + 130, y: this.inventorySpace.y - this.h - 20 + canvas.h, w: this.inventorySpace.w, h: this.inventorySpace.h }) === true && this.craftingAnimationState === false) {
            for (let typeKey in this.petalContainers) {
                for (let rarityKey in this.petalContainers[typeKey]) {
                    const pc = this.petalContainers[typeKey][rarityKey];
                    // if(pc.amount < 5){
                    //     continue;
                    // }
                    if (mouseX > pc.x - pc.w / 2 + 130 && mouseX < 130 + pc.x + pc.w / 2 && mouseY > pc.y - pc.h / 2 + canvas.h - this.h - 20 && mouseY < pc.y + pc.h / 2 + canvas.h - this.h - 20) {
                        // if(evt.shiftKey === true){
                        //     send({craft: true, type: typeKey, rarity: rarityKey, amount: pc.amount});
                        //     this.removePetalContainerAmount(typeKey, rarityKey, pc.amount);
                        // } else {
                        //     send({craft: true, type: typeKey, rarity: rarityKey, amount: 5});
                        //     this.removePetalContainerAmount(typeKey, rarityKey, 5);
                        // }
                        this.addCraftingPetalContainers(typeKey, rarityKey, evt.shiftKey === true ? pc.amount : Math.min(pc.amount, 5), pc.attempt);
                    }
                }
            }
        }
    }
    addCraftingPetalContainers(type, rarity, amount, attempt) {
        if ((type === 'Token' || type === 'Basic') && rarity == 0) {
            setCursor('not-allowed')
            return;
        } //if you mess with this code, your basics will not be returned. you have been warned.
        if (this.craftingAnimationState === "display") {
            return;
        }
        const amountPerSlot = Math.floor(amount / 5);
        const leftOvers = amount - amountPerSlot * 5;

        const preexistingType = this.craftingPetalContainers[0] !== undefined ? this.craftingPetalContainers[0].type : 'NULL';

        if (amountPerSlot === 0 && type !== preexistingType) {
            for (let i = 0; i < 5; i++) {
                if (flowrMod.attempts === false) {
                    if (!(leftOvers > i) && this.craftingPetalContainers[i] === undefined) {
                        return;
                    }
                }
            }
        }

        let preexistingAmount = 0;
        for (let i = 0; i < this.craftingPetalContainers.length; i++) {
            if (this.craftingPetalContainers[i] !== undefined) {
                preexistingAmount++;
            }
        }

        // if they're not the same type and amount is less than 5 then return
        if (flowrMod.attempts === false) {
            if (preexistingType !== type && amount < 5) {
                return;
            } else if (preexistingType === type && preexistingAmount + amount < 5) {
                //return;
            }
        }

        const lastPetalContainer = this.petalContainers[type][rarity];
        // send({craft: true, type, rarity, amount: amount});
        if (!(this.craftingPetalContainers[0] && preexistingType === type && (this.craftingPetalContainers[0] ?? { rarity: -1 }).rarity === rarity)) {
            for (let i = 0; i < globalInventory.petalContainers[rarity].length; i++) {
                const pc = globalInventory.petalContainers[rarity][i];
                if (pc.type === type) {
                    globalInventory.removePetalContainerAmount(pc.rarity, i, amount);//removePetalContainerAmount(rarity, indexInRarity, amount){
                    break;
                }
            }
        }

        for (let i = 0; i < 5; i++) {
            if (this.craftingPetalContainers[i] !== undefined) {
                // this.addPetalContainer(this.craftingPetalContainers[i]);
                if (this.craftingPetalContainers[i].type === type && this.craftingPetalContainers[i].rarity == rarity) {
                    this.craftingPetalContainers[i].amount += amountPerSlot + (leftOvers > i);
                    // if(amountPerSlot + (leftOvers - i) > 0){
                    //     this.craftingPetalContainers[i].lastAmountChangedTime = performance.now();
                    // }
                } else {
                    globalInventory.addPetalContainer(this.craftingPetalContainers[i]);
                    this.addFadingPetalContainer(this.craftingPetalContainers[i]);
                    this.craftingPetalContainers[i] = new PetalContainer(lastPetalContainer.petals, { ...lastPetalContainer, w: 65, h: 65 }, Math.random(), amountPerSlot + (leftOvers > i), attempt);
                }
            } else {
                this.craftingPetalContainers[i] = new PetalContainer(lastPetalContainer.petals, { ...lastPetalContainer, w: 65, h: 65 }, Math.random(), amountPerSlot + (leftOvers > i), attempt);
            }
        }
    }
    removeCraftingPetalContainers() {
        if (this.craftingPetalContainers.length === 0) {
            return;
        }
        for (let i = 0; i < this.craftingPetalContainers.length; i++) {
            this.addFadingPetalContainer(/*new PetalContainer(this.craftingPetalContainers[i].petals.map(p => new Petal(p)), {...this.craftingPetalContainers[i]}, -Math.random(), 1)*/this.craftingPetalContainers[i]);
        }

        let amount = 0;
        for (let i = 0; i < this.craftingPetalContainers.length; i++) {
            amount += this.craftingPetalContainers[i].amount;
        }
        this.craftingPetalContainers[0].amount = amount;

        globalInventory.addPetalContainer(this.craftingPetalContainers[0]);
        this.craftingPetalContainers = [];
    }
    startCraftingAnimation() {
        this.craftingAnimationState = true;
        this.craftingAnimationTimer = 0;
    }
    runCraftingAnimation(rarity) {
        this.craftingAnimationTimer += dt;
        for (let i = 0; i < 5; i++) {
            const angle = this.craftingAnimationTimer / 150 /** Math.sqrt(this.craftingAnimationTimer/3000)*/ + Math.PI * 2 * i / 5;
            const radius = this.craftingPetalSlotsDimensions.radius * Math.sin(this.craftingAnimationTimer / 300);
            this.craftingPetalSlots[i].x = this.craftingPetalSlotsDimensions.x + Math.cos(angle) * radius;
            this.craftingPetalSlots[i].y = this.craftingPetalSlotsDimensions.y + Math.sin(angle) * radius;

            this.craftingPetalContainers[i].render.x = this.craftingPetalSlots[i].x + this.craftingPetalSlots[i].w / 2;
            this.craftingPetalContainers[i].x = this.craftingPetalSlots[i].x + this.craftingPetalSlots[i].w / 2;
            this.craftingPetalContainers[i].render.y = this.craftingPetalSlots[i].y + this.craftingPetalSlots[i].h / 2;
            this.craftingPetalContainers[i].y = this.craftingPetalSlots[i].y + this.craftingPetalSlots[i].h / 2;
        }

        // divisible by 150 so radius should be ~0
        if (this.craftingAnimationTimer > 3000/*500 + 150 * (6.125*this.craftingPetalContainers[0].rarity+1)*/ && this.craftingAnimationData !== undefined) {
            if (this.craftingAnimationData.successAmount > 0) {
                this.craftingAnimationState = "display";
                this.displayPetalContainer = new PetalContainer(new Array(this.craftingAnimationData.petalData.petalAmount).fill(new Petal(this.craftingAnimationData.petalData.petal)), { ...this.craftingAnimationData.petalData, toOscillate: true, w: 65, h: 65 }, Math.random(), this.craftingAnimationData.successAmount);
                this.startRainingPetalSlots(new PetalContainer(new Array(this.craftingAnimationData.petalData.petalAmount).fill(new Petal(this.craftingAnimationData.petalData.petal)), { ...this.craftingAnimationData.petalData, toOscillate: true, w: 65, h: 65 }, Math.random(), this.craftingAnimationData.successAmount));
                this.displayPetalContainer.angleOffset /= 3;
                this.displayPetalContainer.isDisplayPetalContainer = true;
                this.displayPetalContainer.w = 85;
                this.displayPetalContainer.h = 85;
                this.displayPetalContainer.render.w = 85;
                this.displayPetalContainer.render.h = 85;

                for (let i = 0; i < this.craftingPetalContainers.length; i++) {
                    if (i >= this.craftingAnimationData.amountRemaining) {
                        // remove petal container
                        this.craftingPetalContainers[i].toRemove = true;
                        this.craftingPetalContainers[i].attempt = this.craftingAnimationData.attempt;
                    } else {
                        this.craftingPetalContainers[i].amount = 1;
                        this.craftingPetalContainers[i].attempt = this.craftingAnimationData.attempt;
                    }
                }
                if (this.petalContainers[this.craftingPetalContainers[0].type][this.craftingPetalContainers[0].rarity]) {
                    this.petalContainers[this.craftingPetalContainers[0].type][this.craftingPetalContainers[0].rarity].attempt = this.craftingAnimationData.attempt;
                }
                this.craftingPetalContainers = this.craftingPetalContainers.filter(p => p.toRemove !== true);
            } else {
                // go straight to the normal phase where there's only a few petal containers left (1-4)
                this.craftingAnimationState = false;
                // console.log(this.craftingAnimationData.amountRemaining, this.craftingPetalContainers.length);
                for (let i = 0; i < this.craftingPetalContainers.length; i++) {
                    if (i >= this.craftingAnimationData.amountRemaining) {
                        // remove petal container
                        this.addFadingPetalContainer(this.craftingPetalContainers[i]);
                        this.craftingPetalContainers[i].toRemove = true;
                        this.craftingPetalContainers[i].attempt = this.craftingAnimationData.attempt;
                    } else {
                        this.craftingPetalContainers[i].amount = 1;
                        this.craftingPetalContainers[i].attempt = this.craftingAnimationData.attempt;
                    }
                }
                this.craftingPetalContainers = this.craftingPetalContainers.filter(p => p.toRemove !== true);
            }

            this.craftingPetalSlots = [];
            for (let i = 0; i < 5; i++) {
                const angle = Math.PI * 2 * i / 5 - Math.PI / 2;
                this.craftingPetalSlots.push({
                    x: this.craftingPetalSlotsDimensions.x + Math.cos(angle) * this.craftingPetalSlotsDimensions.radius,
                    y: this.craftingPetalSlotsDimensions.y + Math.sin(angle) * this.craftingPetalSlotsDimensions.radius,
                    w: 65,
                    h: 65
                })
            }
        }
    }
    processCraftResults(successAmount, amountRemaining, petalData, attempt, lost) {
        this.craftingAnimationData = { successAmount, amountRemaining, petalData, attempt, lost };
        if (flowrMod.instaCraft) this.craftingAnimationTimer = 9999
        // console.log(this.craftingAnimationData.attempt);
    }
    addFadingPetalContainer(p) {
        this.fadingPetalContainers.push(new PetalContainer(p.petals.map(pInit => new Petal(pInit)), { ...p }, Math.random(), p.amount));
        this.fadingPetalContainers[this.fadingPetalContainers.length - 1].collectTime = performance.now();
    }
    startRainingPetalSlots(pc) {
        if (window.petalRain == false) {
            return;
        }
        this.isRainingPetalSlots = true;
        const rarityToRainSettings = {
            0: {
                amount: 3,
            },
            1: {
                amount: 7
            },
            2: {
                amount: 15
            },
            3: {
                amount: 30
            },
            4: {
                amount: 56
            },
            5: {
                amount: 82
            },
            6: {
                amount: 120
            },
            7: {
                amount: 200
            },
            8: {
                amount: 200
            },
            9: {
                amount: 200
            },
            10: {
                amount: 200
            },
            11: {
                amount: 200
            },
            12: {
                amount: 200
            }
        };
        let rainAmountLeft = rarityToRainSettings[pc.rarity - 1].amount * Math.ceil(Math.sqrt(pc.amount));
        this.rainInterval = setInterval(() => {
            rainAmountLeft--;
            if (rainAmountLeft < 0) {
                clearInterval(this.rainInterval);
                delete this.rainInterval;
                // this.isRainingPetalSlots = false;
                return;
            }
            this.rainingPetalSlots.push(this.spawnRainPetalSlot(pc));
        }, 10);
    }
    spawnRainPetalSlot(pc) {
        const newPc = new PetalContainer(pc.petals.map(p => new Petal(p)), { ...pc }, Math.random(), pc.amount);
        newPc.toOscillate = true;
        newPc.toSkipCulling = true;//toSkipCulling
        newPc.isDisplayPetalContainer = true;
        newPc.renderAnimationTimer = 0;
        newPc.y = canvas.h//canvas.w - newPc.w / 2 //+ newPc.w * Math.sqrt(2);
        newPc.render.y = newPc.y;
        newPc.x = canvas.w / 2 + (Math.random() * 2 - 1) * canvas.w * .4;
        newPc.render.x = newPc.x;

        newPc.angleOffset = - Math.PI * 2 + (Math.random() * 2 - 1) * Math.PI * .2;
        newPc.angleOffsetVel = Math.sqrt((Math.random() * 2 - 1) * .03);

        const shootAngle = Math.PI * 0.5 + (Math.random() * 2 - 1) * Math.PI * .6;
        // console.log(shootAngle);
        newPc.xv = Math.cos(shootAngle) * 3;
        newPc.yv = -Math.sin(shootAngle) * 10;
        return newPc;
    }
    simulateRainPetalSlot(pc) {
        pc.angleOffset += pc.angleOffsetVel;

        pc.x += pc.xv;
        pc.y += pc.yv;
        pc.yv += 0.03;
        if (pc.y > canvas.height + pc.w * Math.sqrt(2) && pc.yv > 0) {
            pc.toRemove = true;
        }
    }
    renderRainPetalSlots() {
        for (let i = 0; i < this.rainingPetalSlots.length; i++) {
            this.rainingPetalSlots[i].draw();
            // ctx.beginPath();
            // ctx.fillStyle = 'red';
            // ctx.arc(this.rainingPetalSlots[i].render.x, this.rainingPetalSlots[i].render.y, 30, 0, Math.PI * 2);
            // ctx.fill();
            // ctx.closePath();
            this.simulateRainPetalSlot(this.rainingPetalSlots[i]);
        }
        this.rainingPetalSlots = this.rainingPetalSlots.filter(p => p.toRemove !== true);
        if (this.rainingPetalSlots.length === 0 && this.rainInterval === undefined) {
            this.isRainingPetalSlots = false;
        }
    }
    mouseUp({ mouseX, mouseY }) {
        this.draggingScrollBar = false;
        this.draggingHorizontalScrollBar = false;
    }
    mouseMove({ mouseX, mouseY }) {
        this.hoveringOverHorizontalScrollBar = false;
        this.hoveringOverScrollBar = false;

        if (this.draggingScrollBar === true) {
            this.scroll = (mouseY - (canvas.h - this.h - 20) - this.scrollbar.start) / (this.scrollbar.end - this.scrollbar.start);
            if (this.scroll < 0) {
                this.scroll = 0;
            } else if (this.scroll > 1) {
                this.scroll = 1;
            }
        } else if (this.draggingHorizontalScrollBar === true) {
            this.horizontalScroll = (mouseX - (130) - this.horizontalScrollBar.start) / (this.horizontalScrollBar.end - this.horizontalScrollBar.start);
            if (this.horizontalScroll < 0) {
                this.horizontalScroll = 0;
            } else if (this.horizontalScroll > 1) {
                this.horizontalScroll = 1;
            }
        } else {
            // hover effect
            if (mouseX > 130 + this.w - 24 && mouseX < 130 + this.w - 24 + 16 && mouseY > this.scrollbar.top + canvas.h - this.h - 20 && mouseY < this.scrollbar.top + canvas.h - this.h - 20 + this.scrollbar.length) {
                // console.log('drag');
                this.hoveringOverScrollBar = true;
            } else if (this.maxRarity >= 5 && mouseX > 130 + this.horizontalScrollBar.left && mouseX < 130 + this.horizontalScrollBar.left + this.horizontalScrollBar.length && mouseY > canvas.h - this.h - 20 + this.h - 16 - 16 && mouseY < canvas.h - this.h - 20 + this.h - 16 + 16) {
                this.hoveringOverHorizontalScrollBar = true;
            }
        }
    }
}

let redefineCraftingMenu = new CraftingMenu()

craftingMenu.petalContainers2 = redefineCraftingMenu.petalContainers2
craftingMenu.startRainingPetalSlots = redefineCraftingMenu.startRainingPetalSlots
craftingMenu.runCraftingAnimation = redefineCraftingMenu.runCraftingAnimation
craftingMenu.addCraftingPetalContainers = redefineCraftingMenu.addCraftingPetalContainers
craftingMenu.drawInventory = redefineCraftingMenu.drawInventory
craftingMenu.recalculateTypeIndexes = redefineCraftingMenu.recalculateTypeIndexes
craftingMenu.addPetalContainer = redefineCraftingMenu.addPetalContainer
craftingMenu.processCraftResults = redefineCraftingMenu.processCraftResults
craftingMenu.toggleMenu = redefineCraftingMenu.toggleMenu

LevelBar = class LevelBar {
    constructor() {
        this.xp = 0;
        this.level = 0;// decimal

        this.calculateDimensions();

        this.hasInit = false;

        this.render = { xp: this.xp, level: this.level, initAnimation: 0 };
    }
    calculateDimensions() {
        this.dimensions = {
            x: canvas.w * .80,
            y: canvas.h * .94,
            w: canvas.w * (.17 + .04 / 2),
            h: canvas.h * .04,
            roundness: canvas.w,// more than enough to trigger max roundness
            innerPadding: 4
        }
    }
    init(xp) {
        this.xp = xp;
        this.level = levelPerXp(this.xp);
        this.hasInit = true;
        this.render.xp = this.xp;
    }
    addXp(xp) {
        // when an enemy dies
        this.xp += xp;
        this.level = levelPerXp(this.xp);
    }
    getPetalSlotsNumber() {
        let petalSlots = basePetalSlots;
        for (let i = 0; i < petalSlotThresholds.length; i++) {
            if ((this.level + 1) >= petalSlotThresholds[i]) {
                petalSlots++;
            } else {
                break;
            }
        }
        return petalSlots;
    }
    draw() {
        if (toRenderDebug === true) {
            ctx.translate(0, -15)
        }

        if (this.hasInit === true) {
            this.render.initAnimation = interpolate(this.render.initAnimation, 1, 0.04);
        }
        if (this.render.initAnimation < 0.999) {
            ctx.translate(0, (1 - this.render.initAnimation) * canvas.h * .18);
        }

        this.render.xp = interpolate(this.render.xp, this.xp, 0.04);
        this.render.level = levelPerXp(this.render.xp);

        if (this.dimensions.w < this.dimensions.h) return;

        // this.level += .001;
        ctx.beginPath();
        ctx.fillStyle = '#333333';
        ctx.beginPath();
        ctx.roundRect(this.dimensions.x, this.dimensions.y, this.dimensions.w, this.dimensions.h, this.dimensions.roundness);
        ctx.fill();
        ctx.closePath();

        if (this.render.level % 1 < .1) {
            ctx.globalAlpha = Math.max(0, (this.render.level % 1) * 9.5 + 0.05);
        }

        ctx.fillStyle = '#e2eb67';
        ctx.beginPath();
        ctx.roundRect(this.dimensions.x + this.dimensions.innerPadding, this.dimensions.y + this.dimensions.innerPadding, this.dimensions.h + (this.dimensions.w - this.dimensions.h) * (this.render.level % 1) - this.dimensions.innerPadding * 2, this.dimensions.h - this.dimensions.innerPadding * 2, this.dimensions.roundness);
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha = 1;
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 18px Ubuntu`;

        let levelText = `Lvl ${Math.ceil(this.render.level)} Flower`;
        // if(this.render.level % 1 > .95 /*&& this.render.level > 45*/){
        //     levelText += ` (${Math.floor((this.render.level % 1) * 100)}% there)`;
        // }
        ctx.strokeText(levelText, this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y + this.dimensions.h / 2);
        ctx.fillText(levelText, this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y + this.dimensions.h / 2);

        if (mouse.canvasX > this.dimensions.x && mouse.canvasY > this.dimensions.y || flowrMod.alwaysShowXp === true) {
            let levelReqText = `${formatAmountHighPrecision(levelBar.xp)}/${formatAmountHighPrecision(xpPerLevel(Math.ceil(levelPerXp(levelBar.xp))))} xp`;
            let hp = formatAmountHighPrecision(Stats.hpPerLevel(this.render.level));
            ctx.strokeText(levelReqText + " | " + hp + " hp", this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y / 1.035 + this.dimensions.h / 2);
            ctx.fillText(levelReqText + " | " + hp + " hp", this.dimensions.x + (this.dimensions.w) / 2, this.dimensions.y / 1.035 + this.dimensions.h / 2);
        }
        if (this.render.initAnimation < 0.999) {
            ctx.translate(0, -(1 - this.render.initAnimation) * canvas.h * .18);
        }

        if (toRenderDebug === true) {
            ctx.translate(0, 15)
        }
    }
}

redefineLevelBar = new LevelBar()
levelBar.draw = redefineLevelBar.draw

InputHandler = class InputHandler {
    constructor(client) {
        this.client = client;

        this.chatOpen = false;
    }
    start() {
        window.onkeydown = (e) => this.handleKey(e);
        window.onkeyup = (e) => this.handleKey(e);
        window.onmousemove = (e) => this.handleMouse(e);

        // prevent right click
        window.addEventListener("contextmenu", e => e.preventDefault());

        // make current keys pressed stop if user navigates out of tab
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                for (let key in this.input) {
                    this.input[key] = false;
                }
            }
        });
    }
    updateChat() {
        if (document.activeElement === chatInput) {
            if (this.chatOpen === false) {
                chatDiv.classList.remove('hidden');
                chatInput.focus();
            }
            this.chatOpen = true;
            chatInput.style.opacity = "1";
        } else {
            if (this.chatOpen === true) {
                // chatDiv.classList.add('hidden');
                chatInput.blur();
            }
            this.chatOpen = false;
            chatInput.style.opacity = "0";
        }
    }
    handleKey(e) {
        if (e.code === undefined) {
            return;
        }

        // make sure the user hasn't selected / deselected the chat between inputs
        this.updateChat();

        // handling enter inputs
        if (window.state !== 'game') {
            this.chatOpen = false;
        } else if (e.code === 'Enter' && window.isEditor !== true) {
            if (this.chatOpen === true && e.type === 'keydown') {
                // send chat message
                const text = chatInput.value.trim();
                // if(text[0] === '/'){
                //     for(let key in chatCommandMap){
                //         if(text.startsWith(key) === true){
                //             chatCommandMap[key](this, { client: this.client });
                //             this.chatOpen = false;
                //             chatInput.value = '';
                //             chatInput.blur();
                //             return;
                //         }
                //     }
                // }
                if (text.length !== 0) {
                    send(['c', text]);
                }

                this.chatOpen = false;
                chatInput.value = '';
                chatInput.blur();

                chatInput.style.opacity = "0";

                // reset inputs to prevent ghosting
                // for(let key in this.input){
                //     this.input[key] = false;
                // }
            } else if (e.type === 'keydown') {
                // focus chat
                this.chatOpen = true;
                chatDiv.classList.remove('hidden');
                chatInput.focus();

                chatInput.style.opacity = "1";

                if (!arrayEquals(latestInput, [0, 0, 0, 0])) {
                    latestInput = [0, 0, 0, 0];
                    send(latestInput);
                }
                const me = room.flowers[window.selfId];
                if (me.attacking === true) {
                    me.attacking = false;
                    send({ attack: false });
                }
                if (me.defending === true) {
                    me.defending = false;
                    send({ defend: false });
                }
            }
            return e.preventDefault();
        }

        // if we're typing, return
        // if(this.chatOpen === true)return;

        // if we're not typing and we repeat keys, return
        if (e.repeat && this.chatOpen === false) return e.preventDefault();
        if (this.chatOpen === true) return;

        if (e.code === "Semicolon" && e.repeat === false && e.type === 'keydown') {
            window.toRenderDebug = !window.toRenderDebug;
            window.fps = 0;
            window.framesRendered = 0;
            window.lastFramesRenderedResetTime = performance.now();
        }

        // swapping petals
        if (e.code.startsWith("Digit") === true && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            const petalIndex = e.code === "Digit0" ? 9 : e.code[5] - 1;
            if (petalIndex === undefined) return;
            if (window.state === 'menu') {
                menuInventory.swapPetals(petalIndex);
            } else {
                inventory.swapPetals(petalIndex);
            }
        }
        else if (e.code === "KeyR" && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            for (let i = 0; i < 10; i++) {
                inventory.swapPetals(i);
            }
        }
        // else if (e.key === "f" && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT'){
        //     window.toRenderHitboxes = !window.toRenderHitboxes;
        // }

        // otherwise, set inputs in this.inputs as they're mapped by keyCodes
        const me = room.flowers[window.selfId];
        if (window.connected === true && me !== undefined) {
            if (!mouseMovement) {
                /*
                const me = room.flowers[window.selfId];
                if(me !== undefined){
                    me.input[keyCodes[e.code]] = e.type === 'keydown';
                }
                */
                if (keyCodes[e.code]) {
                    // let type = e.type === 'keydown';
                    //sendGame({key: keyCodes[e.code], type})
                    if (latestInput.length != 4) {
                        latestInput = [0, 0, 0, 0];
                    }
                    if (e.type === 'keydown') {
                        latestInput[directionToIdMap[keyCodes[e.code]]] = 1;
                    }
                    else {
                        latestInput[directionToIdMap[keyCodes[e.code]]] = 0;
                    }

                    // if(time - lastSentInput < minimumInputTime){
                    //     setTimeout(() => {
                    //         this.handleKey(e);
                    //     }, minimumInputTime)
                    //     return;
                    // }

                    if (/*time - lastSentInput > minimumInputTime &&*/ !arrayEquals(latestInput, previousInput)) {
                        send(latestInput);
                        previousInput = window.structuredClone(latestInput);
                        lastSentInput = time;// wtf this is way more complicated then it needs to e
                    }


                    me.input[keyCodes[e.code]] = e.type === 'keydown'

                    let velX = 0;
                    let velY = 0;
                    if (me.input["up"]) {
                        velY -= 1;
                    }
                    if (me.input["down"]) {
                        velY += 1;
                    }
                    if (me.input["left"]) {
                        velX -= 1;
                    }
                    if (me.input["right"]) {
                        velX += 1;
                    }
                    let angle = Math.atan2(velY, velX);
                    if (velY != 0 || velX != 0) {
                        me.angle = angle;
                        me.magnitude = 999;
                    }
                }
            }
            if (e.key == " ") {
                send({ attack: e.type === 'keydown' });
                room.flowers[window.selfId].attacking = e.type === 'keydown';
            }
            if (e.key == "Shift") {
                send({ defend: e.type === 'keydown' });
                room.flowers[window.selfId].defending = e.type === 'keydown';
            }
            if (e.key == "[" && e.type === 'keydown') {
                fov = 1;
            }
            if (e.code == "Equal" && e.type === 'keydown') {
                fov *= (1 + 1 / 5);
                if (fov < 0.2) {
                    fov = 0.2;
                }
                if (fov > 3) {
                    fov = 3;
                }

            }
            if (e.code == "Minus" && e.type === 'keydown') {
                fov *= (1 - 1 / 5);
                if (fov < 0.2) {
                    fov = 0.2;
                }
                if (fov > 3) {
                    fov = 3;
                }

            }
        }
        if (window.state === 'menu' && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            if (e.key.toLowerCase() === 'x') {
                globalInventory.toggleMenu();
            } else if (e.key.toLowerCase() === 'c') {
                craftingMenu.toggleMenu();
            } else if (e.key.toLowerCase() === 'v') {
                mobGallery.toggleMenu();
            } else if (e.key.toLowerCase() === 'z') {
                flowrMod.petalGallery.toggleMenu();
            }
        }
    }
    sendInitialInput() {
        if (mouseMovement) {
            const dX = mouse.x - window.innerWidth / 2;
            const dY = mouse.y - window.innerHeight / 2;
            let magnitude = Math.sqrt(dY ** 2 + dX ** 2);
            if (magnitude >= 220) {
                magnitude = 220;
            } else {
                magnitude = ((magnitude / 220) ** 0.9) * 220;
            }

            if (latestInput.length != 2) {
                latestInput = [0, 0];
            }
            const angle = Math.atan2(dY, dX);
            latestInput[0] = Math.round(angle * 1000) / 1000;
            latestInput[1] = Math.round(magnitude * 10) / 10;

            send(latestInput);
        }
    }
    handleMouse(e) {
        const dX = e.x - window.innerWidth / 2;
        const dY = e.y - window.innerHeight / 2;
        const me = room.flowers[window.selfId];
        if (window.connected === true && me !== undefined && mouseMovement) {
            let magnitude = Math.sqrt(dY ** 2 + dX ** 2);
            if (magnitude >= 220) {
                magnitude = 220;
            } else {
                magnitude = ((magnitude / 220) ** 0.9) * 220;
            }
            me.angle = Math.atan2(dY, dX);
            me.magnitude = magnitude;

            if (latestInput.length != 2) {
                latestInput = [0, 0];
            }
            latestInput[0] = Math.round(me.angle * 1000) / 1000;
            latestInput[1] = Math.round(magnitude * 10) / 10;

            if ((time - lastSentInput) > minimumInputTime && !arrayEquals(latestInput, previousInput)) {
                send(latestInput);
                previousInput = window.structuredClone(latestInput);
                lastSentInput = time;
            }
        }

        // const me = room.flowers[window.selfId];
        // if(me !== undefined){
        //     me.angle = Math.atan2(dY, dX);
        //     me.magnitude = Math.min(220, Math.sqrt(dY**2 + dX**2));
        //     if(me.magnitude < 220){
        //         me.magnitude = ((me.magnitude / 220) ** 0.9) * 220;
        //     }
        // }
        // console.log(dY, dX);

        // for menu
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        mouse.canvasX = mouse.x / window.innerWidth * canvas.w;
        mouse.canvasY = mouse.y / window.innerHeight * canvas.h;

        if (typeof draggingPetalContainer !== 'undefined') {
            if (draggingPetalContainer !== null) {
                simulatedraggingPetalContainer(mouse.canvasX, mouse.canvasY);
            }
        }

        if (window.state === "menu") {
            const mouseX = mouse.canvasX;
            const mouseY = mouse.canvasY;
            biomeManager.mouseMove({ mouseX, mouseY }, e);

            if (squadUI.hoveringOverSlider === true && e.button === 0 && squadUI.draggingSlider === true) {
                squadUI.updateSliderDrag(mouse.canvasX);
            }

            settingsMenu.mouseMove({ x: mouseX, y: mouseY });
        } else if (window.state === "game") {
            //settingsMenu.mouseMove({ x: mouseX, y: mouseY });
        }

        if (typeof globalInventory !== 'undefined') {
            globalInventory.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY })
            flowrMod.petalGallery.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY })
            craftingMenu.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY });
            changelog.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY })
            flowrMod.flowrSettingsMenu.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY })
            mobGallery.mouseMove({ x: mouse.canvasX, y: mouse.canvasY });
        }
    }
}

let redefineInputHandler = new InputHandler()
inputHandler.handleMouse = redefineInputHandler.handleMouse
inputHandler.handleKey = redefineInputHandler.handleKey

MobGallery = class MobGallery {
    constructor() {
        this.resize();

        this.icon = new Image();
        if (location.origin === 'https://flowrclient.serum0017.repl.co') {
            this.icon.src = 'https://flowr.fun/gfx/bin.svg';
        } else {
            this.icon.src = 'gfx/bin.svg';
        }

        this.hoveringOverButton = false;
        this.hoveringOverX = false;

        this.menuActive = false;

        this.lastCloseTime = 0;
        this.lastOpenTime = 0;

        this.rows = {/*mobType: [array of rarities]*/ };

        this.toRegenerate = true;

        this.fillerPetalSlots = {};

        // all from 0-1
        this.scroll = {
            x: 0,
            y: 0,
            render: {
                x: 0,
                y: 0
            }
        };
        this.horizontalScrollBarEnabled = false;

        this.scrollExcess = { x: 0, y: 0 };
    }
    fadeOut() {
        this.fadingOut = true;
        this.originalFadeOutTime = time;
        setTimeout(() => {
            delete this.fadingOut;
            if (this.menuActive === true) {
                this.toggleMenu();
            }
        }, 100);
    }
    resize(h = undefined) {
        this.dimensions = {
            x: 130,
            y: canvas.h - this.h - 20,
            w: 645,
            h: h ?? 382,
        };

        for (let key in this.dimensions) {
            this[key] = this.dimensions[key];
        }

        // this isnt actually used to draw the icon, messy code and going fast is bad but it is what it is
        // good for a static reference tho
        this.iconDimensions = {
            x: 20,
            y: canvas.h - 20 - 80,
            w: 80,
            h: 80
        };

        this.XDimensions = {
            x: this.x + this.w - 7.5 - 30 - 3,
            y: this.y + 7.5 + 3,
            w: 30,
            h: 30
        }

        this.inventorySpace = {
            x: this.x,
            y: this.y,
            w: this.w - 67,
            h: this.h
            // h: this.h * .52 - 4 - 24
        }

        this.scrollBarSize = 75;
        this.scrollBounds = {
            x: {
                start: this.x + this.scrollBarSize / 2 + 14,
                end: this.x + this.w - this.scrollBarSize / 2 - 14 - 20
            },
            y: {
                start: this.y + this.scrollBarSize / 2 + 2 + 60,
                end: this.y + this.h - this.scrollBarSize / 2 - 14
            },
        }
    }
    mouseDown({ x, y }) {
        if (this.hoveringOverButton === true || this.hoveringOverX === true) {
            // open menu
            this.toggleMenu();
            return;
        }

        if (this.hoveringOverScrollbarH === true) {
            this.draggingScrollBarH = true;
        }
        if (this.hoveringOverScrollbarV === true) {
            this.draggingScrollBarV = true;
        }

        // DISABLED
        // if(this.menuActive === true){
        //     if(mouseInBox({x: mouse.canvasX, y: mouse.canvasY}, {...this.inventorySpace, h: this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0)})){
        //         for(let type in this.rows){
        //             const row = this.rows[type];
        //             for(let i = 0; i < row.length; i++){
        //                 if(row[i]?.petals !== undefined && row[i].petals[0].lastIsHovered === true/* && i >= 4*/){
        //                     row[i].petals[0].lastIsHovered = false;
        //                     sendRoomRequest({singleEnemyRoom: true, biome: biomeManager.getCurrentBiomeData().current, type: type, rarity: i, petalData: menuInventory.pack()});
        //                     window.automaticallyLeaveFlag = true;
        //                 }
        //             }    
        //         }
        //     }
        // }
    }
    getHorizScrollBarDimensions() {
        return {
            x: this.scrollBounds.x.start + this.scroll.render.x * (this.scrollBounds.x.end - this.scrollBounds.x.start) - this.scrollBarSize / 2,
            y: this.y + this.h - 17,
            w: this.scrollBarSize,
            h: 10
        }
    }
    getVertScrollBarDimensions() {
        return {
            x: this.x + this.w - 20 - 10 / 2,
            y: this.scrollBounds.y.start + this.scroll.render.y * (this.scrollBounds.y.end - this.scrollBounds.y.start) - this.scrollBarSize / 2,
            w: 10,
            h: this.scrollBarSize,
        }
    }
    mouseMove({ x, y }) {
        if (this.menuActive !== true) return;
        this.hoveringOverScrollbarH = false;
        this.hoveringOverScrollbarV = false;
        if (mouseInBox({ x, y }, this.getHorizScrollBarDimensions())) {
            this.hoveringOverScrollbarH = true;
        } else if (mouseInBox({ x, y }, this.getVertScrollBarDimensions()) && this.scrollExcess.y > 0) {
            this.hoveringOverScrollbarV = true;
        }

        if (this.draggingScrollBarH) {
            const { start, end } = this.scrollBounds.x;
            this.scroll.x = (x - start) / (end - start);
        } else if (this.draggingScrollBarV) {
            const { start, end } = this.scrollBounds.y;
            this.scroll.y = (y - start) / (end - start);
        }
    }
    mouseUp({ x, y }) {
        if (this.menuActive !== true) return;
        this.draggingScrollBarH = this.draggingScrollBarV = false;
    }
    getMainStroke() {
        return '#b0ae3d';
    }
    getMainFill() {
        return '#dbd74b';
    }
    getHoverFill() {
        return blendColor('#dbd74b', '#FFFFFF', 0.1);
    }
    drawIcon() {
        ctx.lineWidth = 6;
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();

        if (mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, this.iconDimensions)) {
            ctx.fillStyle = this.getHoverFill();
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            this.hoveringOverButton = false;
        }

        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(this.icon, 20 + 15, canvas.h - 20 - 80 + 15, 80 - 15 * 2, 80 - 15 * 2);

        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[V]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);
        ctx.fillText("[V]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15);
        ctx.letterSpacing = ctx.lastLetterSpacing;
    }
    toggleMenu() {
        if (craftingMenu.menuActive === true) {
            craftingMenu.toggleMenu();
        }
        if (globalInventory.menuActive === true) {
            globalInventory.toggleMenu();
        }
        if (flowrMod.petalGallery.menuActive === true) {
            flowrMod.petalGallery.toggleMenu();
        }
        if (this.menuActive === true) {
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if (globalInventory.menuActive === true) {
                globalInventory.toggleMenu();
            }
            if (flowrMod.petalGallery.menuActive === true) {
                flowrMod.petalGallery.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;
        // console.log(this.menuActive);

        // looping through all petals and making sure they're not hovered
        for (let type in this.rows) {
            const row = this.rows[type];
            for (let i = 0; i < row.length; i++) {
                if (row[i].petals === undefined) continue;
                row[i].petals[0].lastIsHovered = false;
            }
        }
    }
    // DRAW --- MAIN METHOD
    draw() {
        if (Number.isFinite(this.y) === false) this.y = this.dimensions.y = canvas.h - this.h - 20;
        if (this.toRegenerate && Object.keys(window.enemyStats).length > 0) {
            this.regenerateMobs(window.structuredClone(discoveredEnemies));
            this.toRegenerate = false;
        }

        this.resize();

        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;

        this.drawIcon(alpha);

        // animation stuff here, calling drawInventory but possibly transforming beforehand
        if (this.menuActive === true || (time - this.lastCloseTime) < 160) {
            this.drawInventory(alpha);
        } else {
            this.hoveringOverX = false;
        }
    }

    drawScrollBars() {

        if (this.scroll.x.valueOf() + '' === 'NaN') {
            this.scroll.x = 0
            this.scroll.render.x = 0
        }
        if (this.scroll.y.valueOf() + '' === 'NaN') {
            this.scroll.y = 0
            this.scroll.render.y = 0
        }

        this.scroll.x = Math.min(1, Math.max(0, this.scroll.x));
        this.scroll.y = Math.min(1, Math.max(0, this.scroll.y));

        this.scroll.render.x = interpolate(this.scroll.render.x, this.scroll.x, this.draggingScrollBarH ? 0.28 : 0.08);
        this.scroll.render.y = interpolate(this.scroll.render.y, this.scroll.y, this.draggingScrollBarV ? 0.28 : 0.08);

        if (this.hoveringOverScrollbarH === true || this.hoveringOverScrollbarV === true || this.draggingScrollBarH || this.draggingScrollBarV) {
            setCursor('pointer');
        }

        if (this.horizontalScrollBarEnabled === true) {
            const h = this.getHorizScrollBarDimensions();

            ctx.strokeStyle = blendColor(this.getMainStroke(), '#000000', 0.1);
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(h.x, h.y + h.h / 2);
            ctx.lineTo(h.x + h.w, h.y + h.h / 2);
            ctx.stroke();
            ctx.closePath();
        }


        if (this.scrollExcess.y > 0) {
            const v = this.getVertScrollBarDimensions();

            ctx.beginPath();
            ctx.moveTo(v.x + v.w / 2, v.y);
            ctx.lineTo(v.x + v.w / 2, v.y + v.h);
            ctx.stroke();
            ctx.closePath();
        }
    }

    drawInventory(alpha = 1) {
        // this.scroll.render = interpolate(this.scroll.render, this.scroll, 0.0070 * dt);

        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if (time - this.lastCloseTime < 160) {
            translation += (this.h + 40) * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if (time - this.lastOpenTime < 160) {
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if (translation !== 0) {
            ctx.translate(0, translation);
        }

        if (this.hoveringOverScrollbar === true || this.draggingScrollBar === true) {
            setCursor('pointer');
        }

        ctx.translate(this.x, this.y);
        // if(time - this.lastCloseTime < 500){
        //     ctx.translate()
        // }
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;
        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        if (this.menuActive === true && translation === 0) {
            if (mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, this.XDimensions)) {
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        // X rendering
        ctx.translate(-3, 3);
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.w - 7.5 - 30, 7.5, 30, 30, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.w - 30, 30);
        ctx.lineTo(this.w - 7.5 * 2, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.w - 7.5 * 2, 30);
        ctx.lineTo(this.w - 30, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(3, -3);

        ctx.translate(-this.x, -this.y);

        this.drawRows();

        ctx.translate(this.x, this.y);
        // stroking again so we dont get weird cuts with .clip
        ctx.fillStyle = this.getMainFill();
        ctx.strokeStyle = this.getMainStroke();
        ctx.lineWidth = 8;
        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(-this.x, -this.y);

        if (this.isEmpty === false) {
            this.drawScrollBars();
        }

        this.drawRowStatBoxes();

        if (translation !== 0) {
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;
    }

    drawRows() {
        if (window.enemyStats !== undefined && window.enemyStats['Ladybug']?.drops === undefined) {
            // drops
            window.calculateStats(false);
            //console.log(window.enemyStats);

            for (let key in Stats.enemies) {
                const enemyStats = Stats.enemies[key];

                const drops = {};

                for (let key2 in enemyStats) {
                    drops[key2] = enemyStats[key2].drops;
                }

                if (window?.enemyStats[key] === undefined) window.enemyStats[key] = {};

                window.enemyStats[key].drops = drops;
            }
            let enemyStatsArray = [];
            for (let key in baseStats.enemies) {
                const stats = baseStats.enemies[key];
                enemyStatsArray.push(key, stats.health, stats.damage, stats.speed, stats.mass, stats.poison);
            }

            for (let i = 0; i < enemyStatsArray.length; i += 6) {
                window.enemyStats[enemyStatsArray[i]].health = enemyStatsArray[i + 1];
                window.enemyStats[enemyStatsArray[i]].damage = enemyStatsArray[i + 2];
                window.enemyStats[enemyStatsArray[i]].speed = enemyStatsArray[i + 3];
                window.enemyStats[enemyStatsArray[i]].mass = enemyStatsArray[i + 4];
                if (enemyStatsArray[i + 5]) {
                    window.enemyStats[enemyStatsArray[i]].poison = enemyStatsArray[i + 5];
                }
            }

            if (flowrMod.allGalleryRarities === true) {
                if (flowrMod.allMobGalleries === true) {
                    for (let i of Object.keys(enemyStats)) {
                        discoveredEnemies[i] = new Array(Stats.rarities.length).fill(true)
                    }
                } else {
                    for (let i of Object.keys(discoveredEnemies)) {
                        discoveredEnemies[i] = new Array(Stats.rarities.length).fill(true)
                    }
                }
                this.regenerateMobs(discoveredEnemies);
            } else {
                this.regenerateMobs(discoveredEnemies);
            }
        } else if (window.enemyStats['Ladybug'].damage === undefined) {
            window.calculateStats();

            for (let key in Stats.enemies) {
                const enemyStats = Stats.enemies[key];

                const drops = {};

                for (let key2 in enemyStats) {
                    drops[key2] = enemyStats[key2].drops;
                }

                window.enemyStats[key].drops = drops;
            }
        }

        if (Object.keys(this.rows).length === 0) {
            const lastLetterSpacing = ctx.letterSpacing;
            ctx.font = '900 102px Ubuntu';
            ctx.letterSpacing = "-.05px";
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 8;

            ctx.strokeText("???", this.x + this.w / 2, this.y + this.h / 2 - 20);
            ctx.fillText("???", this.x + this.w / 2, this.y + this.h / 2 - 20);

            ctx.lineWidth = 3.5;
            ctx.font = '900 16px Ubuntu';
            ctx.strokeText("(No Mobs Discovered)", this.x + this.w / 2, this.y + this.h / 2 + 35);
            ctx.fillText("(No Mobs Discovered)", this.x + this.w / 2, this.y + this.h / 2 + 35);

            ctx.letterSpacing = lastLetterSpacing;

            this.isEmpty = true;
        } else {
            this.isEmpty = false;
        }
        // ctx.clipping
        ctx.save();

        ctx.beginPath();
        ctx.rect(this.inventorySpace.x, this.inventorySpace.y, this.inventorySpace.w, this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0));
        ctx.clip();
        ctx.closePath();

        ctx.translate(-this.scrollExcess.x * this.scroll.render.x, -this.scrollExcess.y * this.scroll.render.y);

        const rowHeight = 62;
        const pcHeight = 56;
        const horizontalMargin = 8;

        this.currentY = this.y - 3;

        // console.log(this.rows);

        let highestX = 0;

        // finding highest number in all rows
        let highestRarity = 0;
        for (let type in this.rows) {
            const row = this.rows[type];
            if (row.length > highestRarity) {
                highestRarity = row.length;
            }
        }

        for (let type in this.rows) {
            const row = this.rows[type];

            for (let i = 0; i < highestRarity; i++) {
                if (row[i] === undefined) row[i] = false;

                const pcX = this.x + horizontalMargin + (pcHeight + horizontalMargin) * i + pcHeight / 2;
                const pcY = this.currentY + pcHeight / 2 + 12;

                if (row[i] === false) {
                    // draw empty box like the placeholders in the crafting inv 
                    const typeKey = type;
                    const rarityKey = i;

                    if (this.fillerPetalSlots[typeKey] === undefined) {
                        this.fillerPetalSlots[typeKey] = {};
                    }
                    if (this.fillerPetalSlots[typeKey][rarityKey] === undefined) {
                        this.fillerPetalSlots[typeKey][rarityKey] = { render: { x: pcX, y: pcY } };
                    }
                    const fpc = this.fillerPetalSlots[typeKey][rarityKey];
                    fpc.x = pcX;
                    fpc.y = pcY;
                    fpc.render.x = interpolate(fpc.render.x, fpc.x, 0.00672 * dt);
                    fpc.render.y = interpolate(fpc.render.y, fpc.y, 0.00672 * dt);
                    ctx.fillStyle = this.getMainStroke();
                    ctx.beginPath();
                    ctx.roundRect(fpc.render.x - pcHeight / 2, fpc.render.y - pcHeight / 2, pcHeight, pcHeight, 8);
                    ctx.fill();
                    ctx.closePath();

                    continue;
                }

                if (row[i] === true) {
                    row[i] = this.generateEnemyPc(type, i, pcHeight);
                    if (row[i] === false) {
                        row[i] = true;
                    } else {
                        row[i].render.x = pcX;
                        row[i].render.y = pcY;
                    }
                }

                if (row[i] === true) continue;

                if (highestX < row[i].render.x) {
                    highestX = row[i].render.x;
                }

                // draw pc
                const pc = row[i];
                pc.x = pcX;
                pc.y = pcY;
                if (pc.render.x + pc.w / 2 - this.scrollExcess.x * this.scroll.render.x > Math.floor(this.x) * 0.9 && pc.render.x - pc.w / 2 - this.scrollExcess.x * this.scroll.render.x < Math.ceil(this.w + this.x) * 1.1 && pc.render.y + pc.h / 2 - this.scrollExcess.y * this.scroll.render.y > Math.floor(this.y) * 0.9 && pc.render.y - pc.h / 2 - this.scrollExcess.y * this.scroll.render.y < Math.ceil(this.y + this.h) * 1.1) {
                    pc.draw();
                }
            }
            this.currentY += rowHeight;
        }

        // if(this.currentY > 365 && this.h === 365){
        //     this.resize(this.currentY - this.y);
        // }

        this.scrollExcess = {
            x: highestX - this.w - pcHeight / 2,
            y: this.currentY - this.y - this.h + pcHeight / 2
        };
        this.scrollExcess.x = Math.max(this.scrollExcess.x, 0);
        this.scrollExcess.y = Math.max(this.scrollExcess.y, 0);

        ctx.restore();
    }
    drawRowStatBoxes() {
        const hoveringOverMenu = mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, { ...this.inventorySpace, h: this.inventorySpace.h - (this.horizontalScrollBarEnabled === true ? 20 : 0) });
        // drawing stats boxes in another loop
        for (let type in this.rows) {
            const row = this.rows[type];
            for (let i = 0; i < row.length; i++) {
                if (row[i] === false || row[i] === true) continue;

                const pc = row[i];

                if (pc.petals[0].angleVel === undefined) {
                    pc.petals[0].angleVel = Math.random() < 0.0001 ? 0.01 : ((Math.random()) ** 1.5 - 0.5) * 0.002;
                }
                if (hoveringOverMenu && mouseInBox({ x: mouse.canvasX, y: mouse.canvasY }, { x: pc.render.x - pc.w / 2 - this.scrollExcess.x * this.scroll.render.x, y: pc.render.y - pc.h / 2 - this.scrollExcess.y * this.scroll.render.y, w: pc.w, h: pc.h }) === true) {
                    pc.petals[0].isHovered = true;
                    pc.petals[0].angle += 0.02 * dt / (1000 / 120) * Math.sign(pc.petals[0].angleVel);
                    pc.petals[0].lastIsHovered = true;
                } else {
                    pc.petals[0].lastIsHovered = false;
                    pc.petals[0].isHovered = false;
                }
                pc.petals[0].angle += pc.petals[0].angleVel * dt;
                // ctx.translate(pc.render.x, pc.render.y);
                const enemy = pc.petals[0];
                const last = {
                    x: enemy.x,
                    y: enemy.y,
                    render: {
                        x: enemy.render.x,
                        y: enemy.render.y
                    },
                    // radius: enemy.radius
                }
                enemy.render.x = enemy.x = pc.render.x - this.scrollExcess.x * this.scroll.render.x;
                enemy.render.y = enemy.y = pc.render.y - this.scrollExcess.y * this.scroll.render.y;
                enemy.drawStatsBox(undefined, true);

                // enemy.radius = last.radius;
                enemy.x = last.x;
                enemy.y = last.y;
                enemy.render.x = last.render.x;
                enemy.render.y = last.render.y;
            }
        }
    }
    regenerateMobs(es) {
        this.horizontalScrollBarEnabled = false;

        if (flowrMod.allMobGalleries === true) {
            let biomeTypes = [
                "Rock",
                "Plastic",
                "Dandelion",
                "Ladybug",
                "Dark Ladybug",
                "Baby Ant",
                "Worker Ant",
                "Soldier Ant",
                "Queen Ant",
                "Queen Fire Ant",
                "Fire Ant Burrow",
                "Fire Ant",
                "Ant Egg",
                "Fire Ant Egg",
                "Ant Burrow",
                "Locust",
                "Desert Centipede",
                "Cactus",
                "Shiny Ladybug",
                "Ocean Ladybug",
                "Scorpion",
                "Beetle",
                "Sandstorm",
                "Bee",
                "Desert Moth",
                "Hornet",
                "Rock Tank",
                "RockMissile",
                "BossRose",
                "BossRose2",
                "BigRockMissile",
                "Spider",
                "Centipede",
                "Evil Centipede",
                "Square",
                "Pentagon",
                "Missile",
                "BeeMissile",
                "StarfishMissile",
                "FireMissile",
                "UrchinMissile",
                "BossUrchinMissile",
                "BigBossUrchinMissile",
                "ScorpionMissile",
                "LocustMissile",
                "SplitLocustMissile",
                "DandelionMissile",
                "BossDandelionMissile",
                "Bubble",
                "Shell",
                "Crab",
                "Starfish",
                "Sponge",
                "Leech",
                "Jellyfish",
                "Sea Urchin",
                "Invincible Urchin",
                "Shiny Plastic",
                "Evil Desert Centipede",
                "1v1text",
                "Agar.io Cell",
                "smallBullet",
                "bullet",
                "Tank",
                "Streamliner",
                "Factory",
                "Crasher",
                "square",
                "triangle",
                "pentagon",
                "triple shot",
                "big pentagon",
                "trap",
                "shooter of traps",
                "twin",
                "spawner of crashers",
                "big bullet",
                "destroyer",
                "bluebullet",
                "playerTank",
                "streamlinerBullet",
                "guardianCrasher",
                "playerCrasher",
                "playerBullet",
                "Poison Ladybug",
                "Pink Ladybug",
                "White Ladybug",
                "White Ladybug Pellet",
                "Blue Ladybug",
                "Brown Ladybug",
                "Friendly Ladybug",
                "Shiny ladybug",
                "Inverted Ladybug",
                "Ladybug Nest",
                "Soul of the game",
                "Player soul",
                "Ladybug soul",
                "Ultra soul",
                "Piece of ice",
                "Soul spawner",
                "Dead Soul",
                "Fire soul",
                "Water soul",
                "Fireball",
                "The Death Soul",
                "The Light Soul",
                "The Star Soul",
                "Ice",
                "Smallest piece of ice",
                "Diamond soul",
                "Sharp diamond",
                "Stinger Soul",
                "Stinger pet",
                "Soul trap",
                "Angry soul",
                "Fire boss",
                "Boss fireball",
                "Bubble soul",
                "Pop",
                "Light ladybug soul",
                "Ladybug light",
                "Dark ladybug soul",
                "Dahlia",
                "rf_Fly",
                "rf_Twig",
                "rf_Herculean Beetle",
                "Log",
                "rf_Termite",
                "rf_termiteMound",
                "rf_Scarab",
                "rf_TermiteMound",
                "rf_Mantis",
                "rf_MantisPea",
                "rf_Angelwing",
                "rf_orangeButterfly",
                "rf_Bee",
                "rf_soldierTermite",
                "rf_termiteSpawner",
                "rf_woodChunk",
                "rf_Firewing",
                "rf_babyTermite",
                "rf_beeMissile",
                "rf_Bush",
                "rf_Rafflesia",
                "cofffee bug",
                "apple beetle",
                "banana moth",
                "strawberry spider",
                "grape ant nest",
                "grape ant",
                "lemon hornet",
                "lemon",
                "watermelon ladybug",
                "peach bumblebee",
                "pollen",
                "durian ant",
                "bad smell",
                "fruit basket",
                "cabbage centipede head",
                "cabbage centipede body",
                "eggplant bug",
                "tomato bug",
                "eggplant pellet",
                "tomato bomb",
                "tomato",
                "pimento beetle",
                "carrot fly",
                "pumpkin bug",
                "corn bug",
                "popcorn",
                "edamame bug",
                "edamame",
                "potato",
                "poisonous bud",
                "white radish bug",
                "default",
                "nerd",
                "ghost spawner",
                "ghowost",
                "Grave",
                "Book",
                "Firefly",
                "Zombie Bat",
                "bat_proj",
                "Rat",
                "Treasure",
                "Trapped Treasure",
                "Fly",
                "Trash",
                "Maggot",
                "Acid Bubble",
                "Sewer Spider",
                "Roach",
                "Sewer Moth",
                "Mosquito",
                "Saliva Projectile",
                "Sewer Rat",
                "Arctic fly",
                "snow ball",
                "Wood ant",
                "wood ant burrow",
                "Ice bug",
                "Frozen centipede",
                "Frozen centi",
                "Snow Flea",
                "Bush",
                "Budworm",
                "budworm segment",
                "Pine cone",
                "Snowy Bush",
                "Fallen leaf",
                "Snowy Stick",
                "soccer ball",
                "soccer goal",
                "present",
                "Soil",
            ]

            if (flowrMod.noCustom == true) biomeTypes = biomeTypes.filter(
                (name) => {
                    return Object.keys(Descriptions.enemies).includes(name)
                }
            )

            if (flowrMod.alphabet == true) {
                let new_es = {}

                for (let name of Object.keys(es).sort()) {
                    new_es[name] = es[name]
                }

                es = new_es
            }

            this.rows = {};
            for (let key in es) {
                if (biomeTypes.includes(key)) {
                    this.addRow(key, es[key]);
                }
            }
        } else {
            const biomeTypes = biomeEnemyMap[biomeManager.getCurrentBiomeData().current];
            let rareBiomeTypes = rareBiomeEnemyMap[biomeManager.getCurrentBiomeData().current];
            let secretBiomeTypes = secretBiomeEnemyMap[biomeManager.getCurrentBiomeData().current];
            if (!rareBiomeTypes) {
                rareBiomeTypes = [];
            }
            if (!secretBiomeTypes) {
                secretBiomeTypes = [];
            }

            this.rows = {};
            for (let key in es) {
                if (biomeTypes.includes(key) || rareBiomeTypes.includes(key) || secretBiomeTypes.includes(key)) {
                    this.addRow(key, es[key]);
                }

            }
        }

    }
    addRow(type, raritiesEnabled) {
        this.rows[type] = [];
        for (let i = 0; i < raritiesEnabled.length; i++) {
            if (raritiesEnabled[i] === true) {
                this.rows[type][i] = true;
                if (i > 8) this.horizontalScrollBarEnabled = true;
            } else {
                this.rows[type][i] = false;
            }
        }
    }
    generateEnemyPc(type, rarity, dimensions) {
        const radius = 200//Math.random() < 0.0001 ? 360 : Math.sqrt(menuEnemyIncrementRadii[Math.floor(Math.random() * menuEnemyIncrementRadii.length)] * (Math.random() * 0.1 + 0.95)) * 8.7;

        const enemy = new Enemy({
            x: 0,
            y: 0,
            radius,
            hp: 100,
            maxHp: 100,
            id: Math.random(),
            type,
            rarity,
            angle: Math.random() * Math.PI * 2,
            toRenderUi: false,
            isMenuEnemy: true
        })
        enemy.x = enemy.render.x = enemy.y = enemy.render.y = 0;
        enemy.radius = enemy.render.radius = 14;

        enemy.angle = -Math.PI / 4

        const stats = window.structuredClone(window.enemyStats[type]); // {health, damage, mass, speed}
        const scalars = enemyRarityScalars[rarity];

        if (scalars === undefined || stats === undefined) return false;

        stats.xp = scalars.xp;
        stats.health *= scalars.health;
        stats.damage *= scalars.damage;

        if (type == "Starfish") {
            stats.healing = formatAmountHighPrecision(Math.round(stats.health * 0.007 * 30 * 100) / 100) + "/s";
        }
        if (this.type == "Jellyfish") {
            stats.lightningDamage = Math.round(stats.damage * 1.5 * 1000) / 1000
        }

        if (stats.poison) {
            stats.poison[0] = Math.round(stats.poison[0] * scalars.damage * 1000) / 1000;
            stats.poison[1] = Math.round(stats.poison[1] * scalars.damage * 1000) / 1000;
        }
        stats.detectionDistance = scalars.detectionDistance;
        stats.mass *= scalars.mass;

        return new PetalContainer([enemy], {
            x: 0,
            y: 0,
            w: dimensions,
            h: dimensions,
            toOscillate: false,
            amount: 1,
            petalStats: stats
        }, Math.random(), 1, 0)
    }

    updateScroll(scroll = { x: 0, y: 0 }, { mouseX, mouseY }) {
        if (mouseInBox({ x: mouseX, y: mouseY }, this.dimensions) === false) {
            return;
        }

        this.scroll.y += scroll.y / this.scrollExcess.y / 3;
    }
}

let redefineMobGallery = new MobGallery()

mobGallery.regenerateMobs = redefineMobGallery.regenerateMobs
mobGallery.drawRows = redefineMobGallery.drawRows
mobGallery.drawScrollBars = redefineMobGallery.drawScrollBars
mobGallery.generateEnemyPc = redefineMobGallery.generateEnemyPc
mobGallery.toggleMenu = redefineMobGallery.toggleMenu

GlobalInventory = class GlobalInventory {
    constructor() {
        this.icon = new Image();

        if (location.origin === 'https://flowrclient.serum0017.repl.co') {
            this.icon.src = 'https://flowr.fun/gfx/youdontownthisiconzert.png';
        } else {
            this.icon.src = 'gfx/youdontownthisiconzert.png';
        }

        this.hoveringOverButton = false;

        this.hoveringOverX = false;

        this.menuActive = false;

        this.petalContainers = {/*rarity: [petalName: PetalContainer]*/ };

        this.w = 445;//510;
        this.h = 665;//740;

        this.scroll = 5;
        this.render = { scroll: this.scroll };

        this.menuHeights = { beginning: 0, end: this.h };
        this.scrollbar = { top: 0, bottom: 0, renderTop: 0, renderBottom: 0, length: 150 };


        // this.scrollbar.bottom = (canvas.h - this.h - 20) + 60 - this.scrollbar.length * 7/8
        // this.scrollbar.top = this.scrollbar.bottom + this.scrollbar.length / 2
        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length * .5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length * .5 + 30
        }
        this.scrollbar.top = this.scrollbar.bottom = scrollBarProjections.top + this.scrollbar.length;
        this.scrollbar.renderBottom = this.scrollbar.bottom;
        this.scrollbar.renderTop = this.scrollbar.top;

        this.draggingScrollBar = false;

        this.totalPetalHeight = 0;

        this.hoveringOverScrollbar = false;
        this.scrollBarActive = false;
    }
    resizeScroll() {
        if (this.resizeFlag !== undefined) {
            return;
        }
        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length * .5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length * .5 + 30
        }
        this.scrollbar.top = this.scrollbar.bottom = scrollBarProjections.top + this.scrollbar.length;

        this.resizeFlag = true;
    }
    drawIcon(alpha = 1) {
        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        // these colors are taken from florr.io, not hornex. They are the exact same. I checked.
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        if (mouse.canvasX + 6 > 20 && mouse.canvasY + 6 > canvas.h - 20 - 80 - 100 - 100 && mouse.canvasX - 6 < 20 + 80 && mouse.canvasY - 6 < canvas.h - 20 - 80 + 80 - 100 - 100) {
            ctx.fillStyle = '#6aa8df';
            setCursor('pointer');
            this.hoveringOverButton = true;
        } else {
            // if(this.hoveringOverX === false){
            //     document.body.style.cursor = 'auto';
            // }
            this.hoveringOverButton = false;
        }
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.roundRect(20, canvas.h - 20 - 80 - 100 - 100, 80, 80, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.drawImage(this.icon, 20 + 15, canvas.h - 20 - 80 + 15 - 100 - 100, 80 - 15 * 2, 80 - 15 * 2);

        ctx.fillStyle = '#f0f0f0';// this is gonna be pain lol
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.25;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = `900 14px Ubuntu`;
        const lastLetterSpacing = ctx.letterSpacing;
        ctx.letterSpacing = '0px';
        ctx.strokeText("[X]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100)
        ctx.fillText("[X]", 20 + 80 - 15 - 2.5, canvas.h - 20 - 80 + 15 - 100 - 100)
        ctx.letterSpacing = lastLetterSpacing;

        ctx.globalAlpha = 1;
    }
    draw() {
        let alpha = this.fadingOut === true ? 1 - (time - this.originalFadeOutTime) / 100 : 1;

        this.drawIcon(alpha);

        // animation stuff here, calling drawInventory but possibly transforming beforehand
        if (this.menuActive === true || (time - this.lastCloseTime) < 140) {
            this.drawInventory(alpha);
        } else {
            this.hoveringOverX = false;
        }
    }
    fadeOut() {
        this.fadingOut = true;
        this.originalFadeOutTime = time;
        setTimeout(() => {
            delete this.fadingOut;
            if (this.menuActive === true) {
                this.toggleMenu();
            }
        }, 100);
    }
    initInventory(data) {
        this.petalContainers = {};
        craftingMenu.petalContainers = {};
        craftingMenu.fillerPetalSlots = {};
        craftingMenu.recalculateTypeIndexes();

        // console.log({'init inventory data': data});
        for (let i = 0; i < data.length; i++) {
            const { x, y, w, h, originalX, originalY, radius } = data[i];
            this.addPetalContainer(new PetalContainer(Array(data[i].petalAmount).fill(new Petal(data[i].petal)), { x, y, w: 65, h: 65, originalX, originalY, radius, toOscillate: false, petalStats: data[i].petalStats, customBiome: data[i].customBiome }, data[i].id, data[i].amount, data[i].attempt));
        }

        // if(savedPetals){
        //     for(let key in savedPetals.top){
        //         const pc = savedPetals.top[key];
        //         this.removeByRarityAndType(pc.rarity, pc.type);
        //     }
        //     for(let key in savedPetals.bottom){
        //         const pc = savedPetals.bottom[key];
        //         this.removeByRarityAndType(pc.rarity, pc.type);
        //     }
        // }

        for (let key in this.petalContainers) {
            if (key > maxRarityObtained) {
                maxRarityObtained = parseInt(key);
            }
        }
        // if(maxRarityObtained === 9)maxRarityObtained = 100;

        if (flowrMod.alphabet === true) {
            for (let rarity of Object.keys(this.petalContainers)) {
                this.petalContainers[rarity].sort((a, b) => {
                    let p1 = a.type.toLowerCase()
                    let p2 = b.type.toLowerCase()

                    if (p1 > p2) {
                        return 1
                    } else if (p1 < p2) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
        }
    }
    addPetalContainer(p, isCRSync = false) {
        craftingMenu.addPetalContainer(new PetalContainer(p.petals, { ...p }, p.id, p.amount, p.attempt));
        // this whole function is really inefficient lol. If you're ever bored then refactor ig.
        if (this.petalContainers[p.rarity] === undefined) {
            this.petalContainers[p.rarity] = [];
        }

        // const me = room.flowers[window.selfId];

        let previousStack = this.petalContainers[p.rarity].find(p2 => p2.type === p.type);
        if (previousStack !== undefined) {
            previousStack.amount += p.amount;
            previousStack.lastAmountChangedTime = time;

            // if(this.menuActive === true){
            //     previousStack.lastAmountChangedTime = time;
            //     p.isTempAnimation = true;
            //     p.realNonAnimationParent = previousStack;

            //     setTimeout(() => {
            //         const lastLength = this.petalContainers[p.rarity.length];
            //         this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);
            //         if(lastLength === this.petalContainers[p.rarity].length){
            //             for(let i = 0; i < this.petalContainers[p.rarity]; i++){
            //                 if(this.petalContainers[p.rarity][i].type === p.type){
            //                     this.removePetalContainer(p.rarity, i);
            //                     return;
            //                 }
            //             }
            //         }
            //     }, 2000)
            //     return;
            // } else {
            return;
            // }
        }// else {
        // this.petalContainers[p.rarity].unshift(p);
        // this.petalContainers[p.rarity].sort();
        // }

        p.w = 62;
        p.h = 62;

        this.petalContainers[p.rarity].unshift(p);// pushing p ong

        this.petalContainers[p.rarity].sort();

        if (flowrMod.alphabet === true) {
            for (let rarity of Object.keys(this.petalContainers)) {
                this.petalContainers[rarity].sort((a, b) => {
                    let p1 = a.type.toLowerCase()
                    let p2 = b.type.toLowerCase()

                    if (p1 > p2) {
                        return 1
                    } else if (p1 < p2) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
        }
        if (flowrMod.noCustom === true) {
            for (let i of Object.keys(this.petalContainers)) {
                this.petalContainers[i] = this.petalContainers[i].filter(petal => {
                    let officialList = Object.keys(Descriptions.petals)
                    if (officialList.includes(petal.type)) {
                        return true;
                    }
                })
            }
        }

        // adding camera render so that it looks the same even without translation
        // p.render.x += canvas.w/2-me.render.headX;
        // p.render.y += canvas.h/2-me.render.headY;
    }
    removeByRarityAndType(rarity, type) {
        if (this.petalContainers[rarity]?.length === undefined) {
            return;
        }
        for (let i = 0; i < this.petalContainers[rarity].length; i++) {
            if (this.petalContainers[rarity][i].type === type) {
                this.removePetalContainer(rarity, i);
                return true;
            }
        }
        // why is this here?? wtf?
        // craftingMenu.removePetalContainer(type, rarity);
        return false;
    }
    ReturnRarityAndType(rarity, type) {
        if (this.petalContainers[rarity]?.length === undefined) {
            return false;
        }
        for (let i = 0; i < this.petalContainers[rarity].length; i++) {
            if (this.petalContainers[rarity][i].type === type) {
                return this.petalContainers[rarity][i];
            }
        }
        return false;
    }
    removeByRarityAndTypeAndReturn(rarity, type) {
        if (this.petalContainers[rarity]?.length === undefined) {
            return false;
        }
        for (let i = 0; i < this.petalContainers[rarity].length; i++) {
            if (this.petalContainers[rarity][i].type === type) {
                return this.removePetalContainer(rarity, i);
            }
        }
        // why is this here?? wtf?
        // craftingMenu.removePetalContainer(type, rarity);
        return false;
    }
    removePetalContainer(rarity, indexInRarity) {
        const petalContainer = this.petalContainers[rarity][indexInRarity];
        craftingMenu.removePetalContainer(petalContainer.type, petalContainer.rarity);
        if (petalContainer.amount >= 2) {
            petalContainer.amount--;
            petalContainer.lastAmountChangedTime = time;
        } else {
            this.petalContainers[rarity].splice(indexInRarity, 1);
        }
        return petalContainer;
        // for(let i = 0; i < this.petalContainers[p.rarity].length; i++){
        //     const petalContainer = this.petalContainers[p.rarity][i];
        //     if(petalContainer === p){
        //         console.log(p);
        //         if(petalContainer.amount >= 2){
        //             p.amount--;
        //             p.lastAmountChangedTime = time;
        //         } else {
        //             this.petalContainers[p.rarity].splice(i,1);
        //         }
        //         return p;
        //     }
        // }
        // console.log('not found');
        // this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);
    }
    removePetalContainerAmount(rarity, indexInRarity, amount) {
        const petalContainer = this.petalContainers[rarity][indexInRarity];
        if (petalContainer.amount >= amount + 1) {
            petalContainer.amount -= amount;
            petalContainer.lastAmountChangedTime = time;
        } else {
            this.petalContainers[rarity].splice(indexInRarity, 1);
        }
        craftingMenu.removePetalContainerAmount(petalContainer.type, petalContainer.rarity, amount);
    }
    mouseDown({ mouseX, mouseY }, inv) {
        if (this.removeDraggingAnim) {
            clearTimeout(this.removeDraggingAnim);
            draggingPetalContainer = null;
            delete this.removeDraggingAnim;
        }
        for (let i in this.petalContainers) {
            if (this.petalContainers[i] === undefined) {
                continue;
            }
            for (let j = 0; j < this.petalContainers[i].length; j++) {
                const petalContainer = this.petalContainers[i][j];
                if (petalContainer.greyed === true) continue;
                // console.log({petalContainer, mouseX, mouseY})
                // 130, canvas.h - this.h - 20
                if (mouseX > 130 + petalContainer.x - petalContainer.w / 2 && mouseX < 130 + petalContainer.x + petalContainer.w / 2 && mouseY > canvas.h - this.h - 20 + petalContainer.y - petalContainer.h / 2 && mouseY < canvas.h - this.h - 20 + petalContainer.y + petalContainer.h / 2) {
                    // for now we'll just equip the petal, but in the future we would want to start a petal drag
                    // let position = -1;
                    // let isTop = true;
                    // for(let k = 0; k < inv.topPetalSlots.length; k++){
                    //     if(inv.topPetalContainers[k] === undefined){
                    //         position = k;
                    //         break;
                    //     }
                    // }
                    // if(position === -1){
                    //     for(let k = 0; k < inv.bottomPetalSlots.length; k++){
                    //         if(inv.bottomPetalContainers[k] === undefined){
                    //             position = k;
                    //             isTop = false;
                    //             break;
                    //         }
                    //     }
                    // }
                    // // console.log({position});
                    // if(position === -1){
                    //     return;
                    // }
                    // inv.addPetalContainer(new PetalContainer(petalContainer.petals, petalContainer, petalContainer.id, 1), isTop, position);

                    // this.removePetalContainer(petalContainer);
                    // return;
                    const removedPC = this.removePetalContainer(i, j);
                    draggingPetalContainer = new PetalContainer(removedPC.petals, { ...removedPC, isDragging: true }, Math.random(), 1)//petalContainer;
                    draggingPetalContainer.x += 130;
                    draggingPetalContainer.render.x += 130;
                    draggingPetalContainer.y += canvas.h - this.h - 20;
                    draggingPetalContainer.render.y += canvas.h - this.h - 20;
                    draggingPetalContainer.amount = 1;
                    draggingPetalContainer.mouseOffset = {
                        x: draggingPetalContainer.x - mouseX,
                        y: draggingPetalContainer.y - mouseY
                    }
                    draggingPetalContainer.w = 85;
                    draggingPetalContainer.h = 85;
                    // draggingPetalContainer.spawnAnimation = .8;
                }
            }
        }

        if (
            mouseX < this.w - 16 + 12 + 130 &&
            mouseX > this.w - 16 - 12 + 130 &&
            mouseY > (this.scrollbar.bottom) &&
            mouseY < (this.scrollbar.top)
        ) {
            this.draggingScrollBar = true;
        }
    }
    mouseUp({ mouseX, mouseY }, inv, skipFastFlag = false) {
        this.draggingScrollBar = false;
        // delete this.scrollbarMouseOffset;

        if (this.removeDraggingAnim) {
            clearTimeout(this.removeDraggingAnim);
            draggingPetalContainer = null;
            delete this.removeDraggingAnim;
        }
        // console.log(Math.sqrt((mouse.lastDownData.x-mouse.x)**2+(mouse.lastDownData.y-mouse.y)**2));
        if (draggingPetalContainer !== null) {
            if (skipFastFlag === false && time - mouse.lastDownData.time < 300 && Math.sqrt((mouse.lastDownData.x - mouse.x) ** 2 + (mouse.lastDownData.y - mouse.y) ** 2) < 20) {
                if (draggingPetalContainer.lastPetalSlot !== undefined && draggingPetalContainer.lastPetalSlot.index !== -1) {
                    if (draggingPetalContainer.lastPetalSlot.top === true) {
                        if (inv.bottomPetalContainers[draggingPetalContainer.lastPetalSlot.index] === undefined) {
                            this.mouseUp(...arguments, true);
                            return;
                        }
                    } else {
                        if (inv.topPetalContainers[draggingPetalContainer.lastPetalSlot.index] === undefined) {
                            this.mouseUp(...arguments, true);
                            return;
                        }
                    }
                    // if the petal is in Inventory then try and swap it.
                    // add it back
                    inv.addPetalContainer(draggingPetalContainer, draggingPetalContainer.lastPetalSlot.top, draggingPetalContainer.lastPetalSlot.index);
                    // swap it
                    inv.swapPetals(draggingPetalContainer.lastPetalSlot.index, false);
                    draggingPetalContainer = null;
                    return;
                } else {
                    // otherwise if it came from globalInventory then try and equip it
                    if (inv.addInFirstAvailableSlot(draggingPetalContainer) === true) {
                        draggingPetalContainer = null;
                        return;
                    }
                }
            }
            if (inv.addClosest(draggingPetalContainer, this) === true) {
                draggingPetalContainer = null;
            } else {
                // if(this.menuActive === false){
                const render = window.structuredClone(draggingPetalContainer.render);
                const mouseOffset = { x: draggingPetalContainer.mouseOffset.x, y: draggingPetalContainer.mouseOffset.y };
                // let clone = new PetalContainer(draggingPetalContainer.petals, {...draggingPetalContainer}, Math.random(), draggingPetalContainer.amount);
                this.addPetalContainer(draggingPetalContainer);
                draggingPetalContainer = new PetalContainer(draggingPetalContainer.petals, { ...draggingPetalContainer, isDragging: true }, Math.random(), draggingPetalContainer.amount);//p.collectTime = time;
                for (let key in render) {
                    draggingPetalContainer[key] = render[key];
                }
                draggingPetalContainer.mouseOffset = mouseOffset;
                draggingPetalContainer.x = render.x;
                draggingPetalContainer.y = render.y;
                draggingPetalContainer.spawnAnimation = 1;
                draggingPetalContainer.collectTime = time;
                this.removeDraggingAnim = setTimeout(() => {
                    draggingPetalContainer = null;
                    delete this.removeDraggingAnim;
                }, 150)
                // } else {
                //     this.addPetalContainer(draggingPetalContainer);
                //     draggingPetalContainer = null;
                // }
            }
        }
    }
    drawInventory(alpha = 1) {

        this.render.scroll = interpolate(this.render.scroll, this.scroll, 0.0070 * dt);

        if (alpha !== 1) {
            ctx.globalAlpha = alpha;
        }
        let translation = 0;
        if (time - this.lastCloseTime < 160) {
            translation += this.h * easeOutCubic((time - this.lastCloseTime) / 160);
        }
        if (time - this.lastOpenTime < 160) {
            translation += (this.h + 40) - (this.h + 40) * easeOutCubic((time - this.lastOpenTime) / 160);
        }
        if (translation !== 0) {
            ctx.translate(0, translation);
        }

        if (this.hoveringOverScrollbar === true || this.draggingScrollBar === true) {
            setCursor('pointer');
        }

        ctx.translate(130, canvas.h - this.h - 20);
        // if(time - this.lastCloseTime < 500){
        //     ctx.translate()
        // }
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.clip();
        ctx.closePath();

        const petalContainersPerRow = 5;
        const padding = 35;
        const rightPadding = 50;// scroll bar is here so we need more
        const petalContainerSize = 65//(this.petalContainers[0] ?? {w: 0}).w;

        let firstPetalContainer = null;
        let lastPetalContainer = null;

        let renderIndex = 0;
        for (let i = numberOfRarities - 1; i >= 0; i--) {
            if (this.petalContainers[i] === undefined) {
                continue;
            }
            for (let j = 0; j < this.petalContainers[i].length; j++) {
                const petalContainer = this.petalContainers[i][j];
                if (petalContainer.isTempAnimation === true) {
                    var lastRenderIndex = renderIndex;
                    renderIndex = petalContainer.realNonAnimationParent.renderIndex;
                }
                petalContainer.x = petalContainerSize / 2 + padding + (renderIndex % petalContainersPerRow) / (petalContainersPerRow - 1) * (this.w - petalContainerSize - padding - rightPadding);
                petalContainer.y = padding + petalContainerSize / 2 + Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + this.render.scroll;
                petalContainer.renderIndex = renderIndex;

                // really unoptimized lol
                if (firstPetalContainer === null) {
                    firstPetalContainer = petalContainer;
                }
                lastPetalContainer = petalContainer;

                petalContainer.relativeY = Math.floor(renderIndex / petalContainersPerRow) * (petalContainerSize + 12) + petalContainerSize / 2 + this.render.scroll;
                if (petalContainer.relativeY - petalContainer.y + petalContainer.render.y < this.h - padding /*-*/ + petalContainerSize && petalContainer.relativeY - petalContainer.y + petalContainer.render.y > /*padding*/ - petalContainerSize * 2) {
                    // if(this.h - petalContainer.relativeY < petalContainerSize / 2){
                    //     ctx.globalAlpha = (this.h - petalContainer.relativeY) / petalContainerSize / 2;
                    // }
                    if (petalContainer.lastOutTime !== undefined) {
                        delete petalContainer.lastOutTime;
                        petalContainer.lastInTime = time;
                    }

                    // if(petalContainer.lastInTime !== undefined){
                    //     ctx.globalAlpha = ((time - petalContainer.lastInTime) / 300) ** 2;
                    //     if(time - petalContainer.lastInTime > 300){
                    //         delete petalContainer.lastInTime;
                    //     }
                    // }

                    petalContainer.draw();
                    // ctx.globalAlpha = 1;
                } else {
                    // if(petalContainer.lastOutTime === undefined){
                    //     petalContainer.lastOutTime = time;
                    // }
                    // if(petalContainer.lastInTime !== undefined){
                    //     delete petalContainer.lastInTime;
                    // }
                    // if(time - petalContainer.lastOutTime < 300){
                    //     ctx.globalAlpha = (1 - (time - petalContainer.lastOutTime) / 300) ** 2;
                    //     petalContainer.draw();
                    //     ctx.globalAlpha = 1;
                    // } else {
                    petalContainer.updateInterpolate();
                    // }
                }
                renderIndex++;
                if (petalContainer.isTempAnimation === true) {
                    renderIndex = lastRenderIndex;
                }
            }
        }

        ctx.restore();

        // stroking the rect again so that hte stroke isn't halfway in
        ctx.fillStyle = '#5a9fdb';
        ctx.strokeStyle = '#4981b1';
        ctx.lineWidth = 8;

        ctx.save();

        ctx.beginPath()
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.stroke();
        ctx.closePath();

        if (firstPetalContainer !== null && Object.keys(this.petalContainers).length > 0) {// insanity
            this.menuHeights = {
                beginning: firstPetalContainer.relativeY, //- petalContainerSize * 1/2,
                end: lastPetalContainer.relativeY //+ petalContainerSize * 4
            }

            if (this.menuHeights.end - this.menuHeights.beginning < this.h - (petalContainerSize + 12)/*extra row*/) {
                this.scrollBarActive = false;
                this.scroll = 5;
            } else {
                if (this.menuHeights.end - this.menuHeights.beginning < this.h) {
                    this.scrollBarActive = false;
                } else {
                    this.scrollBarActive = true;
                }

                // const lastScroll = this.scroll;

                // console.log(this.menuHeights.beginning - this.menuHeights.end);

                if (this.menuHeights.end + this.scroll - this.render.scroll < this.h - petalContainerSize - padding) {
                    // we want to move target - actual distance
                    this.scroll = (this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - padding - 5;
                } else if (this.menuHeights.beginning + this.scroll - this.render.scroll > padding) {
                    this.scroll = 5;
                    // this.render.scroll = 0;
                }

                // const ratio = (this.scroll - 5) / ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize * 3/2 - 5 - 5);// at 0 it will be 0, at max (this.mH.beginning - ...) it will be 1

                // this.scrollbar.length = ((this.menuHeights.beginning - this.menuHeights.end) + this.h - petalContainerSize - 5); // max scroll
                // this.scrollbar.top = ratio * (this.h - this.scrollbar.length);
                // this.scrollbar.bottom = ratio * (this.h - this.scrollbar.length) + this.scrollbar.length;

                // reverseing the mouseY to scroll to give us mouseY in terms of this.scroll
                const scrollBarProjections = {
                    top: (canvas.h - this.h - 20) + this.scrollbar.length * .5 + 60,
                    bottom: (canvas.h - 20) - this.scrollbar.length * .5 + 30
                }
                // top: (canvas.h - this.h - 20) + this.scrollbar.length - 130,
                // bottom: (canvas.h - 20) - 16 + this.scrollbar.length + 160

                // const mouseProjections = {
                //     top: scrollBarProjections.top - this.scrollbar.length * .25,
                //     bottom: scrollBarProjections.bottom - this.scrollbar.length * .25 + 30
                // }
                // // console.log(scrollBarProjections.bottom - canvas.h);
                // ctx.translate(-130, -(canvas.h - this.h - 20));
                // ctx.fillStyle = 'blue';
                // ctx.beginPath();
                // ctx.arc(0, mouseProjections.bottom, 30, 0, Math.PI * 2);
                // ctx.fill();
                // ctx.closePath();
                // ctx.beginPath();
                // ctx.arc(0, mouseProjections.top, 30, 0, Math.PI * 2);
                // ctx.fill();
                // ctx.closePath();
                // ctx.translate(130, (canvas.h - this.h - 20));

                this.totalPetalHeight = (this.menuHeights.beginning - this.menuHeights.end);

                // this.scroll = (mouseY - scrollBarProjections.top) / (scrollBarProjections.bottom - scrollBarProjections.top) * (this.totalPetalHeight + this.scrollbar.length) //* ((this.h - 82 - 16 * 2) / this.h);

                // max at (this.scroll - this.h) / this.totalPetalHeight, min at 0 / this.totalPetalHeight
                // const ratio = (this.scroll - this.h * ratio) / this.totalPetalHeight;
                const ratio = this.scroll / this.totalPetalHeight / (1 + this.h / this.totalPetalHeight);
                // console.log(ratio);
                this.scrollbar.bottom = interpolate(scrollBarProjections.top, scrollBarProjections.bottom, ratio) - this.scrollbar.length / 2//this.scroll / (this.totalPetalHeight) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top + this.scrollbar.length / 2 - (canvas.h - this.h - 20);
                // this.scrollbar.bottom = this.scroll / (this.totalPetalHeight + this.scrollbar.length) * (scrollBarProjections.bottom - scrollBarProjections.top) + scrollBarProjections.top - this.scrollbar.length/2;
                this.scrollbar.top = this.scrollbar.bottom + this.scrollbar.length / 2//this.scrollbar.bottom - this.scrollbar.length / 2;
            }
        }

        this.scrollbar.renderTop = interpolate(this.scrollbar.renderTop, this.scrollbar.top, this.draggingScrollBar ? 0.28 : 0.08);
        this.scrollbar.renderBottom = interpolate(this.scrollbar.renderBottom, this.scrollbar.bottom, this.draggingScrollBar ? 0.28 : 0.08);

        // console.log(this.scrollBarActive);
        if (this.scrollBarActive !== false && Object.keys(this.petalContainers).length > 0) {
            ctx.translate(0, -(canvas.h - this.h - 20));
            ctx.strokeStyle = '#4981b1';
            ctx.lineWidth = 8;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(this.w - 16, (this.scrollbar.renderTop) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.lineTo(this.w - 16, (this.scrollbar.renderBottom) /** ((this.h - 82 - 16) / this.h) + 82*/);
            ctx.stroke();
            ctx.closePath();
            ctx.translate(0, (canvas.h - this.h - 20));
        }


        if (this.menuActive === true && translation === 0) {
            if (mouse.canvasX > 130 + this.w - 7.5 - 30 - 3 && mouse.canvasY > canvas.h - this.h - 20 + 7.5 + 3 && mouse.canvasX < 130 + this.w - 7.5 - 3 && mouse.canvasY < canvas.h - this.h - 20 + 7.5 + 30 + 3) {
                ctx.fillStyle = "#c16666";
                setCursor('pointer');
                this.hoveringOverX = true;
            } else {
                // if(this.hoveringOverButton === false){
                //     document.body.style.cursor = 'auto';
                // }
                this.hoveringOverX = false;
                ctx.fillStyle = '#c1565e';
            }
        } else {
            ctx.fillStyle = '#c1565e';
            this.hoveringOverX = false;
        }

        ctx.translate(-3, 3);
        ctx.strokeStyle = '#90464b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.roundRect(this.w - 7.5 - 30, 7.5, 30, 30, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.lineWidth = 4.75;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#cccccc';
        ctx.beginPath();
        ctx.moveTo(this.w - 30, 30);
        ctx.lineTo(this.w - 7.5 * 2, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(this.w - 7.5 * 2, 30);
        ctx.lineTo(this.w - 30, 7.5 + 7.5);
        ctx.stroke();
        ctx.closePath();
        ctx.translate(3, -3);
        // ctx.beginPath();
        // ctx.moveTo(this.w - 7.5, 7.5 - 7.5 - 7.5, 30 + 7.5 + 7.5);
        // ctx.lineTo(this.w - 7.5 - 30, 15 + 30 + 15);
        // ctx.stroke();
        // ctx.closePath();

        // const firstPetalContainer = this.petalContainers[0][0];
        // const lastPetalContainer = this.petalContainers[numberOfRarities-2][this.petalContainers[numberOfRarities-2].length-1].y
        // if(firstPetalContainer.relativeY < this.h - petalContainerSize - padding - 20){
        //     this.scroll += (this.h - petalContainerSize - padding - 20 - firstPetalContainer.relativeY);
        // } else if(lastPetalContainer.relativeY > 0){
        //     console.log('alrt');
        // }
        const mouseRelative = {
            x: mouse.canvasX - 130,
            y: mouse.canvasY - (canvas.h - this.h - 20)
        };

        if (mouseRelative.y > 0 && mouseRelative.x < this.w) {
            ctx.lastTransform6 = ctx.getTransform();
            for (let i = numberOfRarities - 1; i >= 0; i--) {
                if (this.petalContainers[i] === undefined) {
                    continue;
                }
                for (let j = 0; j < this.petalContainers[i].length; j++) {
                    const petalContainer = this.petalContainers[i][j];

                    if (
                        mouseRelative.x > petalContainer.render.x - (petalContainer.w / 2 + 6) &&
                        mouseRelative.x < petalContainer.render.x + (petalContainer.w / 2 + 6) &&
                        mouseRelative.y > petalContainer.render.y - (petalContainer.h / 2 + 6) &&
                        mouseRelative.y < petalContainer.render.y + (petalContainer.h / 2 + 6)
                    ) {
                        petalContainer.isHovered = true;
                    }

                    petalContainer.drawStatsBox();
                }
            }
            ctx.setTransform(ctx.lastTransform6);
            delete ctx.lastTransform6;
        }

        ctx.translate(-130, -(canvas.h - this.h - 20));

        if (translation !== 0) {
            ctx.translate(0, -translation);
        }
        ctx.globalAlpha = 1;

        // ctx.fillStyle = 'red';
        // const scrollBarProjections = {
        //     top: (canvas.h - this.h - 20) + 85 + this.scrollbar.length - 130,
        //     bottom: (canvas.h - 20) - 16 + this.scrollbar.length - 130 - 22
        // }
        // ctx.beginPath();
        // ctx.arc(130, scrollBarProjections.top, 12, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
        // ctx.beginPath();
        // ctx.arc(130, scrollBarProjections.bottom, 12, 0, Math.PI * 2);
        // ctx.fill();
        // ctx.closePath();
    }
    updateScroll(/*delta*/{ x, y }, { mouseX, mouseY }) {
        if (this.menuActive !== true) {
            return;
        }

        if (mouseX < 130 || mouseY < canvas.h - this.h - 20 || mouseX > 130 + this.w || mouseY > canvas.h - 20) {
            return;
        }

        this.scroll -= y;

        // let counter = 0;
        // let intrvl = setInterval(() => {
        //     counter++;
        //     if(counter > 10){
        //         clearInterval(intrvl);
        //         return;
        //     }
        // for(let i = numberOfRarities-1; i >= 0; i--){
        //     if(this.petalContainers[i] === undefined){
        //         continue;
        //     }
        //     for(let j = 0; j < this.petalContainers[i].length; j++){
        //         const petalContainer = this.petalContainers[i][j];
        //         if(petalContainer.lastInTime !== undefined){
        //             petalContainer.lastInTime -= Math.abs(y) * 3;
        //         }
        //         if(petalContainer.lastOutTime !== undefined){
        //             petalContainer.lastOutTime -= Math.abs(y) * 3;
        //         }
        //     }    
        // }
        // }, 100)
    }
    mouseMove({ mouseX, mouseY }) {
        if (
            mouseX < this.w - 16 + 12 + 130 &&
            mouseX > this.w - 16 - 12 + 130 &&
            mouseY > (this.scrollbar.bottom) &&
            mouseY < (this.scrollbar.top)
        ) {
            this.hoveringOverScrollbar = true;
            // setCursor('pointer');
            // this.scrollbarMouseOffset = 0//(this.scrollbar.top) * ((this.h - 82 - 16) / this.h) + 82 + (canvas.h - this.h - 20) - mouseY;
        } else {
            this.hoveringOverScrollbar = false;
        }
        /*
        //Tooltip
        for(let i in this.petalContainers){
            if(this.petalContainers[i] === undefined){
                continue;
            }
            for(let j = 0; j < this.petalContainers[i].length; j++){
                const petalContainer = this.petalContainers[i][j];
                if(mouseX > 130 + petalContainer.x - petalContainer.w/2 && mouseX < 130 + petalContainer.x + petalContainer.w/2 && mouseY > canvas.h - this.h - 20 + petalContainer.y - petalContainer.h/2 && mouseY < canvas.h - this.h - 20 + petalContainer.y + petalContainer.h/2){
                    console.log(petalContainer.type, petalContainer.rarity)
                }
            }
        }
        */
        if (this.draggingScrollBar !== true || Object.keys(this.petalContainers).length === 0) {
            return;
        }

        const scrollBarProjections = {
            top: (canvas.h - this.h - 20) + this.scrollbar.length * .5 + 60,
            bottom: (canvas.h - 20) - this.scrollbar.length * .5 + 30
        }

        const mouseProjections = {
            top: scrollBarProjections.top - this.scrollbar.length * .25,
            bottom: scrollBarProjections.bottom + this.scrollbar.length * .33
        }

        let ratio = (mouseY - mouseProjections.top) / (mouseProjections.bottom - mouseProjections.top);
        if (ratio < 0) {
            ratio = 0;
        } else if (ratio > 1) {
            ratio = 1;
        }

        // console.log(mouseY - scrollBarProjections.top);

        if (this.scrollBarActive !== false) {
            this.scroll = ratio * (this.totalPetalHeight) //* ((this.h - 82 - 16 * 2) / this.h);
        } else {
            this.scroll = 5;
        }
    }
    toggleMenu() {
        if (mobGallery.menuActive === true) mobGallery.toggleMenu();
        if (flowrMod.petalGallery.menuActive === true) flowrMod.petalGallery.toggleMenu();
        if (this.menuActive === true) {
            this.lastCloseTime = time;
        } else {
            this.lastOpenTime = time;
            if (craftingMenu.menuActive === true) {
                craftingMenu.toggleMenu();
            }
        }
        this.menuActive = !this.menuActive;
        // console.log(this.menuActive);
    }
}

let redefineGlobalInventory = new GlobalInventory()

globalInventory.initInventory = redefineGlobalInventory.initInventory
globalInventory.addPetalContainer = redefineGlobalInventory.addPetalContainer
globalInventory.drawInventory = redefineGlobalInventory.drawInventory
globalInventory.toggleMenu = redefineGlobalInventory.toggleMenu

Inventory = class Inventory {
    constructor(amountPerRow) {
        this.topPetalSlots = [];
        this.bottomPetalSlots = [];
        for (let i = 0; i < amountPerRow; i++) {
            this.topPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 65 }));
            this.bottomPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 55 }));
        }
        this.positionPetalSlots();

        this.topPetalContainers = {};// key in this case will be the coords of the petal slot its currently in
        this.bottomPetalContainers = {};

        this.translateY = 0;

        try {
            if (savedPetals) {
                for (let key in savedPetals.top) {
                    const pc = savedPetals.top[key];
                    this.addPetalContainer(new PetalContainer(pc.petals.map(p => new Petal(p)), { ...pc }, Math.random(), 1), true, key);
                    pc.render.x = canvas.w;
                    pc.render.y = canvas.h * 2 / 3;
                }
                for (let key in savedPetals.bottom) {
                    const pc = savedPetals.bottom[key];
                    this.addPetalContainer(new PetalContainer(pc.petals.map(p => new Petal(p)), { ...pc }, Math.random(), 1), false, key);
                    pc.render.x = canvas.w;
                    pc.render.y = canvas.h * 2 / 3;
                }
            }
        } catch (e) {
            console.log('ERROR');
            console.log(savedPetals);
            localStorage.removeItem("savedPetals");
        }

        this.fadingPetalContainer = null;
    }
    initChangePetalsQueue() {
        if (this === menuInventory) {
            this.changePetalsQueueInterval = setInterval(() => {
                if (this.queuedChangedPetals !== undefined && window.state === 'menu' && window.connected === true) {
                    send({ changePetals: true, ...this.queuedChangedPetals });
                    delete this.queuedChangedPetals;
                }
            }, 1200)
        }
    }
    sendQueuedChangedPetalsImmediately() {
        send({ changePetals: true, ...this.pack() });
        // doesnt work :(... will need to find a workaround
        // squadUI.updateSelfFlowerPetals({top: this.topPetalContainers, bottom: this.bottomPetalContainers});
    }
    setPetalSlotsNumber(num) {
        localStorage.setItem("savedSlotAmount", num);

        for (let i = this.topPetalSlots.length; i < num; i++) {
            this.topPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 65 }));
            this.bottomPetalSlots.push(new PetalSlot({ x: 0, y: 0, size: 55 }));
        }

        // this.topPetalSlots.length = num;
        // this.bottomPetalSlots.length = num;

        for (let key in this.bottomPetalContainers) {
            if (key > num - 1) {
                delete this.bottomPetalContainers[key];
                continue;
            }
        }

        for (let key in this.topPetalContainers) {
            if (key > num - 1) {
                delete this.topPetalContainers[key];
                continue;
            }
        }

        this.positionPetalSlots();
    }
    copy(otherInventory) {
        this.topPetalContainers = otherInventory.topPetalContainers;
        this.bottomPetalContainers = otherInventory.bottomPetalContainers;
    }
    // pack(){
    //     return this.topPetalContainers.map(p => {return {rarity: p.rarity, type: p.type}});
    // }
    positionPetalSlots() {
        const topPetalSlotSize = this.topPetalSlots[0].size;// global size for all petal slots
        const bottomPetalSlotSize = this.bottomPetalSlots[0].size;

        const totalTopSize = this.topPetalSlots.length * topPetalSlotSize/*they're all the same size*/ + (this.topPetalSlots.length - 1) * paddingRatio * topPetalSlotSize;
        for (let i = 0; i < this.topPetalSlots.length; i++) {
            this.topPetalSlots[i].x = canvas.w / 2 - (totalTopSize - topPetalSlotSize) / 2 + i * (topPetalSlotSize + paddingRatio * topPetalSlotSize);
            this.topPetalSlots[i].y = canvas.h - bottomPetalSlotSize - bottomPetalSlotSize * paddingRatio - topPetalSlotSize * paddingRatio - topPetalSlotSize / 2;
        }

        const totalBottomSize = this.bottomPetalSlots.length * bottomPetalSlotSize/*they're all the same size*/ + (this.bottomPetalSlots.length - 1) * paddingRatio * bottomPetalSlotSize;
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            this.bottomPetalSlots[i].x = canvas.w / 2 - (totalBottomSize - bottomPetalSlotSize) / 2 + i * (bottomPetalSlotSize + paddingRatio * bottomPetalSlotSize);
            this.bottomPetalSlots[i].y = canvas.h - bottomPetalSlotSize * paddingRatio - bottomPetalSlotSize / 2;
        }

        for (let key in this.topPetalContainers) {
            const petalSlot = this.topPetalSlots[key];
            if (petalSlot === undefined) continue;
            this.topPetalContainers[key].x = petalSlot.x;
            this.topPetalContainers[key].y = petalSlot.y;
            this.topPetalContainers[key].w = petalSlot.size;
            this.topPetalContainers[key].h = petalSlot.size;
        }

        for (let key in this.bottomPetalContainers) {
            const petalSlot = this.bottomPetalSlots[key];
            if (petalSlot === undefined) continue;
            this.bottomPetalContainers[key].x = petalSlot.x;
            this.bottomPetalContainers[key].y = petalSlot.y;
            this.bottomPetalContainers[key].w = petalSlot.size;
            this.bottomPetalContainers[key].h = petalSlot.size;
        }
    }
    addPetalContainer(p, isTop, position, toFade = true) {
        // where it will be translated in render
        // (we want to negate this so that it appears to come from the same place)
        // (to be used later at p.render.y -= this.translateY)

        if (isTop) {
            if (this.topPetalContainers[position] !== undefined) {
                this.topPetalContainers[position].w = 65;
                this.topPetalContainers[position].h = 65;
                this.topPetalContainers[position].render.y += this.translateY;
                if (toFade) {
                    this.fadingPetalContainer = this.topPetalContainers[position];
                    this.fadingPetalContainer.fadeTime = time;
                    globalInventory.addPetalContainer(this.topPetalContainers[position]);
                }
            }
            this.topPetalContainers[position] = p;
        } else {
            if (this.bottomPetalContainers[position] !== undefined) {
                this.bottomPetalContainers[position].w = 65;
                this.bottomPetalContainers[position].h = 65;
                this.bottomPetalContainers[position].render.y += this.translateY;
                if (toFade) {
                    this.fadingPetalContainer = this.bottomPetalContainers[position];
                    this.fadingPetalContainer.fadeTime = time;
                    globalInventory.addPetalContainer(this.bottomPetalContainers[position]);
                }
            }
            this.bottomPetalContainers[position] = p;
        }
        this.positionPetalSlots();

        p.render.y -= this.translateY;
        // ctx.translate(0, this.translateY)

        this.updateSavedPetals();
    }
    addInFirstAvailableSlot(p) {
        for (let i = 0; i < this.topPetalSlots.length; i++) {
            if (this.topPetalContainers[i] === undefined) {
                this.addPetalContainer(p, true, i, true);
                return true;
            }
        }
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            if (this.bottomPetalContainers[i] === undefined) {
                this.addPetalContainer(p, false, i, true);
                return true;
            }
        }
        return false;
    }
    getClosest(p) {
        const rectA = {
            x: p.x,
            y: p.y,
            difference: {
                x: p.w / 2,
                y: p.h / 2
            }
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            if (p.lastPetalSlot !== undefined) {
                if (p.lastPetalSlot.top === true && p.lastPetalSlot.index == i) { //{index: 0, top: true}
                    continue;
                }
            }

            const pc = this.topPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                return pc;
            }
        }

        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            if (p.lastPetalSlot !== undefined) {
                if (p.lastPetalSlot.top === false && p.lastPetalSlot.index == i) { //{index: 0, top: true}
                    continue;
                }
            }

            const pc = this.bottomPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                return pc;
            }
        }

        return false;
    }
    addClosest(p, globalInv) {
        const rectA = {
            x: p.x,
            y: p.y,
            difference: {
                x: p.w / 2,
                y: p.h / 2
            }
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            const pc = this.topPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                if (p.lastPetalSlot !== undefined && p.lastPetalSlot.index !== -1) {
                    let swappingPetalContainer = this.topPetalContainers[i];
                    if (swappingPetalContainer === undefined) {
                        // if no other petal exists then just function as normal
                        this.addPetalContainer(p, true, i);
                        return true;
                    }

                    // otherwise swap petals
                    this.addPetalContainer(p, true, i, false);
                    this.addPetalContainer(swappingPetalContainer, p.lastPetalSlot.top, p.lastPetalSlot.index, false);
                    return true;
                }
                // TODO: make petal go back into inventory if one already exists
                this.addPetalContainer(p, true, i);
                return true;
            }
        }

        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            const pc = this.bottomPetalSlots[i];
            const rectB = {
                x: pc.x,
                y: pc.y + this.translateY,
                difference: {
                    x: pc.size,
                    y: pc.size
                }
            }

            if (this.intersectingRect(rectA, rectB) === true) {
                if (p.lastPetalSlot !== undefined && p.lastPetalSlot.index !== -1) {
                    let swappingPetalContainer = this.bottomPetalContainers[i];
                    if (swappingPetalContainer === undefined) {
                        // if no other petal exists then just function as normal
                        this.addPetalContainer(p, false, i);
                        return true;
                    }

                    // otherwise swap petals
                    this.addPetalContainer(p, false, i, false);
                    this.addPetalContainer(swappingPetalContainer, p.lastPetalSlot.top, p.lastPetalSlot.index, false);
                    return true;
                }
                this.addPetalContainer(p, false, i);
                return true;
            }
        }

        return false;
    }
    intersectingRect(obj1, obj2) {
        if (obj1.x - obj1.difference.x / 2 > obj2.x + obj2.difference.x / 2 || obj1.x + obj1.difference.x / 2 < obj2.x - obj2.difference.x / 2) return false;
        if (obj1.y - obj1.difference.y / 2 > obj2.y + obj2.difference.y / 2 || obj1.y + obj1.difference.y / 2 < obj2.y - obj2.difference.y / 2) return false;
        return true;
    }
    removePetalContainer(isBottom, key) {
        if (isBottom === true) {
            if (this.bottomPetalContainers[key].amount > 1) {
                this.bottomPetalContainers[key].amount--;
                this.bottomPetalContainers[key].y -= this.translateY;
                this.bottomPetalContainers[key].w = 50;
                this.bottomPetalContainers[key].h = 50;
            } else {
                delete this.bottomPetalContainers[key];
            }
        } else {
            if (this.topPetalContainers[key].amount > 1) {
                this.topPetalContainers[key].amount--;
                this.topPetalContainers[key].y -= this.translateY;
                this.topPetalContainers[key].w = 50;
                this.topPetalContainers[key].h = 50;
            } else {
                delete this.topPetalContainers[key];
            }
        }
        // this.petalContainers[p.rarity] = this.petalContainers[p.rarity].filter(p2 => p2 !== p);

        this.updateSavedPetals();
    }
    clear() {
        this.topPetalContainers = {};// key in this case will be the coords of the petal slot its currently in
        this.bottomPetalContainers = {};
    }
    mouseDown({ mouseX, mouseY }, inv) {
        if (window.state !== 'menu') {
            if (window.state == 'game') {
                for (let key in this.topPetalContainers) {
                    const pc = this.topPetalContainers[key];
                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && mouseY > pc.y - pc.h / 2 && mouseY < pc.y + pc.h / 2) {
                        this.swapPetals(parseInt(key));
                        return;
                    }
                }
                for (let key in this.bottomPetalContainers) {
                    const pc = this.bottomPetalContainers[key];
                    if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && mouseY > pc.y - pc.h / 2 && mouseY < pc.y + pc.h / 2) {
                        this.swapPetals(parseInt(key));
                        return;
                    }
                }
            }
            return;
        }
        const offsetMouseY = mouseY - this.translateY;
        // for(let key in this.bottomPetalContainers){
        //     const pc = this.bottomPetalContainers[key];

        //     // if(mouseX > pc.x - pc.w/2 && mouseX < pc.x + pc.w/2 && offsetMouseY > pc.y - pc.h/2 && offsetMouseY < pc.y + pc.h/2){
        //         draggingPetalContainer = new PetalContainer(pc.petals, {...pc}, Math.random(), 1);
        //         this.removePetalContainer(true, key);
        //         return;
        //     // }
        // }
        for (let key in this.topPetalContainers) {
            const pc = this.topPetalContainers[key];

            if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                draggingPetalContainer = new PetalContainer(pc.petals, { ...pc, isDragging: true, lastSlot: { top: true, index: key } }, Math.random(), 1);
                draggingPetalContainer.mouseOffset = {
                    x: draggingPetalContainer.x - mouseX,
                    y: draggingPetalContainer.y - offsetMouseY
                }
                draggingPetalContainer.render.y += this.translateY;
                draggingPetalContainer.y += this.translateY;
                draggingPetalContainer.w = 85;
                draggingPetalContainer.h = 85;
                draggingPetalContainer.spawnAnimation = 1;
                this.removePetalContainer(false, key);
                return;
            }
        }

        for (let key in this.bottomPetalContainers) {
            const pc = this.bottomPetalContainers[key];

            if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                draggingPetalContainer = new PetalContainer(pc.petals, { ...pc, isDragging: true, lastSlot: { top: false, index: key } }, Math.random(), 1);
                draggingPetalContainer.mouseOffset = {
                    x: draggingPetalContainer.x - mouseX,
                    y: draggingPetalContainer.y - offsetMouseY
                }
                draggingPetalContainer.render.y += this.translateY;
                draggingPetalContainer.y += this.translateY;
                draggingPetalContainer.w = 85;
                draggingPetalContainer.h = 85;
                draggingPetalContainer.spawnAnimation = 1;
                this.removePetalContainer(true, key);
                return;
            }
        }
        // if(this.petalContainers[i] === undefined){
        //     continue;
        // }
        // for(let j = 0; j < this.petalContainers[i].length; j++){
        //     const petalContainer = this.petalContainers[i][j];
        //     // console.log({petalContainer, mouseX, mouseY})
        //     if(mouseX > petalContainer.x - petalContainer.w/2 && mouseX < petalContainer.x + petalContainer.w/2 && mouseY > petalContainer.y - petalContainer.h/2 && mouseY < petalContainer.y + petalContainer.h/2){
        //         // for now we'll just equip the petal, but in the future we would want to start a petal drag
        //         // let position = -1;
        //         // let isTop = true;
        //         // for(let k = 0; k < inv.topPetalSlots.length; k++){
        //         //     if(inv.topPetalContainers[k] === undefined){
        //         //         position = k;
        //         //         break;
        //         //     }
        //         // }
        //         // if(position === -1){
        //         //     for(let k = 0; k < inv.bottomPetalSlots.length; k++){
        //         //         if(inv.bottomPetalContainers[k] === undefined){
        //         //             position = k;
        //         //             isTop = false;
        //         //             break;
        //         //         }
        //         //     }
        //         // }
        //         // // console.log({position});
        //         // if(position === -1){
        //         //     return;
        //         // }
        //         // inv.addPetalContainer(new PetalContainer(petalContainer.petals, petalContainer, petalContainer.id, 1), isTop, position);

        //         // this.removePetalContainer(petalContainer);
        //         // return;
        //         draggingPetalContainer = new PetalContainer(petalContainer.petals, {...petalContainer}, Math.random(), 1)//petalContainer;
        //         draggingPetalContainer.mouseOffset = {
        //             x: draggingPetalContainer.x - mouseX,
        //             y: draggingPetalContainer.y - mouseY
        //         }
        //         this.removePetalContainer(petalContainer);
        //     }
        // }
    }
    swapPetals(index, toSend = true) {
        if (this.topPetalSlots[index] === undefined) {
            return;
        }

        const placeholder = this.topPetalContainers[index];
        this.topPetalContainers[index] = this.bottomPetalContainers[index];
        this.bottomPetalContainers[index] = placeholder;
        if (this.topPetalContainers[index] === undefined) {
            delete this.topPetalContainers[index];
        }
        if (this.bottomPetalContainers[index] === undefined) {
            delete this.bottomPetalContainers[index];
        }
        this.positionPetalSlots();

        if (toSend === true) send({ swapPetal: index });

        this.updateSavedPetals();
    }
    draw(alpha = 1) {
        if (this.fadingPetalContainer !== null) {
            const temp = { x: this.fadingPetalContainer.render.x, y: this.fadingPetalContainer.render.y };
            this.fadingPetalContainer.render.x = this.fadingPetalContainer.x;
            this.fadingPetalContainer.render.y = this.fadingPetalContainer.y;
            // ctx.translate(0,-this.translateY);
            const animationTime = 1 - (time - this.fadingPetalContainer.fadeTime) / 200;
            ctx.globalAlpha = Math.max(0, Math.min(1, animationTime));
            ctx.save();
            ctx.translate(this.fadingPetalContainer.x, this.fadingPetalContainer.y);
            ctx.scale(2 - animationTime, 2 - animationTime);
            ctx.translate(-this.fadingPetalContainer.x, -this.fadingPetalContainer.y);
            this.fadingPetalContainer.draw(alpha);
            ctx.restore();
            // ctx.translate(0,this.translateY);
            this.fadingPetalContainer.render.x = temp.x;
            this.fadingPetalContainer.render.y = temp.y;
            if (time - this.fadingPetalContainer.fadeTime > 200) {
                this.fadingPetalContainer = null;
            }
        }

        for (let i = 0; i < this.topPetalSlots.length; i++) {
            this.topPetalSlots[i].draw(alpha);
        }
        for (let i = 0; i < this.bottomPetalSlots.length; i++) {
            this.bottomPetalSlots[i].draw(alpha);
        }
        for (let key in this.topPetalContainers) {
            this.topPetalContainers[key].draw(true, key);
        }
        for (let key in this.bottomPetalContainers) {
            this.bottomPetalContainers[key].draw();
        }

        if (this === menuInventory) {
            const mouseX = mouse.x * canvas.w / window.innerWidth;
            const mouseY = mouse.y * canvas.h / window.innerHeight;
            const offsetMouseY = mouseY - this.translateY;
            ctx.lastTransform8 = ctx.getTransform();
            for (let key in this.topPetalContainers) {
                const pc = this.topPetalContainers[key];

                if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                    pc.isHovered = true;
                }
                pc.drawStatsBox(true);
            }

            for (let key in this.bottomPetalContainers) {
                const pc = this.bottomPetalContainers[key];

                if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                    pc.isHovered = true;
                }
                pc.drawStatsBox(true);
            }
            ctx.setTransform(ctx.lastTransform8);
            delete ctx.lastTransform8;
        } else if (flowrMod.gameHover === true) {
            const mouseX = mouse.x * canvas.w / window.innerWidth;
            const mouseY = mouse.y * canvas.h / window.innerHeight;
            const offsetMouseY = mouseY - this.translateY;
            ctx.lastTransform8 = ctx.getTransform();
            for (let key in this.topPetalContainers) {
                const pc = this.topPetalContainers[key];

                if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                    pc.isHovered = true;
                }
                pc.drawStatsBox(false);
            }

            for (let key in this.bottomPetalContainers) {
                const pc = this.bottomPetalContainers[key];

                if (mouseX > pc.x - pc.w / 2 && mouseX < pc.x + pc.w / 2 && offsetMouseY > pc.y - pc.h / 2 && offsetMouseY < pc.y + pc.h / 2) {
                    pc.isHovered = true;
                }
                pc.drawStatsBox(false);
            }
            ctx.setTransform(ctx.lastTransform8);
            delete ctx.lastTransform8;
        }
    }
    updateBiome() {
        for (let key in this.topPetalContainers) {
            const pc = this.topPetalContainers[key];
            pc.draw();
            if (pc.greyed === true) {
                globalInventory.addPetalContainer(pc);
                this.removePetalContainer(false, key);
            }
        }
        for (let key in this.bottomPetalContainers) {
            const pc = this.bottomPetalContainers[key];
            pc.draw();
            if (pc.greyed === true) {
                globalInventory.addPetalContainer(pc);
                this.removePetalContainer(true, key);
            }
        }
    }
    updateSavedPetals() {
        // let savedPetals = {top: {}, bottom: {}};
        // for(let key in this.topPetalContainers){
        //     savedPetals.top[key] = {rarity: this.topPetalContainers[key].rarity, type: this.topPetalContainers[key].type};
        // }
        // for(let key in this.bottomPetalContainers){
        //     savedPetals.bottom[key] = this.bottomPetalContainers[key];
        // }
        // savedPetals = {top: this.topPetalContainers, bottom: this.bottomPetalContainers};
        localStorage.setItem("savedPetals", JSON.stringify({ top: this.topPetalContainers, bottom: this.bottomPetalContainers }));

        if (window.loaded === true) {
            if (this === menuInventory) {
                this.queueSendChangedPetals();
                squadUI.updateSelfFlowerPetals({ top: this.topPetalContainers, bottom: this.bottomPetalContainers });
            }
        }
    }
    queueSendChangedPetals() {
        const pack = this.pack();
        this.queuedChangedPetals = pack;
    }
    pack() {
        return {
            top: mapObject(this.topPetalContainers, pc => { return { rarity: pc.rarity, type: pc.type } }),
            bottom: mapObject(this.bottomPetalContainers, pc => { return { rarity: pc.rarity, type: pc.type } })
        };
    }
}

let redefineInventory = new Inventory(savedSlotAmount)
inventory.draw = redefineInventory.draw

for (let rarity of Object.keys(Stats.rarities)) {
    for (let petal of Object.keys(Stats.petals)) {
        flowrMod.petalGallery.addPetalContainer(flowrMod.generatePetalContainer(petal, Number(rarity), 1))
    }
}

for (let i of Object.keys(menuInventory.topPetalContainers)) {
    let petal = menuInventory.topPetalContainers[i]
    menuInventory.topPetalContainers[i] = flowrMod.generatePetalContainer(petal.type, petal.rarity, petal.amount)
}

for (let i of Object.keys(menuInventory.bottomPetalContainers)) {
    let petal = menuInventory.bottomPetalContainers[i]
    menuInventory.bottomPetalContainers[i] = flowrMod.generatePetalContainer(petal.type, petal.rarity, petal.amount)
}
