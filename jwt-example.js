const jwt = require("jsonwebtoken")
jwt.sign({sub: "Jane"}, "JWT-SECRET")
jwt.sign({sub: "Jane", message: "hello world"}, "JWT-SECRET")
jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5NzYxMDI0fQ.TrkkBhmERZDY8evKAukxJATYiFl8UUcOZ7YcmzEEhCk", "JWT-SECRET")
jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5NzYxMDI0fQ.TrkkBhmERZDY8evKAukxJATYiFl8UUcOZ7YcmzEEhCk")