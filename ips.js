const awsIpRanges = require('aws-ip-ranges');
const CIDR = require('cidr-js');

let counter = 0;
let cidr = new CIDR();

awsIpRanges()
    .then(ranges => {
        ranges.forEach(element => {
            const ips = cidr.list(element);
            counter += ips.length;
            console.log(`There are ${counter} Amazon IPs`);
        });
        console.log(`There are ${counter} Amazon IPs`);
    })
