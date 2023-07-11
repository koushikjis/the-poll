import React from "react";

const PageHeader: React.FC<{header: string}> = ({header}) => {
    return (
        <div className="border-bottom border-4 border-primary">
        <h2>{header}</h2>
      </div>
    )
}

export default PageHeader