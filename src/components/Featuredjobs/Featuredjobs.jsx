import FeaturedjobsCard from '../FeaturedjobsCard/FeaturedjobsCard';
import { useLoaderData } from 'react-router-dom';

const Featuredjobs = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='text-center mt-16 mb-8'>
                <h1 className='font-bold text-4xl'>Featured Jobs</h1>
                <p className='py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Featured Card data will come here */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {
                    data.map(featurejob=>
                    <FeaturedjobsCard
                    key={featurejob.id}
                    featurejob={featurejob}
                    />)
                }
            </div>
        </div>
    );
}

export default Featuredjobs;
