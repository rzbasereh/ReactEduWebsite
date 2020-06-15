import * as React from 'react';
import Icon from "@ant-design/icons/es";

const DashboardSvg = () => (
    <svg className="bi bi-columns-gap" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
    </svg>
);
const DashboardIcon = props => <Icon component={DashboardSvg} {...props} />;


const ClassSvg = () => (
    <svg className="bi bi-display" width="1em" height="1em" viewBox="0 0 16 16"
         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>
        <path fillRule="evenodd"
              d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
    </svg>
);
const ClassIcon = props => <Icon component={ClassSvg} {...props} />;


const ReportSvg = () => (
    <svg className="bi bi-calendar" width="1em" height="1em" viewBox="0 0 16 16"
         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
        <path fillRule="evenodd"
              d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
    </svg>
);
const ReportIcon = props => <Icon component={ReportSvg} {...props} />;


const ExamSvg = () => (
    <svg className="bi bi-check-square" width="1em"
         height="1em" viewBox="0 0 16 16"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path fillRule="evenodd"
              d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
    </svg>
);
const ExamIcon = props => <Icon component={ExamSvg} {...props} />;


const ChatSvg = () => (
    <svg className="bi bi-chat-square" width="1em" height="1em"
         viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    </svg>
);
const ChatIcon = props => <Icon component={ChatSvg} {...props} />;


const OpenSidebarSvg = () => (
    <svg className="bi bi-filter-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
    </svg>
);
const OpenSidebarIcon = props => <Icon component={OpenSidebarSvg} {...props} />;


const EnvelopeSvg = () => (
    <svg className="bi bi-envelope" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
        <path
            d="M.05 3.555C.017 3.698 0 3.847 0 4v.697l5.803 3.546L0 11.801V12c0 .306.069.596.192.856l6.57-4.027L8 9.586l1.239-.757 6.57 4.027c.122-.26.191-.55.191-.856v-.2l-5.803-3.557L16 4.697V4c0-.153-.017-.302-.05-.445L8 8.414.05 3.555z"/>
    </svg>
);
const EnvelopeIcon = props => <Icon component={EnvelopeSvg} {...props} />;


const BellSvg = () => (
    <svg className="bi bi-bell" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
        <path fillRule="evenodd"
              d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
    </svg>
);
const BellIcon = props => <Icon component={BellSvg} {...props} />;


const ChevronDownSvg = () => (
    <svg className="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
);
const ChevronDownIcon = props => <Icon component={ChevronDownSvg} {...props} />;


const PlusSvg = () => (
    <svg className="bi bi-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
        <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
    </svg>
);
const PlusIcon = props => <Icon component={PlusSvg} {...props}/>;


const UserSvg = () => (
    <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
    </svg>
);
const UserIcon = props => <Icon component={UserSvg} {...props}/>;


const MenuSvg = () => (
    <svg className="bi bi-list-ul" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    </svg>
);
const MenuIcon = props => <Icon component={MenuSvg} {...props}/>;


const HouseSvg = () => (
    <svg className="bi bi-house-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
    </svg>
);
const HouseIcon = props => <Icon component={HouseSvg} {...props}/>;


const ChevronLeftSvg = () => (
    <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
);
const ChevronLeftIcon = props => <Icon component={ChevronLeftSvg} {...props} />;


const DotSvg = () => (
    <svg className="bi bi-dot" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
    </svg>
);
const DotIcon = props => <Icon component={DotSvg} {...props}/>;


const ThreeDotsSvg = () => (
    <svg className="bi bi-three-dots" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    </svg>
);
const ThreeDotIcon = props => <Icon component={ThreeDotsSvg} {...props}/>;


const ChartSvg = () => (
    <svg className="bi bi-pie-chart" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fillRule="evenodd" d="M7.5 7.793V1h1v6.5H15v1H8.207l-4.853 4.854-.708-.708L7.5 7.793z"/>
    </svg>
);
const ChartIcon = props => <Icon component={ChartSvg} {...props}/>;


export {
    DashboardIcon,
    ClassIcon,
    ReportIcon,
    ExamIcon,
    ChatIcon,
    OpenSidebarIcon,
    EnvelopeIcon,
    BellIcon,
    ChevronDownIcon,
    PlusIcon,
    UserIcon,
    MenuIcon,
    HouseIcon,
    ChevronLeftIcon,
    DotIcon,
    ThreeDotIcon,
    ChartIcon
};