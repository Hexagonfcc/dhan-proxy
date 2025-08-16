export default async function handler(req, res) {
  try {
    const { symbol } = req.query;  
    const stockSymbol = symbol || "TCS";

    const response = await fetch(`https://api.dhan.co/quotes/intraday?symbol=${stockSymbol}`, {

      headers: {
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzU3NDE3NjI4LCJ0b2tlbkNvbnN1bWVyVHlwZSI6IlNFTEYiLCJ3ZWJob29rVXJsIjoiIiwiZGhhbkNsaWVudElkIjoiMTEwODA3NDY0MCJ9.LZtgWMxLOVyLCntDNmnq7ZerC615vVZPBIrCfa4Rax5Kv2Xpcw0vfsDOhAmv7TzJA7aH0FJqj3qAmwXhoXJ9tQ"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
