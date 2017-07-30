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
            signin: `v1/${prefix}/signin`,
            signout: `v1/${prefix}/signout`,
            signup: `v1/${prefix}/signup`,
            signdrop: `v1/${prefix}/signdrop`,

            list: `admin/${prefix}`,
            simple: `v1/${prefix}/simple`,
            detail: `admin/${prefix}/{id}/detail`,

            isExist: `v1/${prefix}/isexist`
        };
    },
    blackMembers: () => {
        const prefix = 'blackmembers';
        return {
            list: `admin/${prefix}`,
            detail: `admin/${prefix}/{id}/detail`
        };
    },
    contents: () => {
        const prefix = 'contents';
        return {
            list: `admin/${prefix}`,
            detail: `admin/${prefix}/{id}`
        };
    }
};
