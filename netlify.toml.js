[build]
  publish = "public"  # or your static folder
[[redirects]]
  from = "/api/coinbrain/:chain_id/:coin_address/trades"
  to = "https://api.coinbrain.com/public/:chain_id/coin/:coin_address/trades"
  status = 200
  force = true
