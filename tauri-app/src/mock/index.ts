import { MockConfig } from "vite-plugin-mock";

export default function (config: MockConfig) {
  return [
    {
      url: "/mock/test",
      method: "get",
      rawResponse: async (req, res) => {
        let reqbody = "";
        await new Promise((resolve) => {
          req.on("data", (chunk) => {
            reqbody += chunk;
          });
          req.on("end", () => resolve(undefined));
        });
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.end(`hello, ${reqbody}`);
      },
    },
  ];
}
