export const user = {
 "class": String,
 "email": String,
 "name": String,
 "password": String,
 "paletteColor": String,
 "permissions": Array,
"lastWarnings":{
  "id":{
    "date": Date,
    "description": String,
    "type": String, //general or internal
    "class": String
  }
}
}

export const classe = {

    "teachers": {
        "area": "name"
    },
    "warnings":{
        "id":{
          "date": Date,
          "description": String,
          "author": String
        }
      },
      "students":{
        "name":{
            "representative": Boolean
        }
      }

}

/*
********
CARGOS
********

desenvolvedores:
secretaria:
professores:
representantes:
alunos:


TYPES:

sendWarnGeneral, sendWarnInternal, representativeNotices
*/