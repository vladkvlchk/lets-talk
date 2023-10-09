import React from "react";

type SettingsFolderType = {
  ico: string;
  icoColor: string;
  title: string;
  opened: boolean;
};

const SettingsFolder: React.FC<SettingsFolderType> = ({
  ico,
  icoColor,
  title,
  opened,
}) => {
  return (
    <div className="h-10 flex px-6 mt-2 items-center">
      <div
        className="h-8 w-8 p-1 rounded-xl m-3"
        style={{ backgroundColor: icoColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 80"
        >
          <g>
            <g>
              <g>
                <path d="M20.67,46.3h-2.61c-1.96,0-3.56-1.6-3.56-3.56c0-0.66-0.39-1.25-1-1.49l-0.13-0.06c-0.6-0.25-1.29-0.11-1.75,0.35     c-1.39,1.39-3.64,1.39-5.03,0.01l-1.85-1.84c-1.39-1.38-1.39-3.64-0.01-5.03c0.47-0.47,0.61-1.16,0.36-1.76l-0.06-0.14     c-0.25-0.6-0.83-0.99-1.49-0.99C1.6,31.79,0,30.2,0,28.23v-2.6c0-1.96,1.6-3.56,3.56-3.56c0.66,0,1.25-0.39,1.49-1l0.05-0.13     c0.25-0.61,0.12-1.29-0.35-1.76c-1.39-1.4-1.39-3.65,0-5.04l1.84-1.84c1.39-1.38,3.64-1.38,5.03,0c0.47,0.47,1.16,0.6,1.76,0.35     l0.13-0.06c0.6-0.24,0.99-0.83,0.99-1.49c0-1.96,1.6-3.56,3.56-3.56h2.61c1.96,0,3.56,1.6,3.56,3.56c0,0.66,0.39,1.25,1,1.49     l0.14,0.06c0.59,0.25,1.28,0.11,1.75-0.35c0.01-0.01,0.01-0.01,0.02-0.02c1.35-1.33,3.67-1.32,5.01,0.02l1.84,1.84     c1.38,1.38,1.39,3.64,0,5.03c-0.47,0.47-0.61,1.16-0.36,1.76l0.06,0.14c0.25,0.61,0.83,1,1.49,1c1.96,0,3.56,1.6,3.56,3.56v2.6     c0,1.96-1.6,3.56-3.56,3.56c-0.66,0-1.24,0.39-1.49,1l-0.05,0.13c-0.25,0.6-0.11,1.29,0.35,1.75c1.39,1.4,1.39,3.65,0,5.03     l-1.84,1.84c-1.34,1.34-3.67,1.35-5.01,0.02c-0.01-0.01-0.01-0.01-0.02-0.02c-0.46-0.46-1.15-0.6-1.75-0.35     c0,0-0.12,0.05-0.13,0.05c-0.61,0.25-1,0.83-1,1.49C24.23,44.71,22.63,46.3,20.67,46.3z M12.76,39.13c0.46,0,0.93,0.09,1.37,0.28     l0.12,0.05c1.34,0.54,2.2,1.83,2.2,3.28c0,0.9,0.73,1.62,1.62,1.62h2.61c0.89,0,1.62-0.73,1.62-1.62c0-1.46,0.87-2.75,2.21-3.29     l0.49,0.85l-0.37-0.89c1.32-0.55,2.84-0.26,3.86,0.75c0.01,0.01,0.01,0.01,0.02,0.02c0.63,0.63,1.66,0.63,2.29,0l1.84-1.84     c0.63-0.63,0.63-1.65,0-2.29c-1.03-1.03-1.33-2.55-0.77-3.88l0.05-0.12c0,0,0,0,0,0c0.54-1.34,1.83-2.21,3.29-2.21     c0.89,0,1.62-0.73,1.62-1.62v-2.6c0-0.89-0.73-1.62-1.62-1.62c-1.45,0-2.74-0.87-3.29-2.21l-0.05-0.12     c-0.55-1.33-0.25-2.84,0.77-3.87c0.64-0.64,0.64-1.66,0.01-2.29l-1.84-1.84c-0.63-0.63-1.66-0.63-2.29,0     c-0.01,0.01-0.01,0.01-0.02,0.02c-1.02,1.01-2.53,1.3-3.86,0.75l0.28-0.93l-0.4,0.89c-1.34-0.54-2.2-1.83-2.2-3.28     c0-0.9-0.73-1.62-1.62-1.62h-2.61c-0.89,0-1.62,0.73-1.62,1.62c0,1.45-0.87,2.74-2.2,3.29l-0.11,0.04     c-1.34,0.56-2.86,0.26-3.88-0.77c-0.63-0.63-1.66-0.63-2.29,0l-1.84,1.84c-0.63,0.63-0.63,1.65,0,2.29     c1.03,1.03,1.33,2.55,0.77,3.88l-0.05,0.11c-0.55,1.34-1.84,2.21-3.29,2.21c-0.9,0-1.62,0.73-1.62,1.62v2.6     c0,0.89,0.73,1.62,1.62,1.62c1.45,0,2.74,0.87,3.29,2.2l0.05,0.12c0.56,1.33,0.26,2.85-0.76,3.87c-0.64,0.64-0.64,1.67-0.01,2.3     l1.84,1.84c0.63,0.63,1.66,0.63,2.29,0C10.94,39.5,11.84,39.13,12.76,39.13z" />
              </g>
              <g>
                <path d="M19.36,36c-5,0-9.06-4.07-9.06-9.06s4.07-9.06,9.06-9.06s9.06,4.07,9.06,9.06S24.36,36,19.36,36z M19.36,19.81     c-3.93,0-7.12,3.2-7.12,7.12s3.2,7.12,7.12,7.12s7.12-3.2,7.12-7.12S23.29,19.81,19.36,19.81z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M50.86,56.43H49c-1.55,0-2.81-1.26-2.81-2.81c0-0.36-0.21-0.67-0.54-0.8c0,0-0.09-0.04-0.09-0.04     c-0.33-0.13-0.7-0.06-0.95,0.19c-1.1,1.1-2.88,1.1-3.98,0l-1.31-1.31c-1.1-1.1-1.1-2.88,0-3.98c0.26-0.26,0.33-0.63,0.19-0.95     c0,0-0.04-0.1-0.04-0.1c-0.13-0.32-0.45-0.53-0.8-0.53c-1.55,0-2.82-1.26-2.82-2.81v-1.85c0-1.55,1.26-2.81,2.81-2.81     c0.36,0,0.67-0.21,0.81-0.54c0,0,0.04-0.09,0.04-0.1c0.14-0.32,0.06-0.7-0.19-0.95c-1.1-1.1-1.1-2.89,0-3.98l1.31-1.31     c1.1-1.1,2.88-1.09,3.98,0c0.25,0.25,0.62,0.33,0.95,0.19c0,0,0.09-0.04,0.09-0.04c0.33-0.13,0.54-0.45,0.54-0.8     c0-1.55,1.26-2.82,2.81-2.82h1.86c1.55,0,2.81,1.26,2.81,2.81c0,0.36,0.21,0.67,0.54,0.81c0,0,0.09,0.04,0.09,0.04     c0.32,0.13,0.7,0.06,0.95-0.19c1.1-1.1,2.88-1.1,3.98,0l1.31,1.31c1.1,1.1,1.1,2.88,0,3.97c-0.25,0.26-0.33,0.63-0.19,0.95     c0,0,0.04,0.1,0.04,0.1c0.13,0.33,0.45,0.54,0.8,0.54c1.55,0,2.81,1.26,2.81,2.81v1.85c0,1.55-1.26,2.81-2.81,2.81     c-0.36,0-0.67,0.21-0.8,0.54c0,0,0,0,0,0.01l-0.9-0.37l0.89,0.39c-0.17,0.4-0.09,0.77,0.16,1.02c1.1,1.1,1.1,2.89,0,3.98     l-1.31,1.31c-1.1,1.1-2.88,1.1-3.98,0c-0.25-0.25-0.62-0.33-0.95-0.19c0,0-0.09,0.04-0.09,0.04c-0.33,0.13-0.54,0.45-0.54,0.8     C53.67,55.17,52.41,56.43,50.86,56.43z M45.22,50.76c0.36,0,0.73,0.07,1.08,0.22c1.14,0.46,1.82,1.48,1.82,2.63     c0,0.48,0.39,0.88,0.87,0.88h1.86c0.48,0,0.87-0.39,0.87-0.87c0-1.15,0.69-2.17,1.75-2.6c1.13-0.47,2.33-0.23,3.14,0.57     c0.34,0.34,0.9,0.34,1.24,0l1.31-1.31c0.34-0.34,0.34-0.89,0-1.23c-0.81-0.81-1.05-2.01-0.61-3.06l0.93,0.28l-0.9-0.36     c0.43-1.06,1.45-1.75,2.6-1.75c0.48,0,0.87-0.39,0.87-0.87v-1.85c0-0.48-0.39-0.87-0.87-0.87c-1.15,0-2.17-0.69-2.6-1.75     c-0.47-1.13-0.23-2.33,0.57-3.14c0.35-0.35,0.35-0.9,0.01-1.24l-1.31-1.31c-0.34-0.34-0.89-0.34-1.24,0     c-0.81,0.81-2.02,1.05-3.07,0.61c-1.14-0.46-1.82-1.48-1.82-2.63c0-0.48-0.39-0.88-0.87-0.88H49c-0.48,0-0.87,0.39-0.87,0.87     c0,1.15-0.68,2.17-1.74,2.6c-1.13,0.47-2.33,0.23-3.14-0.57c-0.34-0.34-0.9-0.34-1.24,0l-1.31,1.31c-0.34,0.34-0.34,0.89,0,1.23     c0.81,0.82,1.05,2.02,0.61,3.07c-0.47,1.14-1.49,1.82-2.63,1.82c-0.48,0-0.88,0.39-0.88,0.87v1.85c0,0.48,0.39,0.87,0.87,0.87     c1.15,0,2.17,0.68,2.6,1.74c0.47,1.13,0.24,2.33-0.57,3.14c-0.35,0.35-0.35,0.9-0.01,1.24L42,51.59c0.34,0.34,0.89,0.34,1.23,0     C43.77,51.05,44.49,50.76,45.22,50.76z" />
              </g>
              <g>
                <path d="M49.92,49.09c-3.71,0-6.74-3.02-6.74-6.74c0-3.71,3.02-6.74,6.74-6.74c3.71,0,6.74,3.02,6.74,6.74     C56.66,46.07,53.64,49.09,49.92,49.09z M49.92,37.55c-2.65,0-4.8,2.15-4.8,4.8s2.15,4.8,4.8,4.8s4.8-2.15,4.8-4.8     S52.57,37.55,49.92,37.55z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="text-white">{title}</div>
    </div>
  );
};

export default SettingsFolder;
