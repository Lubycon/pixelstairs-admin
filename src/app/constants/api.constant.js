/*
    @name: api.constant.js
    @desc: Pixelstairs Admin API 목록
    @author: Evan Moon
    @created_at: 2017.07.22
*/

export const API_LIST = {
    members: () => {
        const prefix = 'members';
        return {
            signin: `${prefix}/signin`,
            signout: `${prefix}/signout`,
            signup: `${prefix}/signup`,
            signdrop: `${prefix}/signdrop`,

            list: `${prefix}`,
            simple: `${prefix}/simple`,
            detail: `${prefix}/{id}/detail`,

            isExist: `${prefix}/isexist`
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
