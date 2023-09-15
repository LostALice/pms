# pms

permission level:
    lv.0 = no access
    lv.1 = user
    lv.2 = teacher user
    lv.3 = admin

1.  student
    - view
        - subject
            - project
                - announcement
                - student
                - assignment
                - teacher
                - group
    - create
        - announcement
    - edit
        - announcement `is_owner`
        - profile
2.  teacher
    - view
        - student.view
    - create
        - student.create
        - project
        - subject
        - assignment
        - group
    - add
        - student
        - teacher
        - group
    - edit
        - student.edit
        - group
        - student
        - assignment
        - teacher
3.  admin
    - view
        - teacher.view
        - system log
    - create
        - teacher.create
    - add
        - teacher.add
    - edit
        - teacher.edit

todo:
    all input warning => border-danger