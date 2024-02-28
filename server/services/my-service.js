'use strict';

/**
 * utils service
 */

module.exports = {
    async getCloudflareStatus(ctx, strapi) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.CLOUDFLARE_TOKEN}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        let response = {
            status: 'idle',
            started_on: null
        }

        let res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/luz-web/deployments`, requestOptions)
        res = await res.json()

        if(res.result[0].latest_stage.ended_on === null) {
            response.status = 'building'
            response.started_on = res.result[0].latest_stage.started_on
        }
        return response
    },
    async getCloudflareRawStatus(ctx, strapi) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${process.env.CLOUDFLARE_TOKEN}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        let res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/luz-web/deployments`, requestOptions)
        res = await res.json()
        return res
    }
}
