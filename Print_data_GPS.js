[
    {
        "id": "76c915a3.b9737c",
        "type": "ui_form",
        "z": "572c7ce4.8b4824",
        "name": "",
        "label": "cum in alo",
        "group": "eb2146ba.b66fc8",
        "order": 15,
        "width": 0,
        "height": 0,
        "options": [
            {
                "label": "id",
                "value": "id",
                "type": "text",
                "required": true
            },
            {
                "label": "lat",
                "value": "lat",
                "type": "text",
                "required": true
            },
            {
                "label": "lon",
                "value": "lon",
                "type": "text",
                "required": true
            },
            {
                "label": "altitude",
                "value": "altitude",
                "type": "text",
                "required": true
            },
            {
                "label": "speed",
                "value": "speed",
                "type": "text",
                "required": true
            },
            {
                "label": "hdop",
                "value": "hdop",
                "type": "text",
                "required": true
            },
            {
                "label": "db",
                "value": "db",
                "type": "text",
                "required": true
            },
            {
                "label": "sat",
                "value": "sat",
                "type": "text",
                "required": true
            },
            {
                "label": "bearing",
                "value": "bearing",
                "type": "text",
                "required": true
            },
            {
                "label": "hash",
                "value": "hash",
                "type": "text",
                "required": true
            },
            {
                "label": "timestamp",
                "value": "timestamp",
                "type": "text",
                "required": true
            },
            {
                "label": "addr",
                "value": "addr",
                "type": "text",
                "required": true
            },
            {
                "label": "area",
                "value": "area",
                "type": "text",
                "required": true
            },
            {
                "label": "c",
                "value": "c",
                "type": "text",
                "required": true
            },
            {
                "label": "sent",
                "value": "sent",
                "type": "text",
                "required": true
            }
        ],
        "formValue": {
            "id": "",
            "lat": "",
            "lon": "",
            "altitude": "",
            "speed": "",
            "hdop": "",
            "db": "",
            "sat": "",
            "bearing": "",
            "hash": "",
            "timestamp": "",
            "addr": "",
            "area": "",
            "c": "",
            "sent": ""
        },
        "payload": "",
        "submit": "submit",
        "cancel": "cancel",
        "topic": "",
        "x": 380,
        "y": 380,
        "wires": [
            [
                "5d8a88e8.25abe8",
                "3fea2467.0f59fc",
                "fdcc5d16.d73ed",
                "ea4a58f9.092738",
                "83b3b2ff.b45ec",
                "6579ab5c.8c2ae4",
                "ffc7fe94.3880a",
                "500cc017.f5484",
                "5a866ba9.e1df34",
                "aa427bf6.c94978",
                "615ba1d3.0812",
                "251b8d7.041f372",
                "1f629e92.d20ab1",
                "ae1bde62.2b72",
                "63d74d34.d6bc94",
                "642f0de1.bbb564",
                "8b0ba841.e02398"
            ]
        ]
    },
    {
        "id": "37f00.8bcb91008",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 2,
        "width": 0,
        "height": 0,
        "name": "text_lat",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 280,
        "wires": []
    },
    {
        "id": "5d8a88e8.25abe8",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "lat",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.lat",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 280,
        "wires": [
            [
                "37f00.8bcb91008"
            ]
        ]
    },
    {
        "id": "e1fe0686.9d4ba8",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 3,
        "width": 0,
        "height": 0,
        "name": "text_lon",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 320,
        "wires": []
    },
    {
        "id": "3fea2467.0f59fc",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "lon",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.lon",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 320,
        "wires": [
            [
                "e1fe0686.9d4ba8"
            ]
        ]
    },
    {
        "id": "84d99813.b201c8",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "text_altitude",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1030,
        "y": 360,
        "wires": []
    },
    {
        "id": "fdcc5d16.d73ed",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "altitude",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.altitude",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 740,
        "y": 360,
        "wires": [
            [
                "84d99813.b201c8"
            ]
        ]
    },
    {
        "id": "6bfff626.681f28",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 5,
        "width": 0,
        "height": 0,
        "name": "text_speed",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1030,
        "y": 400,
        "wires": []
    },
    {
        "id": "ea4a58f9.092738",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "speed",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.speed",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 400,
        "wires": [
            [
                "6bfff626.681f28"
            ]
        ]
    },
    {
        "id": "16659d30.8a8083",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 6,
        "width": 0,
        "height": 0,
        "name": "text_hdop",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 440,
        "wires": []
    },
    {
        "id": "83b3b2ff.b45ec",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "hdop",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.hdop",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 440,
        "wires": [
            [
                "16659d30.8a8083"
            ]
        ]
    },
    {
        "id": "4b32afbe.7e629",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 7,
        "width": 0,
        "height": 0,
        "name": "text_db",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 480,
        "wires": []
    },
    {
        "id": "6579ab5c.8c2ae4",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "db",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.db",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 480,
        "wires": [
            [
                "4b32afbe.7e629"
            ]
        ]
    },
    {
        "id": "a5e97609.3f6c28",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "text_sat",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 520,
        "wires": []
    },
    {
        "id": "ffc7fe94.3880a",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "sat",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.sat",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 520,
        "wires": [
            [
                "a5e97609.3f6c28"
            ]
        ]
    },
    {
        "id": "a469b9fc.e9ced8",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 9,
        "width": 0,
        "height": 0,
        "name": "text_bearing",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1030,
        "y": 560,
        "wires": []
    },
    {
        "id": "500cc017.f5484",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "bearing",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.bearing",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 740,
        "y": 560,
        "wires": [
            [
                "a469b9fc.e9ced8"
            ]
        ]
    },
    {
        "id": "de14de55.05a65",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 10,
        "width": 0,
        "height": 0,
        "name": "text_hash",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 600,
        "wires": []
    },
    {
        "id": "5a866ba9.e1df34",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "hash",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.hash",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 600,
        "wires": [
            [
                "de14de55.05a65"
            ]
        ]
    },
    {
        "id": "bfdfd1f.d21773",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 11,
        "width": 0,
        "height": 0,
        "name": "text_timestamp",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1040,
        "y": 640,
        "wires": []
    },
    {
        "id": "aa427bf6.c94978",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "timestamp",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.timestamp",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 750,
        "y": 640,
        "wires": [
            [
                "bfdfd1f.d21773"
            ]
        ]
    },
    {
        "id": "83a84244.d748",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 12,
        "width": 0,
        "height": 0,
        "name": "text_addr",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 680,
        "wires": []
    },
    {
        "id": "615ba1d3.0812",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "addr",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.addr",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 680,
        "wires": [
            [
                "83a84244.d748"
            ]
        ]
    },
    {
        "id": "80915d6.ed052a",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 13,
        "width": 0,
        "height": 0,
        "name": "text_area",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 720,
        "wires": []
    },
    {
        "id": "251b8d7.041f372",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "area",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.area",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 720,
        "wires": [
            [
                "80915d6.ed052a"
            ]
        ]
    },
    {
        "id": "1f629e92.d20ab1",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "id",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.id",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 240,
        "wires": [
            [
                "15bdae29.aa11b2"
            ]
        ]
    },
    {
        "id": "15bdae29.aa11b2",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "text_id",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1010,
        "y": 240,
        "wires": []
    },
    {
        "id": "d1f5cc75.40939",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 14,
        "width": 0,
        "height": 0,
        "name": "text_c",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1010,
        "y": 760,
        "wires": []
    },
    {
        "id": "ae1bde62.2b72",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "c",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.c",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 760,
        "wires": [
            [
                "d1f5cc75.40939"
            ]
        ]
    },
    {
        "id": "57d1a651.274588",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "c732ae44.e4b4b",
        "order": 15,
        "width": 0,
        "height": 0,
        "name": "text_sent",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "x": 1020,
        "y": 800,
        "wires": []
    },
    {
        "id": "63d74d34.d6bc94",
        "type": "change",
        "z": "572c7ce4.8b4824",
        "name": "sent",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "payload.sent",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 730,
        "y": 800,
        "wires": [
            [
                "57d1a651.274588"
            ]
        ]
    },
    {
        "id": "84dbda20.622a68",
        "type": "debug",
        "z": "572c7ce4.8b4824",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 830,
        "y": 160,
        "wires": []
    },
    {
        "id": "cc4c0955.6e7078",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "671362e8.3552fc",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "view_link",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 1020,
        "y": 840,
        "wires": []
    },
    {
        "id": "642f0de1.bbb564",
        "type": "function",
        "z": "572c7ce4.8b4824",
        "name": "",
        "func": "var id, lat, lon, altitude, speed, hdop, db, sat, bearing, hash, timestamp, addr, area, c, sent;\nmsg.payload = \"http://iot-btrack.busmap.vn/?\" + \"id=\" + msg.payload.id + \"&lat=\" + msg.payload.lat + \"&lon=\" + msg.payload.lon + \"&altitude=\" + msg.payload.altitude + \"&speed=\" + msg.payload.speed + \"&hdop=\" + msg.payload.hdop + \"&db=\" + msg.payload.db + \"&sat=\" + msg.payload.sat + \"&bearing=\" + msg.payload.bearing + \"&hash=\" + msg.payload.hash + \"&timestamp=\" + msg.payload.timestamp + \"&addr=\" + msg.payload.addr + \"&area=\" + msg.payload.area + \"&c=\" + msg.payload.c + \"&sent=\" + msg.payload.sent;\n//var array[100] = msg.payload;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 730,
        "y": 840,
        "wires": [
            [
                "cc4c0955.6e7078"
            ]
        ]
    },
    {
        "id": "8b0ba841.e02398",
        "type": "serial request",
        "z": "572c7ce4.8b4824",
        "name": "",
        "serial": "80e3753d.c4b5c8",
        "x": 630,
        "y": 80,
        "wires": [
            [
                "459a5de4.875444",
                "84dbda20.622a68"
            ]
        ]
    },
    {
        "id": "459a5de4.875444",
        "type": "ui_text",
        "z": "572c7ce4.8b4824",
        "group": "49f2b38.622de4c",
        "order": 0,
        "width": 0,
        "height": 0,
        "name": "view_data",
        "label": "",
        "format": "{{msg.payload}}",
        "layout": "col-center",
        "x": 840,
        "y": 80,
        "wires": []
    },
    {
        "id": "eb2146ba.b66fc8",
        "type": "ui_group",
        "z": "",
        "name": "Input",
        "tab": "283cb505.ed188a",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "c732ae44.e4b4b",
        "type": "ui_group",
        "z": "",
        "name": "Output",
        "tab": "283cb505.ed188a",
        "order": 2,
        "disp": true,
        "width": "8",
        "collapse": true
    },
    {
        "id": "671362e8.3552fc",
        "type": "ui_group",
        "z": "",
        "name": "Output_http",
        "tab": "283cb505.ed188a",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "80e3753d.c4b5c8",
        "type": "serial-port",
        "z": "",
        "serialport": "COM5",
        "serialbaud": "115200",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "49f2b38.622de4c",
        "type": "ui_group",
        "z": "",
        "name": "Serial_tab",
        "tab": "283cb505.ed188a",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "283cb505.ed188a",
        "type": "ui_tab",
        "z": "",
        "name": "DashBoard-Btrack",
        "icon": "dashboard",
        "order": 4,
        "disabled": false,
        "hidden": false
    }
]