export const apiGroups = [
    {
        title: 'YouTube',
        apis: [
            {
                name: "Get Videos",
                method: "GET",
                description: "Uploads a video to the YouTube backend.",
                image: "/demo.png",
                endpoint: "/youtube/upload",
                input: `{
            "title": "My Video",
            "description": "This is a test upload.",
            "file": "<binary>"
          }`,
                output: `{
            "status": "success",
            "videoId": "abc123"
          }`,
                codeSamples: {
                    node: `fetch("https://api.learnsphere.com/youtube/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: "My Video",
              description: "This is a test upload",
              file: "base64StringHere"
            })
          })
          .then(res => res.json())
          .then(data => console.log(data));`,
                    axios: `axios.post("https://api.learnsphere.com/youtube/upload", {
            title: "My Video",
            description: "This is a test upload",
            file: "base64StringHere"
          }).then(res => {
            console.log(res.data);
          });`,
                    python: `import requests
          
          data = {
            "title": "My Video",
            "description": "This is a test upload",
            "file": "base64StringHere"
          }
          
          response = requests.post("https://api.learnsphere.com/youtube/upload", json=data)
          print(response.json())`
                }
            },
            {
                name: "Upload Video",
                method: "POST",
                description: "Uploads a video to the YouTube backend.",
                image: "/demo.png",
                endpoint: "/youtube/upload",
                input: `{
            "title": "My Video",
            "description": "This is a test upload.",
            "file": "<binary>"
          }`,
                output: `{
            "status": "success",
            "videoId": "abc123"
          }`,
                codeSamples: {
                    node: `fetch("https://api.learnsphere.com/youtube/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: "My Video",
              description: "This is a test upload",
              file: "base64StringHere"
            })
          })
          .then(res => res.json())
          .then(data => console.log(data));`,
                    axios: `axios.post("https://api.learnsphere.com/youtube/upload", {
            title: "My Video",
            description: "This is a test upload",
            file: "base64StringHere"
          }).then(res => {
            console.log(res.data);
          });`,
                    python: `import requests
          
          data = {
            "title": "My Video",
            "description": "This is a test upload",
            "file": "base64StringHere"
          }
          
          response = requests.post("https://api.learnsphere.com/youtube/upload", json=data)
          print(response.json())`
                }
            }

        ],
    },
    {
        title: 'MultiLLM',
        apis: [
            {
                name: "Ask Claude",
                method: "POST",
                description: "Uploads a video to the YouTube backend.",
                image: "/demo.png",
                endpoint: "/youtube/upload",
                input: `{
            "title": "My Video",
            "description": "This is a test upload.",
            "file": "<binary>"
          }`,
                output: `{
            "status": "success",
            "videoId": "abc123"
          }`,
                codeSamples: {
                    node: `fetch("https://api.learnsphere.com/youtube/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: "My Video",
              description: "This is a test upload",
              file: "base64StringHere"
            })
          })
          .then(res => res.json())
          .then(data => console.log(data));`,
                    axios: `axios.post("https://api.learnsphere.com/youtube/upload", {
            title: "My Video",
            description: "This is a test upload",
            file: "base64StringHere"
          }).then(res => {
            console.log(res.data);
          });`,
                    python: `import requests
          
          data = {
            "title": "My Video",
            "description": "This is a test upload",
            "file": "base64StringHere"
          }
          
          response = requests.post("https://api.learnsphere.com/youtube/upload", json=data)
          print(response.json())`
                }
            },
            {
                name: "Ask GPT",
                method: "POST",
                description: "Uploads a video to the YouTube backend.",
                image: "/demo.png",
                endpoint: "/youtube/upload",
                input: `{
            "title": "My Video",
            "description": "This is a test upload.",
            "file": "<binary>"
          }`,
                output: `{
            "status": "success",
            "videoId": "abc123"
          }`,
                codeSamples: {
                    node: `fetch("https://api.learnsphere.com/youtube/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              title: "My Video",
              description: "This is a test upload",
              file: "base64StringHere"
            })
          })
          .then(res => res.json())
          .then(data => console.log(data));`,
                    axios: `axios.post("https://api.learnsphere.com/youtube/upload", {
            title: "My Video",
            description: "This is a test upload",
            file: "base64StringHere"
          }).then(res => {
            console.log(res.data);
          });`,
                    python: `import requests
          
          data = {
            "title": "My Video",
            "description": "This is a test upload",
            "file": "base64StringHere"
          }
          
          response = requests.post("https://api.learnsphere.com/youtube/upload", json=data)
          print(response.json())`
                }
            },
        ],
    },
];