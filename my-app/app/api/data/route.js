export async function GET() {
    // 遅延を再現（ネットワーク遅延）
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const data = {
      message: "Hello from API!",
      time: new Date().toLocaleTimeString(),
    };
  
    return Response.json(data);
  }
  