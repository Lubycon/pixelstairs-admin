/*
    @name: api.constant.js
    @desc: Pixelstairs Admin API 목록
    @author: Evan Moon
    @created_at: 2017.07.22
*/

export const API_LIST = {
    users: () => {
        const prefix = 'members';
        return {
            signin: `${prefix}/signin`,
            signout: `${prefix}/signout`,
            signup: `${prefix}/signup`,
            signdrop: `${prefix}/signdrop`,

            list: `${prefix}`,
            me: `${prefix}/me`,
            info: `${prefix}/{id}`,

            isExist: `${prefix}/isexist`,
            refreshToken: `${prefix}/token/refresh`
        };
    },
    blackMembers: () => {
        const prefix = 'blackmembers';
        return {
            list: `${prefix}`,
            detail: `${prefix}/{id}/detail`
        };
    },
    contents: () => {
        const prefix = 'contents';
        return {
            list: `${prefix}`,
            detail: `${prefix}/{id}`
        };
    }
};
