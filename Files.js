// Config https://github.com/ParsePlatform/parse-server/wiki/Configuring-File-Adapters#configuring-s3adapter
import Parse from 'parse/node';

var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
var file = new Parse.File("0-gEuJpS4OTdNcEMhR.jpg", {base64: base64});
file.save()
.then(console.log)
.catch(console.error);
