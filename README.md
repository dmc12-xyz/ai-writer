<div align="center">
    <h2><samp>AI Writer</samp></h2>
    <samp>short story generator</samp>
    <br/><br/>
    <a href="https://github.com/dmc12-xyz/ai-writer/tree/main/extension" title="download">
      <samp>Get the Extension</samp>
    </a>
</div>

-----------------

The tool generates short story based on keywords and phrases provided as 
an input. The response is generated using the OpenAI Apis.

### Details

- Model : text-davinci-003
- Temparature : 0.7
- Max tokens : 250
- Base prompt : "Write me a short story in as much details as possible based on the idea-"

### Steps
1. Get the OpenAI api key 
```
cp .env.example
# set the key 
```

2. Install dependencies and run
```
npm install
npm run dev
```

### Reference

* [Buildspace Project](https://buildspace.so/p/build-ai-writing-assistant-gpt3)
