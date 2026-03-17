import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // API routes first
    // Contact form submission
    "/api/contact": {
      async POST(req) {
        try {
          const body = await req.json();

          // In a real application, you would:
          // 1. Validate the input
          // 2. Store in a database
          // 3. Send an email notification

          // For now, just simulate saving the data
          console.log('Contact form submitted:', body);

          return Response.json({
            success: true,
            message: "Message received. We'll contact you soon!"
          });
        } catch (error) {
          console.error('Error processing contact form:', error);
          return Response.json({
            success: false,
            message: "Failed to process your message. Please try again."
          }, { status: 500 });
        }
      }
    },

    // Get case studies
    "/api/cases": {
      async GET(req) {
        // In a real application, this would fetch from a database
        const cases = [
          {
            id: 1,
            title: '城市交通优化',
            category: '地理',
            description: '为某大城市开发的AI系统，将交通拥堵减少了30%',
            results: ['减少30%拥堵', '节省25%通勤时间', '降低20%排放'],
            technologies: ['地理数据分析', '实时处理', '机器学习']
          },
          {
            id: 2,
            title: '物流路线优化',
            category: 'AI',
            description: 'AI代理优化物流公司的配送路线，降低成本并提高效率',
            results: ['降低20%成本', '提高40%效率', '减少15%碳排放'],
            technologies: ['AI代理', '优化算法', '地理映射']
          },
          {
            id: 3,
            title: '房地产分析平台',
            category: '企业',
            description: '为房地产开发商构建的位置智能平台',
            results: ['提高50%选址准确性', '减少45%调研时间', '增加35%投资回报'],
            technologies: ['空间分析', '预测建模', '数据可视化']
          }
        ];

        return Response.json({ cases });
      }
    },

    // Get case study by ID
    "/api/cases/:id": {
      async GET(req) {
        const id = req.params.id;
        // In a real application, this would fetch from a database
        const cases = [
          {
            id: 1,
            title: '城市交通优化',
            category: '地理',
            description: '为某大城市开发的AI系统，将交通拥堵减少了30%',
            results: ['减少30%拥堵', '节省25%通勤时间', '降低20%排放'],
            technologies: ['地理数据分析', '实时处理', '机器学习'],
            detailedDescription: '该项目旨在解决特大城市日益严重的交通拥堵问题。我们部署了AI代理系统来实时分析交通流量数据，预测拥堵情况，并提供最优路线建议。'
          },
          {
            id: 2,
            title: '物流路线优化',
            category: 'AI',
            description: 'AI代理优化物流公司的配送路线，降低成本并提高效率',
            results: ['降低20%成本', '提高40%效率', '减少15%碳排放'],
            technologies: ['AI代理', '优化算法', '地理映射'],
            detailedDescription: '通过AI代理系统，物流公司能够动态优化配送路线，考虑实时交通、天气和货物优先级等因素。'
          },
          {
            id: 3,
            title: '房地产分析平台',
            category: '企业',
            description: '为房地产开发商构建的位置智能平台',
            results: ['提高50%选址准确性', '减少45%调研时间', '增加35%投资回报'],
            technologies: ['空间分析', '预测建模', '数据可视化'],
            detailedDescription: '该平台结合地理数据、人口统计、经济指标等多维信息，帮助房地产投资者做出更明智的决策。'
          }
        ];

        const caseStudy = cases.find(c => c.id === parseInt(id as string));

        if (!caseStudy) {
          return Response.json({ error: "Case study not found" }, { status: 404 });
        }

        return Response.json({ case: caseStudy });
      }
    },

    // Newsletter signup
    "/api/newsletter": {
      async POST(req) {
        try {
          const body = await req.json();

          // In a real application, you would:
          // 1. Validate the email address
          // 2. Store in a newsletter database/service

          console.log('Newsletter signup:', body.email);

          return Response.json({
            success: true,
            message: "Thank you for subscribing to our newsletter!"
          });
        } catch (error) {
          console.error('Error processing newsletter signup:', error);
          return Response.json({
            success: false,
            message: "Failed to subscribe. Please try again."
          }, { status: 500 });
        }
      }
    },

    // Static file routes
    "/feishu.png": async () => {
      try {
        const file = Bun.file("./src/public/feishu.png");
        const exists = await file.exists();

        if (exists) {
          // Get file info to check if it's a real image
          const stat = await file.stat();

          if (stat.size > 0) {
            // Read the first few bytes to check if it's a valid PNG
            const buffer = await file.arrayBuffer();
            const bytes = new Uint8Array(buffer.slice(0, 8));
            const header = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');

            // PNG file header is 89 50 4e 47 0d 0a 1a 0a
            if (header === '89504e470d0a1a0a') {
              return new Response(file);
            }
          }
        }

        // Return an SVG placeholder when file doesn't exist or is not a valid PNG
        const qrSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
            <rect width="100" height="100" fill="#f0f0f0"/>
            <rect x="10" y="10" width="20" height="20" fill="#000"/>
            <rect x="70" y="10" width="20" height="20" fill="#000"/>
            <rect x="10" y="70" width="20" height="20" fill="#000"/>
            <rect x="20" y="20" width="10" height="10" fill="#000"/>
            <rect x="40" y="20" width="10" height="10" fill="#000"/>
            <rect x="60" y="20" width="10" height="10" fill="#000"/>
            <rect x="30" y="30" width="10" height="10" fill="#000"/>
            <rect x="50" y="30" width="10" height="10" fill="#000"/>
            <rect x="70" y="30" width="10" height="10" fill="#000"/>
            <rect x="20" y="40" width="10" height="10" fill="#000"/>
            <rect x="40" y="40" width="10" height="10" fill="#000"/>
            <rect x="60" y="40" width="10" height="10" fill="#000"/>
            <rect x="30" y="50" width="10" height="10" fill="#000"/>
            <rect x="50" y="50" width="10" height="10" fill="#000"/>
            <rect x="70" y="50" width="10" height="10" fill="#000"/>
            <rect x="20" y="60" width="10" height="10" fill="#000"/>
            <rect x="40" y="60" width="10" height="10" fill="#000"/>
            <rect x="60" y="60" width="10" height="10" fill="#000"/>
            <rect x="30" y="70" width="10" height="10" fill="#000"/>
            <rect x="50" y="70" width="10" height="10" fill="#000"/>
            <rect x="70" y="70" width="10" height="10" fill="#000"/>
            <rect x="40" y="40" width="10" height="10" fill="#000"/>
            <rect x="60" y="40" width="10" height="10" fill="#000"/>
            <rect x="40" y="60" width="10" height="10" fill="#000"/>
            <rect x="60" y="60" width="10" height="10" fill="#000"/>
            <text x="50" y="90" font-size="8" text-anchor="middle" fill="#666">FEISHU QR</text>
          </svg>
        `;

        return new Response(qrSvg, {
          headers: {
            'Content-Type': 'image/svg+xml',
          }
        });
      } catch (error) {
        console.error('Error serving feishu.png:', error);
        // Return a simple SVG placeholder on error
        const qrSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200">
            <rect width="100" height="100" fill="#f0f0f0"/>
            <rect x="10" y="10" width="20" height="20" fill="#000"/>
            <rect x="70" y="10" width="20" height="20" fill="#000"/>
            <rect x="10" y="70" width="20" height="20" fill="#000"/>
            <rect x="20" y="20" width="10" height="10" fill="#000"/>
            <rect x="40" y="20" width="10" height="10" fill="#000"/>
            <rect x="60" y="20" width="10" height="10" fill="#000"/>
            <rect x="30" y="30" width="10" height="10" fill="#000"/>
            <rect x="50" y="30" width="10" height="10" fill="#000"/>
            <rect x="70" y="30" width="10" height="10" fill="#000"/>
            <rect x="20" y="40" width="10" height="10" fill="#000"/>
            <rect x="40" y="40" width="10" height="10" fill="#000"/>
            <rect x="60" y="40" width="10" height="10" fill="#000"/>
            <rect x="30" y="50" width="10" height="10" fill="#000"/>
            <rect x="50" y="50" width="10" height="10" fill="#000"/>
            <rect x="70" y="50" width="10" height="10" fill="#000"/>
            <rect x="20" y="60" width="10" height="10" fill="#000"/>
            <rect x="40" y="60" width="10" height="10" fill="#000"/>
            <rect x="60" y="60" width="10" height="10" fill="#000"/>
            <rect x="30" y="70" width="10" height="10" fill="#000"/>
            <rect x="50" y="70" width="10" height="10" fill="#000"/>
            <rect x="70" y="70" width="10" height="10" fill="#000"/>
            <rect x="40" y="40" width="10" height="10" fill="#000"/>
            <rect x="60" y="40" width="10" height="10" fill="#000"/>
            <rect x="40" y="60" width="10" height="10" fill="#000"/>
            <rect x="60" y="60" width="10" height="10" fill="#000"/>
            <text x="50" y="90" font-size="8" text-anchor="middle" fill="#666">FEISHU QR</text>
          </svg>
        `;

        return new Response(qrSvg, {
          headers: {
            'Content-Type': 'image/svg+xml',
          }
        });
      }
    },

    // Serve llm.txt file from public directory
    "/llm.txt": async () => {
      try {
        const file = Bun.file("./src/public/llm.txt");
        const exists = await file.exists();

        if (exists) {
          return new Response(file, {
            headers: {
              'Content-Type': 'text/plain',
            }
          });
        } else {
          return new Response('File not found', { status: 404 });
        }
      } catch (error) {
        console.error('Error serving llm.txt:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    },

    // Serve robots.txt file from public directory
    "/robots.txt": async () => {
      try {
        const file = Bun.file("./src/public/robots.txt");
        const exists = await file.exists();

        if (exists) {
          return new Response(file, {
            headers: {
              'Content-Type': 'text/plain',
            }
          });
        } else {
          return new Response('File not found', { status: 404 });
        }
      } catch (error) {
        console.error('Error serving robots.txt:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    },

    // Serve sitemap.xml file from public directory
    "/sitemap.xml": async () => {
      try {
        const file = Bun.file("./src/public/sitemap.xml");
        const exists = await file.exists();

        if (exists) {
          return new Response(file, {
            headers: {
              'Content-Type': 'application/xml',
            }
          });
        } else {
          return new Response('File not found', { status: 404 });
        }
      } catch (error) {
        console.error('Error serving sitemap.xml:', error);
        return new Response('Internal Server Error', { status: 500 });
      }
    },

    // Serve index.html for other routes that don't match static files
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
