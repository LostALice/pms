// Code by AkinoAlice@Tyrant_Rex
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8000"

export function getJWTToken() {
    const token = localStorage["token"]
    const nid = localStorage["nid"]
    if (token == null & nid == null) {
        return false
    }
    else {
        return token
    }
}

export async function verifyLoginTimeout() {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    if (nid == null || token == null || nid == "" || token == "") return false

    let resp = await axios.post("/TimeoutStatus", null, {
        params:{
            "nid": nid,
            "token": token,
        }
    })
    resp = await resp
    return resp.data.timeout
}

export async function getSubjectData() {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    if (nid == null || token == null) return false

    let resp = await axios.post("/SubjectData", null, {
        params:{
            "nid": nid,
            "token": token,
        }
    })
    resp = await resp
    return resp.data.timeout
}

export async function getTeacherInfo(target) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/TeacherData", null, {
        params:{
            "nid": nid,
            "token": token,
            "target": target,
        }
    })

    resp = await resp
    return resp.data
}