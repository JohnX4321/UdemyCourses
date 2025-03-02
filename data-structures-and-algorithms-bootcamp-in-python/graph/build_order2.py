# Build Order
# You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

def createGraph(projects, dependencies):
    projectGraph = {}
    for project in projects:
        projectGraph[project] = []
    for pairs in dependencies:
        projectGraph[pairs[0]].extend(pairs[1])
    return projectGraph

project = ['a', 'b', 'c', 'd', 'e', 'f']
dependencies = [('a','d'), ('f','b'), ('b','d'), ('f','a'), ('d','c')]
graph=createGraph(project,dependencies)
def get_projects_with_dependencies(graph):
    proj_with_dep=set()
    for p in graph:
        proj_with_dep=proj_with_dep.union(set(graph[p]))
    return proj_with_dep

def get_projects_wo_dependencies(projects_with,graph):
    project_wo_depen=set()
    for p in graph:
        if not p in projects_with:
            project_wo_depen.add(p)
    return project_wo_depen

notDependents=get_projects_wo_dependencies(dependencies,graph)

def findBuildOrder(projects, dependencies):
    bo=[]
    p_graph=createGraph(projects,dependencies)
    while p_graph:
        project_with_dep=get_projects_with_dependencies(p_graph)
        project_wo_dep=get_projects_wo_dependencies(project_with_dep,p_graph)
        if len(project_wo_dep)==0 and p_graph:
            raise ValueError('')
        for ip in project_wo_dep:
            bo.append(ip)
            del p_graph[ip]
    return bo