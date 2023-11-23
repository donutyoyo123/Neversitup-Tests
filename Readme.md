
1. Sensor ตรวจจับสินค้า จะส่งข้อมูลเข้า database ผ่าน Service API
        โดยมี Database Design 
            itemID : int
            itemName : string
            amount : int
            itemHeight : double
            currentDistance : double
            aleartThrehold : int
            aleartStatus:enum (LOW,NORMAL)

2. Web Application จะขอ ข้อมูลผ่าน Service API และโชข้อมูล itemName,amount,aleartStatus และตั้งค่า
        - ตั้งค่า Name
        - ตั้งค่า Threshold
        - ตั้งค่า Height or Weight
            - เพิ่ม-ลด สินค้าในสต็อกเก็บสินค้า
            - แสดงสถานะ 
                - แสดงสถานะปกติ (วงกลมสีเขียว)
                - แสดงสถานะผิดปกติ (วงกลมสีแดง)
