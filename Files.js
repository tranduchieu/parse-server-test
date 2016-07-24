// Config https://github.com/ParsePlatform/parse-server/wiki/Configuring-File-Adapters#configuring-s3adapter
import Parse from 'parse/node';

var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
var file = new Parse.File("myfile.txt", { base64: base64 });
