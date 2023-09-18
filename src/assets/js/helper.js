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

    return resp.data.timeout
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


    return resp.data
}

export async function deleteAnnouncement(projectUUID, announcementUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteAnnouncement", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "announcementUUID": announcementUUID
        }
    })


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


    return resp.data
}

export async function getStudentList(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getStudentList", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function newStudent(studentNID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/newStudent", null, {
        params:{
            "nid": nid,
            "token": token,
            "studentNID": studentNID,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function getStudentInfo(studentNID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getStudentInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "studentNID": studentNID
        }
    })


    return resp.data
}

export async function deleteStudent(studentNID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteStudent", null, {
        params:{
            "nid": nid,
            "token": token,
            "studentNID": studentNID,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

// teacher
export async function getTeacherData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getTeacherData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function getTeacherList(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getTeacherList", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })

    return resp.data
}

export async function newTeacher(teacherNID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/newTeacher", null, {
        params:{
            "nid": nid,
            "token": token,
            "teacherNID": teacherNID,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function getTeacherInfo(teacherNID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getTeacherInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "teacherNID": teacherNID
        }
    })


    return resp.data
}

export async function deleteTeacher(teacherNID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteTeacher", null, {
        params:{
            "nid": nid,
            "token": token,
            "teacherNID": teacherNID,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

// groups
export async function getGroupData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getGroupData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function getGroupInfo(groupUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getGroupInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "groupUUID": groupUUID
        }
    })


    return resp.data
}

export async function getGroupTeacherData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getGroupTeacherData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })

    return resp.data
}

export async function getGroupStudentData(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getGroupStudentData", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })


    return resp.data
}

export async function newGroup(projectUUID, member, group_name, GID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/newGroup", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "group_name": group_name,
            "member": member,
            "GID": GID
        }
    })

    return resp.data
}

export async function getGroupToken() {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getGroupToken", null, {
        params:{
            "nid": nid,
            "token": token,
        }
    })
    return resp.data
}

export async function deleteGroup(GID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteGroup", null, {
        params:{
            "nid": nid,
            "token": token,
            "groupUUID": GID,
            "projectUUID": projectUUID
        }
    })
    return resp.data
}

export async function getAssignment(projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getAssignment", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID
        }
    })
    return resp.data
}

export async function deleteAssignment(assignmentUUID, projectUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteAssignment", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "assignmentUUID": assignmentUUID
        }
    })
    return resp.data
}

export async function getAssignmentInfo(projectUUID, assignmentUUID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/getAssignmentInfo", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "assignmentUUID": assignmentUUID
        }
    })
    return resp.data
}

export async function downloadAssignment(projectUUID ,taskUUID, fileID) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    const resp = await axios.post("/downloadAssignment", null, {
        params:{
            "nid": nid,
            "token": token,
            "taskUUID": taskUUID,
            "fileID": fileID
        },
        responseType: "blob",
    })
    return resp.data
}

export async function markAssignmentScore(taskUUID, projectUUID, marks) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/markAssignmentScore", null, {
        params:{
            "nid": nid,
            "token": token,
            "taskUUID": taskUUID,
            "projectUUID": projectUUID,
            "marks": marks
        }
    })
    return resp.data
}

export async function newAssignment(projectUUID, gid, name, weight, date) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/newAssignment", null, {
        params:{
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "gid": gid,
            "name": name,
            "weight": weight,
            "date": date,
        }
    })
    return resp.data
}

export async function uploadAssignment(projectUUID, taskUUID, filename, file_) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let formData = new FormData();
    formData.append("file_", file_);

    let resp = await axios.post("/uploadAssignment", formData, {
        params: {
            "nid": nid,
            "token": token,
            "projectUUID": projectUUID,
            "taskUUID": taskUUID,
            "filename": filename,
        }
    })
    return resp.data
}

export async function deleteAssignmentItem(taskUUID, fileUUID, author) {
    const nid = localStorage["nid"]
    const token = localStorage["token"]

    let resp = await axios.post("/deleteAssignmentItem", null, {
        params: {
            "nid": nid,
            "token": token,
            "taskID": taskUUID,
            "fileID": fileUUID,
            "author": author
        }
    })
    return resp.data
}