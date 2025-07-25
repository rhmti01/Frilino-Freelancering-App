import React from "react";
import { useProject } from "../features/project/useProject";
import Loading from "../ui/Loading";
import ProposalHeader from "../features/project/ProposalHeader";
import ProposalTable from "../features/project/ProposalTable";

function Project() {
  const { project, isLoading } = useProject();

  return (
    <div className=" w-full flex justify-center items-start mt-10  ">
      {isLoading ? (
        <Loading mt="mt-14" size="md" />
      ) : (
        <div className="w-full" >
          <ProposalHeader project={project} />
          <ProposalTable proposals={project.proposals} />
        </div>
      )}
    </div>
  );
}

export default Project;
