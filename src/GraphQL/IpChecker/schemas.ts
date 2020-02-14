import { gql } from 'apollo-server-express';

const schemas = gql`
    input SSHParams {
        host: String!
        username: String!
        port: Int!
        privateKey: String!
        passphrase: String!
        password: String
    }

    type BlackListItem {
        rbl: String
        delist: String
    }

    type IPReport {
        ipAddress: String
        isPublic: Boolean
        ipVersion: Int
        isWhitelisted: Boolean
        abuseConfidenceScore: Int
        countryCode: String
        usageType: String
        isp: String
        domain: String
        totalReports: Int
        numDistinctUsers: Int
        lastReportedAt: String
        blacklistedOn: [BlackListItem]
    }

    type Query {
        checkIps(sshParams: SSHParams!, abuseipdbKey: String!, hetrixToolsKey: String): [IPReport]
    }
`;

export default schemas;
