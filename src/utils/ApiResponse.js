class ApiResponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode=statusCode   // HTTP status (e.g., 200, 201)
        this.data=data
        this.message=message
        this.success=statusCode < 400   // true if success, false if client/server error

    }
}


export{ApiResponse}