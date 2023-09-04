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

// subject
export async function createSubject(
    subjectName,
    year,
    startDate,
    endDate,
    settlementStartDate,
    settlementEndDate,
) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/createSubject", null, {
        params:{
            "nid": nid,
            "token": token,
            "subjectName": subjectName,
            "year": year,
            "startDate": startDate,
            "endDate": endDate,
            "settlementStartDate": settlementStartDate,
            "settlementEndDate": settlementEndDate,
        }
    })

    resp = await resp
    return resp.data
}

export async function getSubject() {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getSubject", null, {
        params:{
            "nid": nid,
            "token": token,
        }
    })

    resp = await resp
    return resp.data
}

export async function deleteSubject(subjectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteSubject", null, {
        params:{
            "nid": nid,
            "token": token,
            "subjectUUID": subjectUUID
        }
    })

    resp = await resp
    return resp.data
}

// project
export async function getProject(subjectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getProject", null, {
        params:{
            "nid": nid,
            "token": token,
            "subjectUUID": subjectUUID
        }
    })

    resp = await resp
    return resp.data
}

export async function createProject(subjectUUID, projectName) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/createProject", null, {
        params:{
            "nid": nid,
            "token": token,
            "subjectUUID": subjectUUID,
            "projectName": projectName
        }
    })

    resp = await resp
    return resp.data
}

export async function deleteProject(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteProject", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })

    resp = await resp
    return resp.data
}

export async function getProjectInfo(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getProjectInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })

    resp = await resp
    return resp.data
}

// announcement
export async function getAnnouncementData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getAnnouncementData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
        }
    })

    resp = await resp
    return resp.data
}

export async function newAnnouncement(projectUUID, title, context) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/createAnnouncement", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "title": title,
            "context": context
        }
    })

    resp = await resp
    return resp.data
}

export async function getAnnouncementInfo(announcementUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getAnnouncementInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "announcementUUID": announcementUUID,
        }
    })

    resp = await resp
    return resp.data
}

export async function deleteAnnouncement(announcementUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteAnnouncement", null, {
        params:{
            "nid": nid,
            "token": token,
            "announcementUUID": announcementUUID
        }
    })

    resp = await resp
    return resp.data
}

// student
export async function getStudentData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getStudentData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })

    resp = await resp
    return resp.data
}