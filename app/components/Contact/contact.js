import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requestType: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        requestType: '',
        message: ''
    });
    const [sent, setSent] = useState(false);

    const requestTypes = [
        { value: 'information', label: 'Demande d\'information' },
        { value: 'support', label: 'Support technique' }
    ];

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: '',
            email: '',
            requestType: '',
            message: ''
        };

        // Validation du nom
        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
            isValid = false;
        } else if (formData.name.length < 2) {
            newErrors.name = 'Le nom doit contenir au moins 2 caractères';
            isValid = false;
        }

        // Validation de l'email
        if (!formData.email.trim()) {
            newErrors.email = "L'email est requis";
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "L'email n'est pas valide";
            isValid = false;
        }

        // Validation du type de demande
        if (!formData.requestType) {
            newErrors.requestType = 'Veuillez sélectionner un type de demande';
            isValid = false;
        }

        // Validation du message
        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
            isValid = false;
        } else if (formData.message.length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Effacer l'erreur quand l'utilisateur commence à taper
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulation d'envoi
            console.log('Formulaire envoyé:', formData);
            setSent(true);
        }
    };

    return (
        <div className="bg-base-200 min-h-screen flex justify-center pt-16">
            <div className="w-full max-w-md px-4">
                <h2 className="text-2xl text-center pb-8">Contact</h2>
                <div className="card bg-base-100 shadow-xl p-6">
                    {!sent ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        className="grow"
                                        placeholder="Nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.name && (
                                    <div className="text-error text-sm mt-1">{errors.name}</div>
                                )}
                            </div>
                            <div>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="email"
                                        name="email"
                                        className="grow"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.email && (
                                    <div className="text-error text-sm mt-1">{errors.email}</div>
                                )}
                            </div>
                            <div>
                                <select
                                    name="requestType"
                                    className="select select-bordered w-full"
                                    value={formData.requestType}
                                    onChange={handleChange}
                                >
                                    <option value="">Sélectionnez le type de demande</option>
                                    {requestTypes.map(type => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.requestType && (
                                    <div className="text-error text-sm mt-1">{errors.requestType}</div>
                                )}
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    className="textarea textarea-bordered w-full min-h-[120px]"
                                    placeholder="Votre message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && (
                                    <div className="text-error text-sm mt-1">{errors.message}</div>
                                )}
                            </div>
                            <button 
                                type="submit" 
                                className="btn"
                            >
                                Envoyer
                            </button>
                        </form>
                    ) : (
                        <p className="text-center text-success">Message envoyé, merci beaucoup !</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;