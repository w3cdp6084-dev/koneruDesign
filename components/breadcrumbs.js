import * as Icon from 'react-feather';
export default function BreadCrumbs({ blog }) {
    if(!blog){ 
      return('')
    }
    
    return (
      <ol className="flex font-bold overflow-x-auto whitespace-nowrap full mx-auto" aria-label="breadcrumb">
        {blog.map(({ string, path }, index) => (
            <li className="flex items-center" key={index}>
              {blog.length - 1 !== index 
                ?
                <>
                  <a className="text-white text-xs underline" href={path}>{string}</a>
                  <Icon.ChevronRight className='text-xs text-white' />
                </>
                : <span className="text-xs text-white" aria-current="page">{string}</span>
              }
            </li>
        ))}
      </ol>
    );
  }