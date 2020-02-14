import IPChecker, { ISSHConnectionParams, IIPReport } from 'snac-tmp';

async function checkIps(
    parent: any,
    args: { sshParams: ISSHConnectionParams; abuseipdbKey: String; hetrixToolsKey?: String },
): Promise<IIPReport[]> {
    const ipChecker = new IPChecker();
    const { sshParams, abuseipdbKey, hetrixToolsKey } = args;
    return ipChecker.checkIpsFromSSH(sshParams, abuseipdbKey, hetrixToolsKey);
}

const queries = {
    checkIps,
};

export default queries;
