[build]
  publish = "public" # Directory for static files
  functions = "functions" # Directory for serverless functions

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/server/:splat"
  status = 200
